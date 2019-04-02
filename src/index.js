import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Game() {
  return (
    <div>
      <form>
        PlayerName:
        <input type="text" name="name" />
        <input type="submit" value="Submit" />
      </form>
      <App />
    </div>
  );
}

ReactDOM.render(<Game />, document.getElementById("root"));
