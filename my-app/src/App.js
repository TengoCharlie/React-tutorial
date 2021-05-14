import React from "react";
import "./App.css";

// This part of code nbeeds to be enter in Index.js
// ==============================================================
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }
// setInterval(tick, 1000);
// ==============================================================

class Clock extends React.Component {
  //Added locale state to class
  constructor(props) {
    super(props); //Class components should always call the base constructor with props
    this.state = { date: new Date() };
  }

  // Adding Life cycle method

  // The componentDidMount() method runs after the component output has been rendered to the DOM. This is a good place to set up a timer:
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  // We will tear down the timer in the componentWillUnmount() lifecycle method
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // It will use this.setState() to schedule updates to the component local state:
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

const App = () => {
  return (
    <>
      <Clock />
    </>
  );
};

export default App;
