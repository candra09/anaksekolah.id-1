import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Kelas from "./components/Kelas";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        {/* <Home /> */}
        <Register />
        <Footer />
      </div>
    </div>
  );
}

export default App;
