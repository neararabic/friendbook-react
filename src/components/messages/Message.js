import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function Message({ message, receiver, sender }) {
  return (
    <Col size={3}>
      <Card>
        <Card.Body>
          <Card.Title> من {sender} </Card.Title>
          <Card.Text>{message}</Card.Text>
          <Card.Subtitle> إلى {receiver} </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
}
