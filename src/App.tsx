import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import NewsLetter from "./components/NewsLetter";
import Boxes from "./components/Boxes";
import { LearningMethode } from "./context/Interfaces";

let DUMMY_LEARNING_MATIRAL: LearningMethode[];

DUMMY_LEARNING_MATIRAL = [
  {
    methodeId: Date.now().toString(),
    methodeName: "Virtual",
    methodeImg: "bi bi-laptop",
    methodeDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem accusantium perferendis, nostrum vero odio",
  },
  {
    methodeId: Date.now().toString(),
    methodeName: "Hybrid",
    methodeImg: "bi bi-person-square",
    methodeDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem accusantium perferendis, nostrum vero odio",
  },
  {
    methodeId: Date.now().toString(),
    methodeName: "In person",
    methodeImg: "bi bi-people",
    methodeDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptatem accusantium perferendis, nostrum vero odio",
  },
];

function App() {
  return (
    <div className="App">
      {/* nav bar not collapsing needs fix */}
      <Navbar />
      {/* fix img its not working for some weird reason */}
      <Showcase />
      <NewsLetter />
      <Boxes items={DUMMY_LEARNING_MATIRAL} />
    </div>
  );
}

export default App;
