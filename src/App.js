import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import RegisterMurid from "./components/Register/RegisterMurid";
import SD from "./components/Pembelajaran/SD";
import Silabus from "./components/Silabus/Silabus";
import Tugas from "./components/Tugas/Tugas";
import Soal from "./components/Soal/Soal";
import Diskusi from "./components/Diskusi/Diskusi";
import Materi from "./components/Silabus/Materi/Materi";
import Latihan from "./components/Soal/Latihan/Latihan";
import pembayaran_1 from "./components/Pembayaran/pembayaran_1";
import pembayaran_2 from "./components/Pembayaran/pembayaran_2";
import Testimoni from "./components/Testimoni/testimoni";
import Event from "./components/Event/event";
import Offline from "./components/Offline";
import Ekskul from "./components/Ekskul/Ekskul";
import DetailEkskul from "./components/Ekskuldetail/index";
import PromoSD from "./components/Promo/PromoSD"

function App() {

  //tambah state untuk menampung staus online/offline
  const [offlineStatus, setOfflineStatus] = React.useState(!navigator.onLine);

  //fungsi untuk menghandle status offline/online
  function handleOfflineStatus() {
    setOfflineStatus(!navigator.onLine);
  }
  
  React.useEffect(function() {
  
    //ketika pertama kali components dijalankan maka akan mengecek status terlebih dahulu
    handleOfflineStatus();
    window.addEventListener('online', handleOfflineStatus);
    window.addEventListener('offline', handleOfflineStatus)
  
    //fungsi useeffect akan mendevinisikan components
    return function() {
        window.removeEventListener('online', handleOfflineStatus)
        window.removeEventListener('offline', handleOfflineStatus)
    }
}, [offlineStatus]);

  return (
    <div>
      <div className="App">
        <Router>
          <div className="app-header">
          {offlineStatus && <Offline/>}
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
              <Route path="/materi" exact component={Materi} />
              <Route path="/latihan" exact component={Latihan} />
              <Route path="/pembayaran_1" exact component={pembayaran_1} />
              <Route path="/pembayaran_2" exact component={pembayaran_2} />
              <Route path="/testimoni" exact component={Testimoni} />
              <Route path="/event" exact component={Event} />
              <Route path="/ekskul" exact component={Ekskul} />
              <Route path="/ekskul/detail" exact component={DetailEkskul} />
              <Route path="/promo/SD" exact component={PromoSD} />
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
