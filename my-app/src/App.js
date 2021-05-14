import "./App.css";

const App = () => {
  const formatName = (user) => {
    return user.firstName + " " + user.lastName;
  };

  const user = {
    firstName: "Harsh",
    lastName: "Tenguriya",
  };

  const element = <h1>Hello, {formatName(user)}</h1>;

  return <>{element}</>;
};

export default App;
