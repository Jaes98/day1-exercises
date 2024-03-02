import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffect from "./exercises/UseEffect";
import FetchDemo from "./exercises/FetchDemo";
import ContextDemo from "./exercises/ContextDemo";
import LiftingState from "./exercises/LiftingState";

export default function App() {
  const [selectedView, setSelectedView] = useState("info");

  function handleSelected(selected: string) {
    setSelectedView(selected);
  }

  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? (
              <p>All exercises for React day-1</p>
            ) : null}
            {selectedView == "props1" ? <PropsDemo title="Props Demo" /> : null}
            {selectedView == "list1" ? <ListDemo title="List Demo" /> : null}
            {selectedView == "img1" ? (
              <EventDemo title="Image button Demo" />
            ) : null}
            {selectedView == "form-un" ? (
              <FormUncontrolled title="Form Uncontrolled Demo" />
            ) : null}
            {selectedView == "state-demo1" ? (
              <StateDemo1 title="State Demo 1" />
            ) : null}
            {selectedView == "state-demo2" ? (
              <StateDemo2 title="State Demo 2" />
            ) : null}
            {selectedView == "state-demo3" ? (
              <StateDemo3 title="State Demo 3" />
            ) : null}
            {selectedView == "use-effect" ? (
              <UseEffect title="Use Effect" />
            ) : null}
            {selectedView == "fetch-demo" ? (
              <FetchDemo title="Fetch Demo" />
            ) : null}
            {selectedView == "lifting-state" ? (
              <LiftingState title="Lifting State" />
            ) : null}
            {selectedView == "context-demo" ? (
              <ContextDemo title="Context Demo" />
            ) : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("list1")}>
        List demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("img1")}>
        Image demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("form-un")}>
        Form Uncontrolled
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state-demo1")}>
        State demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state-demo2")}>
        State demo2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state-demo3")}>
        State demo3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("use-effect")}>
        Use Effect
      </button>
      <button className="btn-w100" onClick={() => handleSelected("fetch-demo")}>
        Fetch Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("lifting-state")}>
        Lifting State
      </button>
      <button className="btn-w100" onClick={() => handleSelected("context-demo")}>
        Context Demo
      </button>
    </>
    
  );
};
