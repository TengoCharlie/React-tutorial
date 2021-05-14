import React from "react";
import "./App.css";

// Map function in React
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) => <li>{number * 2}</li>);

// List Components
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => (
//     <li key={number.toString()}>{number}</li>
//   ));
//   return <ul>{listItems}</ul>;
// }

// const numbers = [1, 2, 3, 4, 5];

// ========================================
// Corect ways to use Keys
// function ListItem(props) {
//   // Correct! There is no need to specify the key here:
//   return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => (
//     // Correct! Key should be specified inside the array.
//     <ListItem key={number.toString()} value={number} />
//   ));
//   return <ul>{listItems}</ul>;
// }

// const numbers = [1, 2, 3, 4, 5];
// ==============================================================
// Key Must be unique among its sibbilings

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];

const App = () => {
  return (
    <>
      {/* <ul>{listItems}</ul> */}
      {/* <NumberList numbers={numbers} /> */}
      <Blog posts={posts} />
    </>
  );
};

export default App;
