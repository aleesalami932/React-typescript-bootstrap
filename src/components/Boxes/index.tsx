import React from "react";
import Card from "../../UI/Cards/Card";
import {
  ILearningMethodePros,
  LearningMethode,
} from "../../context/Interfaces";

const Boxes = (props: ILearningMethodePros) => {
  console.log(props);
  return (
    <section className="p-5">
      <div className="container">
        <div className="row text-center g-4">
          {props.items.map((item: LearningMethode) => {
            return (
              <div className="col-md">
                <Card
                  methodeImg={item.methodeImg}
                  methodeDescription={item.methodeDescription}
                  methodeId={item.methodeId}
                  methodeName={item.methodeName}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Boxes;
