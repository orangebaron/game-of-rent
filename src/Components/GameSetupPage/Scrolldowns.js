import React from 'react';
import './Scrolldowns.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


// function Scrolldowns(){
// return(
// <Dropdown>
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//     Dropdown Button
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>);
// }
function Scrolldowns() {
  return (
    <div className="Scrolldowns">
      <p className="Scrolldowns-numPlayers">
        <select size="3">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </p>
      <p className="Scrolldowns-cities">
        <select size="3">
          <option>Nashville</option>
          <option>Chicago</option>
          <option>Seattle</option>
          <option>New York</option>
          <option>Atlanta</option>
          <option>Los Angeles</option>
          <option>San Francisco</option>
          <option>Philadelphia</option>
          <option>Brooklyn</option>
          <option>Denver</option>
        </select>
      </p>
    </div>
  );
}

export default Scrolldowns;
