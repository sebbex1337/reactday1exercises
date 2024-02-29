import PropsDemo from "./exercises/PropsDemo";
import { useState } from "react";
import "./App.css";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffect from "./exercises/UseEffect";
import FetchDemo from "./exercises/FetchDemo";
import LiftingState from "./exercises/LiftingState";
import ContextDemoApp from "./exercises/ContextDemo";

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
                        {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
                        {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
                        {selectedView == "props1" ? <PropsDemo title="Props Demo1" /> : null}
                        {selectedView == "list" ? <ListDemo title="List Demo" /> : null}
                        {selectedView == "event" ? <EventDemo title="Event Demo" /> : null}
                        {selectedView == "formuncontrolled" ? <FormUncontrolled title="Form uncontrolled" /> : null}
                        {selectedView == "usestatedemo1" ? <StateDemo1 title="Use State Demo 1" /> : null}
                        {selectedView == "usestatedemo2" ? <StateDemo2 title="Use State Demo 2" /> : null}
                        {selectedView == "usestatedemo3" ? <StateDemo3 title="Use State Demo 3" /> : null}
                        {selectedView == "useeffectdemo" ? <UseEffect title="Use Effect Demo" /> : null}
                        {selectedView == "fetchdemo" ? <FetchDemo title="Fetch Demo" /> : null}
                        {selectedView == "liftingstate" ? <LiftingState title="Lifting State Demo" /> : null}
                        {selectedView == "contextdemo" ? <ContextDemoApp title="Context Demo" /> : null}
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
            <button className="btn-w100" onClick={() => handleSelected("list")}>
                List demo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("event")}>
                Event Demo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("formuncontrolled")}>
                Form Uncontrolled
            </button>
            <button className="btn-w100" onClick={() => handleSelected("usestatedemo1")}>
                useState Demo 1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("usestatedemo2")}>
                useState Demo 2
            </button>
            <button className="btn-w100" onClick={() => handleSelected("usestatedemo3")}>
                useState Demo 3
            </button>
            <button className="btn-w100" onClick={() => handleSelected("useeffectdemo")}>
                Use Effect Demo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("fetchdemo")}>
                Fetch Demo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("liftingstate")}>
                Lifting State Demo
            </button>
            <button className="btn-w100" onClick={() => handleSelected("contextdemo")}>
                Context Demo
            </button>
        </>
    );
};
