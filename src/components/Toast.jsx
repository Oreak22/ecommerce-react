import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';


const Toasts = ({toggle}) => {
    const toastTrigger = useRef(null)
    const toastLiveExample = useRef(null)
    const [show, setShow] = useState(false);

     
  return (
   <div className='container-lg'>
     <Row>
        <Col xs={6}>
        <Toast className='fixed-top' onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Body className='bg-success text-light text-center'>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
        </Col>
        <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
        </Col>
  </Row>
   </div>
  )
}

export default Toasts