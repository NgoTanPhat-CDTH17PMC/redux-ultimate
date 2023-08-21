import logo from "./logo.svg";
import "./App.css";
import { increaseCounter, decreaseCounter } from "./action/actions";
import { connect, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import Home from "./components/Home";

function App(props) {
  const dispatch = useDispatch();
  const newCount = useSelector((state) => {
    return state.counter.count;
  });

  const handleIncrease = () => {
    dispatch(increaseCounter());
  };

  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    const data = res && res.data ? res.data : [];
  };

  useEffect(() => {
    fetchAllUser();
  }, []);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and Hoi Dan IT!</h1>
        <div>Count: {newCount}</div>

        <button onClick={() => handleIncrease()}>Increase Count</button>

        <button onClick={() => dispatch(decreaseCounter())}>
          Decrease Count
        </button>
      </header> */}
      <Home />
    </div>
  );
}

export default App;
