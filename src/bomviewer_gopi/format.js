import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const MyComponent = () => {
  const [showTable, setShowTable] = useState(false);

  const handleClick = () => {
    setShowTable(!showTable); // Toggle the value of showTable
  };

  const renderTooltip = (props) => (
    <Tooltip id="tooltip" {...props}>
      Click To See Excel Format
    </Tooltip>
  );

  return (
    <div>
      <OverlayTrigger placement="top" overlay={renderTooltip}>
        <FontAwesomeIcon
          icon={faInfoCircle}
          style={iconStyle}
          onClick={handleClick}
        />
      </OverlayTrigger>
      {showTable && (
        <div className="Format">
          <table className="table table-bordered ">
          <thead className="table-header">
                <tr>
                  <th>SL.NO</th>
                  <th>Sub Assy part No</th>
                  <th>REV NO</th>
                  <th>Child Part No</th>
                  <th>Part Name</th>
                  <th>Quantity</th>
                  <th>Surface Finish</th>
                  <th>Material</th>
                  <th>Qty In Drawing</th>
                  <th>Thickness</th>
                  <th>Width</th>
                  <th>Length</th>
                  <th>Blank Wt</th>
                  <th>Powder Coating Area</th>
                  <th>Powder Usage in Kgs</th>
                  <th>Assembly/Sub part</th>
                  <th>Commodity</th>
                  <th>Source</th>
                  <th>Wire Rack/Non Wire Rack Parts</th>
                  <th>Revision No</th>
                  <th>Revision Details</th>
                  <th>No. Of Bends</th>
                  <th>Tapping</th>
                  <th>Clinching / Riveting / Welding</th>
                  <th>METAL STAMP</th>
                  <th>POWDER COATING</th>
                </tr>
              </thead>
          </table>
        </div>
      )}
    </div>
  );
};

const iconStyle = {
  color: 'blue',
  cursor: 'pointer',
  marginLeft: '5px',
};

export default MyComponent;
