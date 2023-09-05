import React from "react";
import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        height: "100px",
        width: "100px",
        margin: "auto",
        display: "block",
        color: "#32795b",
      }}
    >
      <span className="sr-only mt-5 mb-5">درحال بارگذاری</span>
    </Spinner>
  );
}

export default Loader;
