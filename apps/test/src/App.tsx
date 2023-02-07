import "./App.css";
import { useDragScroll } from "@ethan-heo/react-hooks";

function App() {
    useDragScroll("#test-div", { boundary: 80 });

    return (
        <div className="App">
            <div id="test-div">
                <div className="test-div__inner-content">
                    <div draggable>hello world</div>
                </div>
            </div>
        </div>
    );
}

export default App;
