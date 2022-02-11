import React, { useState } from "react";
import showcase from "../../img/showcase.svg";
import Modall from "../Modal";

const Showcase = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="bg-dark text-light p-5 p-lg-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Become a <span className="text-warning">Web Developer</span>
            </h1>
            <p className="lead my-4">
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev role
            </p>
            <button className="btn btn-primary btn-lg" onClick={handleShow}>
              Start The Enrollment
            </button>
          </div>
          <img
            src={showcase}
            alt="showcase img"
            className="img-fluid w-50 d-done d-sm-block"
          />
        </div>
        <Modall show={show} handleClose={handleClose} />
      </div>
    </section>
  );
};

export default Showcase;
