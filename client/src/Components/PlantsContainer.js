import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

import PlantCard from './PlantCard';


function PlantsContainer(props) {




  return (
    <>
      <Container>
        <Row lg={4} className="justify-content-md-center">
          {props.plantsArr.map( plant => <PlantCard plant={plant}/> )}
        </Row>
      </Container>
    </>
  );
}

export default PlantsContainer;
