import classes from "./App.module.css";
import Container from "./components/Container";

function App() {
  return (
    <div className={`${classes.App} w-full h-screen`}>
      <Container />
    </div>
  );
}

export default App;
