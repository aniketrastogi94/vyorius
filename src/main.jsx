import React from 'react';
import {Button} from 'react-bootstrap';
const mainPart=()=>{
  return (
    <div className="mainConatiner" >
      <h6 className="tx" >CONNECTING THE DISCONNECTED</h6>
      <h1><span className="tx" >Vyorius</span> brings unmanned</h1>
      <h1>robots <span className="tx" >together</span>,</h1>
      <h1>Wherever they are</h1>
      <br/>
      <p className='px' >With all of the operations,commanding and maintenance</p>
      <p className='px' >tools in one place ,unmanned vehicles will stay connected</p>
      <p className='px'>and productive no matter where you're Delivering</p>
      <Button className="try" variant="warning" size="lg">Try Vyorius</Button>
      <Button className="learn" variant="outline-warning" size="lg" >Learn More</Button>
      <p className='sm' >Need to order a delivery?<a href='/'>Get Started</a></p>
    </div>
  );
}

export default mainPart;