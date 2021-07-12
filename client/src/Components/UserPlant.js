import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import moment from "moment";

import UserPlantCard from "./UserPlantCard";

function UserPlant(props) {

  const [wateringFrequency, setWateringFrequency] = useState(null);

  // gets the current date mm/dd/yyyy
  let MyDate = new Date();
  MyDate.setDate(MyDate.getDate());
  let MyDateString =
    ("0" + (MyDate.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + MyDate.getDate()).slice(-2) +
    "/" +
    MyDate.getFullYear();
  // adds to the current date the watering frequency
  let dateWithWareingFrequency = new Date(MyDateString);
  dateWithWareingFrequency.setDate(
    dateWithWareingFrequency.getDate() +
      props.user.user_plants[0].watering_frequency
  );
  // checks the new updated date vs the current date
  if (dateWithWareingFrequency.getDate() > MyDate.getDate()) {
    let newDate = new Date(MyDateString);
    newDate.setDate(
      newDate.getDate() + props.user.user_plants[0].watering_frequency
    );
    dateWithWareingFrequency = newDate;
    console.log(dateWithWareingFrequency);
  }
  console.log(MyDateString);
  console.log(dateWithWareingFrequency);
  console.log(props.user);
  console.log(props.user.user_plants);
  console.log(props.user.user_plants[0].watering_frequency);

  // let sorted = props.user.user_plants.sort(
  //   (a, b) => a.watered_date.localeCompare(b.watered_date)
  //   )
  //   console.log(sorted)

  // let datePlus = sorted.map(watered_date.split('/') => datePlus[0] = Number(datePlus[3]) + sorted.watering_frequency)
  // console.log(datePlus.join('/'))

  // let sorted = props.user.user_plants.sort(
  //   (a, b) => a.watered_date.getDate() - b.watered_date.getDate()
  //   )
  //   console.log(sorted)

  return (
    <>
      <Container>
        {props.user.name}
        <Row lg={4} className="justify-content-md-center">
          {props.user.plants.map((plant) => (
            <UserPlantCard plant={plant} {...props} />
          ))}
        </Row>

        {/* <Button>
          Edit Profile
        </Button> */}
      </Container>
    </>
  );
}

export default UserPlant;
