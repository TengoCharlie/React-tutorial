import React from "react";
import "./App.css";

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "Coconut" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert(`A name was Submited: ${this.state.value}`);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           {/* Name:
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           /> */}
//           {/* Essay:
//           <textarea value={this.state.value} onChange={this.handleChange} /> */}
//           Pick Your Favorite Flavour:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="coconut">Coconut</option>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="submit" />
//       </form>
//     );
//   }
// }

// =====================================================================================
// Handle Multiple Inputs

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

const App = () => {
  return (
    <>
      <Reservation />
    </>
  );
};

export default App;
