import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Task } from "./components/Task_2";

function App() {
  return (
    <div styles={{backgroundColor:"black"}}>
      <Task/>
    </div>
  );
}

export default App;

//Route specifies the function that will be rendered on reacing specific path(Eg: when navbar redirects to /blog url then Blog function from Main will be rendered)
