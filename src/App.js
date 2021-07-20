import React, { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import { applyNumber } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const calcClick = (evt) => {
    dispatch(applyNumber(parseInt(evt.target.innerText, 10)));
    console.log(evt.target.innerText);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="google.com">
          <img width="40px" src="./Lambda-Logo-Red.png" alt="" /> Lambda Reducer
          Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={calcClick} value={1} />
              <CalcButton onClick={calcClick} value={2} />
              <CalcButton onClick={calcClick} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={calcClick} value={4} />
              <CalcButton onClick={calcClick} value={5} />
              <CalcButton onClick={calcClick} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={calcClick} value={7} />
              <CalcButton onClick={calcClick} value={8} />
              <CalcButton onClick={calcClick} value={9} />
            </div>

            <div className="row">
              <CalcButton value={"+"} />
              <CalcButton value={"*"} />
              <CalcButton value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
