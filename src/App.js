import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import RegisterMurid from "./components/Navbar/RegisterMurid";
import RegisterGuru from "./components/Navbar/RegisterGuru";
import SD from "./components/Pembelajaran/SD";
import SilabusMTK from "./components/Silabus/Matematika";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        {/* <Home /> */}
        {/* <RegisterMurid /> */}
        {/* <RegisterGuru /> */}
        {/* <SD /> */}
        <SilabusMTK />
        <Footer />
      </div>
    </div>
  );
}

export default App;
