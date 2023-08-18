import logo from "./logo.svg";
import "./App.css";
import { increaseCounter, decreaseCounter } from "./action/actions";
import { connect, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";

function App(props) {
  const dispatch = useDispatch();
  const newCount = useSelector((state) => {
    return state.counter.count;
  });

  const handleIncrease = () => {
    dispatch(increaseCounter());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and Hoi Dan IT!</h1>
        <div>Count: {newCount}</div>

        <button onClick={() => handleIncrease()}>Increase Count</button>

        <button onClick={() => dispatch(decreaseCounter())}>
          Decrease Count
        </button>
      </header>
    </div>
  );
}

// // mapping  State của Redux Store vào Props của React
// const mapStateToProps = (state) => {
//   return {
//     // state.count là count được khai báo từ file reducer
//     count: state.counter.count,
//   };
// };

// // mapping Dispatch (hàm) của Redux vào Props React
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
