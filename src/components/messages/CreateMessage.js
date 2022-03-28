import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import img from "../../assets/img/main.jpg";
const CreateMessage = ({ save, account, login }) => {
  const [message, setMessage] = useState("");
  const [receiver, setReceiver] = useState("");

  // دالة لتحقق من أن الحقول ليست فارغة
  const isFormFilled = () => {
    console.log(!(message && receiver));
    return message && receiver;
  };

  return (
    <Row>
      <Col xs={12} md={6}>
        <img src={img} class="img-fluid" alt="smapleimage" />
      </Col>
      <Col xs={12} md={6}>
        <Row>
          <h4>
            {" "}
            أهلاً بك في كتاب الأصدقاء لإرسال رسالة إلى أصدقائك قم بادخال
            المعلومات هنا
          </h4>
          <Form className="px-6 mt-5">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="اكتب رسالتك هنا "
              required
              minLength="2"
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            />
            <br />
            <Form.Control
              type="text"
              placeholder=" اكتب حساب الشخص المرسل إليه"
              required
              minLength="2"
              value={receiver}
              onChange={({ target }) => setReceiver(target.value)}
            />
            <br />
            {account ? (
              <Button
                type="submit"
                disabled={!isFormFilled()}
                onClick={() => {
                  save({ message, receiver });
                }}
              >
                أرسل{" "}
              </Button>
            ) : (
              <Button onClick={login}>سجل الدخول </Button>
            )}
            <br />
          </Form>
        </Row>
      </Col>
    </Row>
  );
};

export default CreateMessage;
