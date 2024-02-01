import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Comp from './bomviewer_gopi/comp_main';
import Component3 from './planner_chitra/comp3_main';
import Cust_asset from './assest_harish/custasset'
import Machine from './assest_harish/Machine';
import Table from './operator/table2.js';
import Leftbox from './inspection/leftbox.js';
import Lbox from './inspector/lbox.js';
import Disp from './home_gokul/one'
import CustData from './assest_harish/custdata';

function App()
{
return (
    <div className='App'>

    <Routes>
      <Route path='*' element={<Disp/>}></Route>
      <Route path='/bom' element={<Comp/>}></Route>
      <Route path='/planner' element={<Component3/>}></Route>
      <Route path='/cust_assest' element={<Cust_asset/>}></Route>
      <Route path='/custdata' element={<CustData/>}></Route>
      <Route path='/mach' element={<Machine/>}></Route>
      <Route path='/inspection' element={<Leftbox/>}></Route>
      <Route path='/operator' element={<Table/>}></Route>
      <Route path='/inspector' element={<Lbox/>}></Route>     
      
     </Routes>
     </div>
  );
}
export default App;