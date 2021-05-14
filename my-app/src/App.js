import React from "react";
import "./App.css";

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

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
        <FormattedDate date={this.state.date} />
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
