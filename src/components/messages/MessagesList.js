import React, { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import Message from "./Message";
import Loader from "../utils/Loader";
import { Row } from "react-bootstrap";
import CreateMessage from "./CreateMessage";
import { NotificationSuccess, NotificationError } from "../utils/Notifications";
import { listWritings, writeSomething } from "../../utils/contractMethods";

const MessagesList = ({ login, account }) => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  //  دالة للحصول على قائمة الرسائل الموجودة
  const getMessages = useCallback(async () => {
    try {
      setLoading(true);
      setMessages(await listWritings());
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  });

  // دالة لإضافة رسالة
  const addMessage = async (data) => {
    try {
      setLoading(true);
      await writeSomething(data).then((resp) => {
        console.log(resp);
        getMessages();
      });
      toast(<NotificationSuccess text="تمت إضافة رسالتك بنجاح" />);
    } catch (error) {
      console.log({ error });
      toast(<NotificationError text="تعذر إضافة الرسالة " />);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <Row className="d-flex justify-content-between my-5 py-3">
            <CreateMessage save={addMessage} login={login} account={account} />
          </Row>
          <Row s={1} sm={1} lg={3} className="g-3 mb-5 g-xl-4 g-xxl-5">
            {messages.map((message, index) => (
              <Message {...message} key={index} />
            ))}
          </Row>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MessagesList;
