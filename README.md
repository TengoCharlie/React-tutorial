# Forms

```javascript
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components".

## Controlled Components

In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with `setState()`.

We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

## Option drop down in HTML and JSX

Note that the Coconut option is initially selected, because of the selected attribute. React, instead of using this selected attribute, uses a value attribute on the root select tag. This is more convenient in a controlled component because you only need to update it in one place

```javascript
<select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">
    Coconut
  </option>
  <option value="mango">Mango</option>
</select>;

class FlavorForm extends React.Component {
  //In jsx
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

## `<select multiple={true} value={['B', 'C']}>`

## Handle Multiple inputs in Form

When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of `event.target.name`.

Note how we used the ES6 computed property name syntax to update the state key corresponding to the given input name:

```javascript
this.setState({ [name]: value })`
It is equivalent to this ES5 code:
```

```javascript
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```

Also, since setState() automatically merges a partial state into the current state, we only needed to call it with the changed parts.

## Controlled Input Null Value

Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. If you’ve specified a value but the input is still editable, you may have accidentally set value to undefined or null.

The following code demonstrates this. (The input is locked at first but becomes editable after a short delay.)

```javascript
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function () {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);

// mountNode is where the input field will mount eg--> mountNode = document.getElementbyId("root")
```

Fully-Fledged Solutions
If you’re looking for a complete solution including validation, keeping track of the visited fields, and handling form submission, [Formik](https://jaredpalmer.com/formik) is one of the popular choices. However, it is built on the same principles of controlled components and managing state — so don’t neglect to learn them.
