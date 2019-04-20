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
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>Test Update again</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<Test />, rootElement);
