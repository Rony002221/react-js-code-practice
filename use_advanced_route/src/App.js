import logo from './logo.svg';
import './App.css';
import MyRouter from './components/myRouter'
import Navigation from './components/navigation'
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <Navigation/>
          <MyRouter/>

      </BrowserRouter>


    </div>
  );
}

export default App;
