import "./App.css";
import ChangeColor from "./components/ChangeColor";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <h1 className="text-purple-500 text-4xl">Welcome to React Redux!</h1>

      <Profile />

      <Login />

      <ChangeColor />
    </div>
  );
}

export default App;
