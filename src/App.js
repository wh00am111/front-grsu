
import './App.css';
const handleClick = () => alert("say mio");

function App() {
  return (
    <div className="App">
      <input type="login" placeholder={"Login"}/>
      <input type="password" placeholder={"Password"}/>
      <button onClick={handleClick}>
        click me
      </button>
    </div>
  );
}

export default App;
