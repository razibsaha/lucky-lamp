import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <Accordion  className='footer-accordion'>
      <Accordion.Item eventKey="0">
      <Accordion.Header> <h3>How React Works?</h3> </Accordion.Header>
    <Accordion.Body>
      React is a javascript library. With React we create independent Components. Then with set those components in a root component. Mostly it is app.js. Root file holds the child components. If there is a change in any of the child component react only update that with the help of virtual DOM, so it doesn't take much time to update.  
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><h3>Props vs State</h3> </Accordion.Header>
    <Accordion.Body>
      State makes out websites or applications Interactive. Props are immutable, to pass data from one component to another component we use Props. And to change value of any object we can use state. State is a mutable data store of components. State is an attribute of an component. 
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </div>
  );
};

export default Footer;