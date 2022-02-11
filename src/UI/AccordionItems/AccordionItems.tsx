import React from "react";
import { Faq } from "../../context/Interfaces";

const AccordionItem = (props: Faq) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={"flush-heading" + props.faqId}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#flush-collapse" + props.faqId}
          aria-expanded="false"
          aria-controls={"flush-collapse" + props.faqId}
        >
          {props.faqQuestion}
        </button>
      </h2>

      <div
        id={"flush-collapse" + props.faqId}
        className="accordion-collapse collapse"
        aria-labelledby={"flush-heading" + props.faqId}
        data-bs-parent="#fqa"
      >
        <div className="accordion-body">{props.faqAnswer}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
