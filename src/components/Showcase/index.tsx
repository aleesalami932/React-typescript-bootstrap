import React from "react";
// import showcase from "../../img/showcase.svg";

const Showcase = () => {
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
            <button className="btn btn-primary btn-lg">
              Start The Enrollment
            </button>
          </div>
          <img
            src=""
            alt="showcase img"
            className="img-fluid w-50 d-done d-sm-block"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
