import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import NewsLetter from "./components/NewsLetter";
import Boxes from "./components/Boxes";
import Learn from "./components/Learn";
import LearReact from "./components/Learn/LearnReact";
import FAQ from "./components/FAQ/FAQ";
import {
  DUMMY_LEARNING_MATIRAL,
  DUMMY_FAQ,
  DUMMY_INATRUCTORS,
  DUMMY_CONTACT,
} from "../src/context/DummyData";
import Instructors from "./components/Instructors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* nav bar not collapsing needs fix */}
      <Navbar />
      <Showcase />
      <NewsLetter />
      <Boxes items={DUMMY_LEARNING_MATIRAL} />
      <Learn />
      <LearReact />
      <FAQ items={DUMMY_FAQ} />
      <Instructors items={DUMMY_INATRUCTORS} />
      <Contact
        enrollmentEmail={DUMMY_CONTACT.enrollmentEmail}
        enrollmentPhone={DUMMY_CONTACT.enrollmentPhone}
        mainLocation={DUMMY_CONTACT.mainLocation}
        studentEmail={DUMMY_CONTACT.studentPhone}
        studentPhone={DUMMY_CONTACT.studentPhone}
      />
      <Footer />
    </div>
  );
}

export default App;
