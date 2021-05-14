import "./App.css";

const App = () => {
  const formatName = (user) => {
    return user.firstName + " " + user.lastName;
  };

  // Can use JSX as an expression too

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, stranger</h1>;
  }

  const user = {
    firstName: "Harsh",
    lastName: "Tenguriya",
    avatarUrl: "https://picsum.photos/200",
  };

  // const element = getGreeting(user);

  // Specifying attributes in jsx
  // const element = <div tabIndex="0"></div>;
  const element = <img src={user.avatarUrl} alt="Anyimage" />;

  return <>{element}</>;
};

export default App;
