import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

class Test extends React.Component {
  render() {
    return <App />;
  }
}
function App() {
  return (
    <div className="App">
      <h1>Aditya' Home</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<Test />, rootElement);
