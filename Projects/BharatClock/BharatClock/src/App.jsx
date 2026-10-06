import './App.css'
import AppName from "./components/AppName.jsx";
import AppSlogan from "./components/AppSlogan.jsx";
import AppCurrentTime from "./components/AppCurrentTime.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
     <AppName/>
      <AppSlogan/>
      <AppCurrentTime/>
    </center>
  )
}

export default App
