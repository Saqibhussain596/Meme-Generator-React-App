import React from "react";
import "./App.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
// import Window from "./components/Window";
import Form from "./components/Form";
export default function App(props) {
  const [show, setShow] = React.useState(true);
  function toggleShow() {
    setShow(!show);
  }
  return (
    <>
      <Header />
      <Meme />
      {/* <div className="container">
        <button type="button" onClick={toggleShow}>
          Toggle WindowTracker
        </button>
        {show && <Window />}
      </div>  This section is only for practice*/}
      {/* <Form /> This section was for my practice only */}
    </>
  );
}
