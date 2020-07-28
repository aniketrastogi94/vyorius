import React from 'react';
import {Nav} from 'react-bootstrap';
const Navbar=()=>{
  return(
    <div className='container' >
      <h1 className="main">Vyorius</h1>
    <Nav activeKey="/home" className="justify-content-center" >
      <Nav.Item>
        <Nav.Link className="nav1" eventKey="link-1">Why Vyorius?</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav1" eventKey="link-2">Solutions</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav1" eventKey="link-3">Product</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav1" eventKey="link-3">Use Cases</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav1" eventKey="link-3">Team</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav1" eventKey="link-3">Partners</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav1" eventKey="link-3">Contact us</Nav.Link>
      </Nav.Item>
    </Nav>
    <button className="launch" >Launch Vyorius</button>
</div>
  );
}
export default Navbar;