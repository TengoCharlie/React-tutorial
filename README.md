# Lifting State Up

Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. Let’s see how this works in action.

However, we want these two inputs to be in sync with each other. When we update the Celsius input, the Fahrenheit input should reflect the converted temperature, and vice versa.

In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”. We will remove the local state from the TemperatureInput and move it into the Calculator instead.

Now, no matter which input you edit, `this.state.temperature` and `this.state.scale` in the Calculator get updated. One of the inputs gets the value as is, so any user input is preserved, and the other input value is always recalculated based on it.

Let’s recap what happens when you edit an input:

React calls the function specified as `onChange` on the DOM `<input>`. In our case, this is the `handleChange` method in the `TemperatureInput` component.
The handleChange method in the TemperatureInput component calls `this.props.onTemperatureChange()` with the new desired value. Its `props`, including `onTemperatureChange`, were provided by its parent component, the Calculator.
When it previously rendered, the Calculator had specified that`onTemperatureChange`of the Celsius `TemperatureInput` is the Calculator’s `handleCelsiusChange` method, and `onTemperatureChange` of the Fahrenheit `TemperatureInput` is the Calculator’s `handleFahrenheitChange` method. So either of these two Calculator methods gets called depending on which input we edited.
Inside these methods, the Calculator component asks React to re-render itself by calling `this.setState()` with the new input value and the current scale of the input we just edited.
React calls the Calculator component’s render method to learn what the UI should look like. The values of both inputs are recomputed based on the current temperature and the active scale. The temperature conversion is performed here.
React calls the render methods of the individual `TemperatureInput` components with their new props specified by the Calculator. It learns what their UI should look like.
React calls the render method of the `BoilingVerdict` component, passing the temperature in Celsius as its props.
React DOM updates the DOM with the boiling verdict and to match the desired input values. The input we just edited receives its current value, and the other input is updated to the temperature after conversion.
Every update goes through the same steps so the inputs stay in sync.

## Lessons Learned

There should be a single “source of truth” for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.

Lifting state involves writing more “boilerplate” code than two-way binding approaches, but as a benefit, it takes less work to find and isolate bugs. Since any state “lives” in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.

If something can be derived from either props or state, it probably shouldn’t be in the state. For example, instead of storing both celsiusValue and fahrenheitValue, we store just the last edited temperature and its scale. The value of the other input can always be calculated from them in the `render()` method. This lets us clear or apply rounding to the other field without losing any precision in the user input.

When you see something wrong in the UI, you can use React Developer Tools to inspect the props and move up the tree until you find the component responsible for updating the state. This lets you trace the bugs to their source:
