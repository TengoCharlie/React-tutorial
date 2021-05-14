## Preventing Component from Rendering

In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.

In the example below, the `<WarningBanner />` is rendered depending on the value of the prop called warn. If the value of the prop is false, then the component does not render:

Returning `null` from a component’s render method does not affect the firing of the component’s lifecycle methods. For instance
`componentDidUpdate` will still be called.
