import React from "react";

import { Form, Button, Col, Card } from "react-bootstrap";

function UserPlantCard(props) {
  let { user, plant } = props;

  // console.log(props.user.user_plants[0].watering_frequency);

  function handleWateredButton(e) {
    let MyDate = new Date();
    MyDate.setDate(MyDate.getDate());
    let MyDateString =
      ("0" + (MyDate.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + MyDate.getDate()).slice(-2) +
      "/" +
      MyDate.getFullYear();

    const UserPlant = user.user_plants.filter(
      (userPlantObj) => userPlantObj.plant_id === plant.id
    );
    UserPlant[0].watered_date = MyDateString;
    console.log(UserPlant[0])


    if (UserPlant[0].watered_date === MyDateString) {
      const reqMethod = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(UserPlant[0]),
      };
      fetch(`http://localhost:3000/user_plants/${UserPlant[0].id}`, reqMethod)
        .then((res) => res.json())
        .then((res) => {
          console.log("hello", res);
        });
    }
  }

  return (
    <>
      <Col>
        <Card className="text-center">
          <Card.Img
            src={plant.image}
            width="200"
            height="137"
            alt={plant.name}
          />
          <Card.Body>
            <Card.Title className="nav-text">{plant.name}</Card.Title>
            {/* <Card.Text>{props.guitar.guitar.model}</Card.Text> */}
          </Card.Body>
        </Card>
        <Button onClick={handleWateredButton}>I've been watered today!</Button>
      </Col>
    </>
  );
}

export default UserPlantCard;
