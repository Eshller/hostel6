import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// core components

function Notifications() {
  const [alert1, setAlert1] = React.useState(true);
  const [alert2, setAlert2] = React.useState(true);
  const [alert3, setAlert3] = React.useState(true);
  const [alert4, setAlert4] = React.useState(true);
  return (
    <>
      <div className="section section-notifications text-center">
        <h3 style={{fontWeight: "bolder", fontFamily: "cursive"}}>Notifications</h3>
        <Alert color="success" isOpen={alert1}>
          <Container>
            <strong>Well done!</strong> You successfully read this important
            alert message.
          </Container>
        </Alert>
        <Alert color="info" isOpen={alert2}>
          <Container>
            <strong>Heads up!</strong> This alert needs your attention, but it's
            not super important.
          </Container>
        </Alert>
        <Alert color="warning" isOpen={alert3}>
          <Container>
            <strong>Warning!</strong> Better check yourself, you're not looking
            too good.
          </Container>
        </Alert>
        <Alert color="danger" isOpen={alert4}>
          <Container>
            <strong>Oh snap!</strong> Change a few things up and try submitting
            again.
          </Container>
        </Alert>
      </div>
    </>
  );
}

export default Notifications;
