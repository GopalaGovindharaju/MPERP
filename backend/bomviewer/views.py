import json
from django.apps import apps
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import pandas as pd
#from . models import BomDetail
from rest_framework.decorators import api_view
from Cust_AssetList.models import CustomerAsset
from rest_framework.response import Response
from django.db import connection
from django.db import connections
from django.conf import settings

@csrf_exempt
def upload_file(request):
    if request.method == 'POST' and request.FILES.get('file'):
        uploaded_file = request.FILES['file']
        customerName = request.POST.get('customerName')
        productName = request.POST.get('productName')
        productNumber = request.POST.get('productNumber')
        df = pd.read_excel(uploaded_file, skiprows=2)

        # Create a dynamic table name
        table_name = f"{customerName}_{productName}_{productNumber}"

        # Check if the table already exists
        with connection.cursor() as cursor:
            cursor.execute(f'SELECT EXISTS(SELECT 1 FROM information_schema.tables WHERE table_name = %s)', [table_name])
            table_exists = cursor.fetchone()[0]

        if table_exists:
            return HttpResponse("File already exists.")

        # Create the table
        with connection.cursor() as cursor:
            column_definitions = ', '.join([f'"{col.replace(" ", "_").replace("/", "_")}" TEXT' for col in df.columns])
            cursor.execute(f'CREATE TABLE IF NOT EXISTS "{table_name}" (id SERIAL PRIMARY KEY, {column_definitions})')

        # Insert data into the newly created table
        with connection.cursor() as cursor:
            columns = ', '.join(['"' + col.replace(' ', '_').replace('/', '_') + '"' for col in df.columns])
            placeholders = ', '.join(['%s'] * len(df.columns))
            values = ', '.join([f"({placeholders})" for _ in df.index])
            flattened_data = [tuple(row) for row in df.values]
            cursor.executemany(f'INSERT INTO "{table_name}" ({columns}) VALUES ({placeholders})', flattened_data)

        return HttpResponse("File received and data stored in the database.")
    else:
        return HttpResponse('No file received.')
    

@csrf_exempt
@api_view(['POST'])
def delete_table(request):
    if request.method == 'POST':
        table_name = request.data.get('table_name')
        print(table_name)
        if table_name:
            with connection.cursor() as cursor:
                cursor.execute(f'DROP TABLE IF EXISTS "{table_name}"')
            return HttpResponse('deleted successfully.')
        else:
            return HttpResponse('Table name is missing.')
    else:
        return HttpResponse('Invalid request method.')


@csrf_exempt
@api_view(['POST'])
def update_table_data(request):
    if request.method == 'POST':
        try:
            table_name = request.data.get('table_name')  # Use request.data instead of request.POST
            updated_data = request.data.get('data')  # Use request.data instead of request.POST
            print(table_name)
            for row in updated_data:
                record_id = row['id']  # Assuming each row has a unique identifier 'id'
                
                # Construct the SQL query to update the record
                query = f'UPDATE "{table_name}" SET '
                params = []
                
                # Generate the SET clauses for each column
                for column_name, value in row.items():
                    if column_name != 'id':
                        query += f'"{column_name}" = %s, '
                        params.append(value)
                
                # Remove the trailing comma and space
                query = query[:-2]
                
                # Add the WHERE clause to update the specific record based on id
                query += f" WHERE id = %s"
                params.append(record_id)
                
                # Execute the SQL query
                with connection.cursor() as cursor:
                    cursor.execute(query, params)
                
            # Return a success response
            return Response({'message': 'Updated successfully'})
        except Exception as e:
            # Handle any exceptions that occur during the update process
            print(f"Error updating data: {str(e)}")
            return Response({'error': "Unable to update"}, status=500)
    else:
        # Return an error response if the request method is not POST
        return Response({'error': 'Invalid request method'}, status=400)


    
@api_view(['GET'])
def get_product_names(request):
    customer_name = request.GET.get('customerName')
    # Add your logic here to fetch the product names based on the customer name from your database
    customers = CustomerAsset.objects.filter(name=customer_name)
    product_names = customers.values_list('productName', flat=True)
    product_names = list(product_names)

    return Response({'productNames': product_names})

@api_view(['GET'])
def get_customer_names(request):
    customer_names = CustomerAsset.objects.values_list('name', flat=True).distinct()
    customer_names = list(customer_names)
    return Response({'customerNames': customer_names})

@api_view(['GET'])
def get_product_numbers(request):
    product_name = request.GET.get('productName')
    customer_name = request.GET.get('customerName')
    # Add your logic here to fetch the product numbers based on the product name and customer name from your database
    products = CustomerAsset.objects.filter(productName=product_name, name=customer_name)
    product_numbers = products.values_list('productNumber', flat=True)
    product_numbers = list(product_numbers)

    return Response({'productNumbers': product_numbers})

@api_view(['GET'])
def fetch_table(request):
    customerName = request.GET.get('customerName')
    productName = request.GET.get('productName')
    productNumber = request.GET.get('productNumber')
    table_name = f'"{customerName}_{productName}_{productNumber}"'

    # Fetch the table data
    with connections['default'].cursor() as cursor:
        cursor.execute(f"SELECT * FROM {table_name}")
        table_data = cursor.fetchall()

    # Prepare the response data
    data = []
    columns = []
    for row in table_data:
        # Extract the column names from the first row
        if not columns:
            columns = [col[0] for col in cursor.description]
        data.append(dict(zip(columns, row)))

    return Response(data)


    


