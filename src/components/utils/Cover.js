import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const Cover = ({ name, login, coverImg }) => {
  if ((name, login, coverImg)) {
    return (
      <div
        className="d-flex justify-content-center flex-column text-center "
        style={{ background: "#fff", minHeight: "100vh" }}
      >
        <div className="mt-auto text-light mb-5">
          <div
            className=" ratio ratio-1x1 mx-auto mb-2"
            style={{ maxWidth: "320px" }}
          >
            <img src={coverImg} alt="" />
          </div>
          <h1 style={{ color: "#000" }}>{name}</h1>
          <p style={{ color: "#000" }}>
            يرجى تسجيل الدخول بحساب نير لرؤية الكتاب
          </p>
          <Button
            onClick={login}
            variant="outline-primary"
            className="rounded-pill px-3 mt-3"
            style={{ color: "#000" }}
          >
            تسجيل الدخول
          </Button>
        </div>
      </div>
    );
  }
  return null;
};

Cover.propTypes = {
  name: PropTypes.string,
};

Cover.defaultProps = {
  name: "",
};

export default Cover;
