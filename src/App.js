import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegisterMurid from "./components/Navbar/RegisterMurid";
import RegisterGuru from "./components/Navbar/RegisterGuru";
import SD from "./components/Pembelajaran/SD";
import Silabus from "./components/Silabus/Silabus";
import Tugas from "./components/Tugas/Tugas";
import Soal from "./components/Soal/Soal";
import Diskusi from "./components/Diskusi/Diskusi";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <div className="app-header">
            <Navbar />
          </div>
          <Switch>
            <div className="app-content">
              <Route path="/" exact component={Home} />
              <Route path="/register_murid" exact component={RegisterMurid} />
              <Route path="/register_guru" exact component={RegisterGuru} />
              <Route path="/SD" exact component={SD} />
              <Route path="/silabus" exact component={Silabus} />
              <Route path="/tugas" exact component={Tugas} />
              <Route path="/soal" exact component={Soal} />
              <Route path="/diskusi" exact component={Diskusi} />
            </div>
          </Switch>
          <div className="app-footer">
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
