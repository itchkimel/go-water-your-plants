import React from 'react';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";




function PlantCard(props) {
  return (
    <>
      <Col>
        <Card className='text-center'>
          <Card.Img src={props.plant.image} width="200" height="137" alt={props.plant.name} />
          <Card.Body>
          <Card.Title className="nav-text">
            {props.plant.name}
          </Card.Title>
          {/* <Card.Text>{props.guitar.guitar.model}</Card.Text> */}
        </Card.Body>
        </Card>
      </Col>
      
      
      {/* {props.plant.name} */}

    </>
  );
}

export default PlantCard;
