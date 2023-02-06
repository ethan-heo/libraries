import "./App.css";
import { useMoveToScroll } from "@ethan-heo/react-hooks";

function App() {
    useMoveToScroll("#test-div");

    return (
        <div className="App">
            <div id="test-div">
                <div className="test-div__inner-content"></div>
            </div>
        </div>
    );
}

export default App;
