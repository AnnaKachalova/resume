import type { JSX } from "react";
import "./styles/global.css";
import "./styles/variables.css";

import Main from "./components/main/main";

function App(): JSX.Element {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
