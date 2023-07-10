// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Card} from 'react-bootstrap'
import {  useRef } from 'react';

function FormInput(props) {

    const itemNameRef = useRef()
    const itemDescRef = useRef()
    const itemPriceRef = useRef()
    const itemLRef = useRef()
    const itemMRef = useRef()
    const itemSRef = useRef()



  const handleSubmit = (event) => {
    event.preventDefault();
    const itemRefDetails = {id:Math.random(),name:itemNameRef.current.value, desc:itemDescRef.current.value, price:itemPriceRef.current.value, large:itemLRef.current.value,medium:itemMRef.current.value, small:itemSRef.current.value}
    console.log(itemRefDetails)
    props.addToProductArr(itemRefDetails)
  };

  return (
    <Card style={{padding:'2rem', background:'lightgreen'}}>
    <Form  onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Item name"
            ref={itemNameRef}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Item Description</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Item Description"
            ref={itemDescRef}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Item Price</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Item Price"
            ref={itemPriceRef}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="1" controlId="validationCustom04">
          <Form.Label>Large</Form.Label>
          <Form.Control
            required
            type="number"
            ref={itemLRef}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="1" controlId="validationCustom05">
          <Form.Label>Medium</Form.Label>
          <Form.Control
            required
            type="number"
            ref={itemMRef}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="1" controlId="validationCustom05">
          <Form.Label>Small</Form.Label>
          <Form.Control
            required
            type="number"
            ref={itemSRef}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      <Button type="submit">Add Product</Button>
    </Form>
    </Card>
  );
}

export default FormInput;