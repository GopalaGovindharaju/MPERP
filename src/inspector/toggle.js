import { Switch } from "antd";

function ToggleButton() {
  return(
    <div>
      <label>Full-part Approved</label>
      <Switch 
        defaultChedked={false}
        checkedChildren="Yes"
        unCheckedChildren="No"
    />
    </div>
    
  );
}
export default ToggleButton;