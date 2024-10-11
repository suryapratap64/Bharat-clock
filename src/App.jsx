import "./App.css";
import Clockheading from "./components/Clockheadind";
import Clockslogan from "./components/Clockslogan";
import Currenttime from "./components/Currenttime";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return <center class="home "
  >
  <Clockheading/>
  <Clockslogan/>
  <Currenttime/>
  </center>
}

export default App;
