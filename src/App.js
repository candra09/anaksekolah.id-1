import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import RegisterMurid from "./components/Navbar/RegisterMurid";
import SD from "./components/Pembelajaran/SD";
import Silabus from "./components/Silabus/Silabus";
import Tugas from "./components/Tugas/Tugas";
import Soal from "./components/Soal/Soal";
import Diskusi from "./components/Diskusi/Diskusi";
import Ekskul from "./components/Ekskul/Ekskul";
import Ekskuldetail from "./components/Ekskuldetail/Ekskuldetail"
import PromoSD from "./components/PromoSD/PromoSD"
import PromoSMP from "./components/PromoSMP/PromoSMP"
import PromoSMA from "./components/PromoSMA/PromoSMA"
import Event from "./components/Event/Event"
import MateriAmbil from "./components/MateriAmbil/MateriAmbil"

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
              <Route path="/register" exact component={RegisterMurid} />
              <Route path="/SD" exact component={SD} />
              <Route path="/silabus" exact component={Silabus} />
              <Route path="/tugas" exact component={Tugas} />
              <Route path="/soal" exact component={Soal} />
              <Route path="/diskusi" exact component={Diskusi} />
              <Route path="/ekskul" exact component={Ekskul} />
              <Route path="/ekskuldetail" ecaxt component={Ekskuldetail} />
              <Route path="/promoSD" exact component={PromoSD} />
              <Route path="/promoSMP" exact component={PromoSMP} />
              <Route path="/promoSMA" exact component={PromoSMA} />
              <Route path="/event" exact component={Event} />
              <Route path="/materiAmbil" exact component={MateriAmbil} />
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
