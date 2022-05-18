import React from "react";
import "../../styles/Home.css";
import prom from "../../assets/videos/prom.mp4";
import background from "../../assets/img/back.png";
import P1 from "./assets/P1.png";
import P2 from "./assets/P2.png";
import P3 from "./assets/P3.png";
import P4 from "./assets/P4.png";
import P5 from "./assets/P5.png";

export default function Home() {
  return (
    <div className="main">
      <div class="fluid-jumbotron bg-blue p-5" id="jumbotron">
        <div className="container overlay text-dark align-center">
          <h5 class="display-5 fw-bold mb-0">
            Semua kebutuhan belajar <br />
            ada di AnakSekolah.ID
          </h5>
          <p class="fw-bold py-3">
            Aplikasi Pembelajaran Online <br />
            Untuk anak Sekolah
          </p>
          <a href="" className="btn btn-md btn-primary rounded-pill">
            Download Aplikasi
          </a>
        </div>
      </div>

      <div className="container my-3 bg-blue border-25 p-3">
        <div class="d-flex row mx-4 py-3 text-center">
          <h3 className="my-3 text-white">Pilih Jenjang Pendidikan : </h3>
          <div className="col-md">
            <a
              href="/SD"
              className="btn btn-primary w-100 m-2 px-2 fs-4 rounded-pill fw-bold"
            >
              SD
            </a>
          </div>
          <div className="col-md">
            <a
              href=""
              className="btn btn-primary w-100 m-2 px-2 fs-4 rounded-pill fw-bold"
            >
              SMP
            </a>
          </div>
          <div className="col-md">
            <a
              href=""
              className="btn btn-primary w-100 m-2 px-2 fs-4 rounded-pill fw-bold"
            >
              SMA
            </a>
          </div>
          <div className="col-md">
            <a
              href=""
              className="btn btn-primary w-100 m-2 px-2 fs-4 rounded-pill fw-bold"
            >
              SMK
            </a>
          </div>
        </div>
        <div class="card-group mx-2 my-3 text-white">
          <div className="card mx-3 mb-5 bg-info">
            <div class="card-body bg-image" id="SD">
              <div class="justify-content-end">
                <a href="" className="btn btn-sm bg-light fw-bold col-sm-4">
                  Promo
                </a>
              </div>
              <h5 className="fst-italic col-md col-sm-8">
                Paket Pembelajaran Kelas Sekolah Dasar
              </h5>
            </div>
            <div className="card-footer bg-light text-dark d-flex">
              <h6 className="fst-italic fw-bolder m-3 py-2 flex-grow-1">
                Rp 1.000.000
              </h6>
              <a
                href=""
                className="btn btn-sm bg-warning rounded-pill fw-bold w-50 my-3 p-2"
              >
                Langganan
              </a>
            </div>
          </div>
          <div className="card mx-3 mb-5 bg-info">
            <div class="card-body bg-image" id="SMP">
              <div class="justify-content-end">
                <a href="" className="btn btn-sm bg-light fw-bold col-sm-4">
                  Promo
                </a>
              </div>
              <h5 className="fst-italic col-sm-8 col-md">
                Paket Pembelajaran Kelas
                <br /> Sekolah Menengah Pertama
              </h5>
            </div>
            <div className="card-footer bg-light text-dark d-flex">
              <h6 className="fst-italic fw-bolder m-3 py-2 flex-grow-1">
                Rp 1.000.000
              </h6>
              <a
                href=""
                className="btn btn-sm bg-warning rounded-pill fw-bold w-50 my-3 p-2"
              >
                Langganan
              </a>
            </div>
          </div>
          <div className="card mx-3 mb-5 bg-info">
            <div class="card-body bg-image" id="SMA">
              <div class="justify-content-end">
                <a href="" className="btn btn-sm bg-light fw-bold col-sm-4">
                  Promo
                </a>
              </div>
              <h5 className="fst-italic col-sm-8 col-md">
                Paket Pembelajaran Kelas
                <br /> Sekolah Menengah Atas
              </h5>
            </div>
            <div className="card-footer bg-light text-dark d-flex">
              <h6 className="fst-italic fw-bolder m-3 py-2 flex-grow-1">
                Rp 1.000.000
              </h6>
              <a
                href=""
                className="btn btn-sm bg-warning rounded-pill fw-bold w-50 my-3 p-2"
              >
                {" "}
                Langganan
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="jumbotron my-3">
        <h2 class="text-center py-3 fw-bolder fs-1">
          Kejar cita-citamu bersama AnakSekolah.ID
        </h2>
        <div class="container">
          <video class="w-100" controls src={prom}></video>
        </div>
      </div>

      <div className="container my-3">
        <div class="d-flex align-items-start mb-3">
          <div className="row">
            <div class="col-md mx-2">
              <div class="">
                <h1 class="fw-bolder py-5 px-3">
                  Apa saja yang bisa kamu dapatkan dalam AnakSekolah.id?
                </h1>
              </div>
              <div class="bg-primary text-white box-border py-4">
                <div class="rounded-end">
                  <div className="row px-3">
                    <h3 class="fw-bolder">Konten Belajar Berkualitas</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Accusantium dignissimos perspiciatis est. Hic accusamus
                      vitae, eaque, cupiditate neque accusantium commodi
                      distinctio nulla ullam soluta voluptates nesciunt nam,
                      modi explicabo facere.
                    </p>
                  </div>
                  <br />
                  <div className="row text-center">
                    <h5 class="fw-bolder pb-2">Apa saja konten belajarnya?</h5>
                    <div className="col">
                      <img src="./img/icon/Video Playlist.png" alt="Video" />
                      <p>Video pembelajaran menarik</p>
                    </div>
                    <div className="col">
                      <img src="./img/icon/Test Passed.png" alt="Test" />
                      <p>Tugas di setiap Video</p>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col">
                      <img
                        src="./img/icon/Spiral Bound Booklet.png"
                        alt="Booklet"
                      />
                      <p>Rangkuman dan Infografik</p>
                    </div>
                    <div className="col">
                      <img src="./img/icon/Exam.png" alt="" />
                      <p>Soal Latihan Berkualitas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md mx-2">
              <div class="box-border my-2">
                <h4 className="my-2">
                  Ratusan ribu soal latihan <br /> untuk persiapan ujian
                </h4>
                <p className="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  repellendus rem voluptatem doloribus tempora commodi, magnam
                  sunt earum optio expedita distinctio quaerat neque dolor ex,
                  veritatis quod, deserunt reprehenderit iure.
                </p>
                <img className="w-100" src="./img/sec01.png" alt="section" />
              </div>
              <div class="box-border my-2">
                <img
                  className="w-100"
                  src="./img/footersec02.png"
                  alt="section"
                />
                <h4 className="my-4">
                  Kelas online yang seru <br /> dan interaktif
                </h4>
                <p className="my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  repellendus rem voluptatem doloribus tempora commodi, magnam
                  sunt earum optio expedita distinctio quaerat neque dolor ex,
                  veritatis quod, deserunt reprehenderit iure.
                </p>
              </div>
            </div>
            <div class="col-md mx-2">
              <div class="box-border my-2">
                <h4 className="my-2">
                  Belajar dengan guru yang ahli <br /> dan berkompeten
                </h4>
                <p className="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  repellendus rem voluptatem doloribus tempora commodi, magnam
                  sunt earum optio expedita distinctio quaerat neque dolor ex,
                  veritatis quod, deserunt reprehenderit iure.
                </p>
                <img className="w-100" src="./img/sec03.png" alt="section" />
              </div>
              <div class="box-border my-2">
                <img className="w-100" src="./img/sec04.png" alt="section" />
                <h4 className="my-4">
                  Temukan solusi cara belajar <br /> yang anda suka
                </h4>
                <p className="my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  repellendus rem voluptatem doloribus tempora commodi, magnam
                  sunt earum optio expedita distinctio quaerat neque dolor ex,
                  veritatis quod, deserunt reprehenderit iure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          <div class="d-flex flex-nowrap align-items-start my-3">
            <div className="row">
              <div className="col-md bg-blue border-rd">
                <h1 className="fs-1 text-white py-4 px-3 my-3 mx-4">
                  Download AnakSekolah.ID <br />
                  di HP
                </h1>
                <p className="text-white px-3 mx-4 my-4 fs-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quos, aspernatur. Sed unde aliquid, tempore, facere
                  perspiciatis in obcaecati harum, voluptate ad deleniti
                  expedita est porro commodi quis vel alias impedit.
                </p>
                <a
                  href="#"
                  className="btn btn-primary btn-lg px-5 my-5 mx-4 rounded-pill"
                >
                  Download Aplikasi
                </a>
              </div>
              <div className="col-md text-white mb-2">
                <img
                  src="./img/Online robot.png"
                  alt="robot"
                  className="align-center justify-content-center w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3 p-3">
        <h3 className="fw-bolder m-3 p-3">Yang seru di AnakSekolah.ID</h3>
        <div className="row mx-2">
          <div className="col-md my-2">
            <img src="./img/slide/1.png" className="w-100" />
          </div>
          <div className="col-md my-2">
            <img src="./img/slide/2.png" className="w-100" />
          </div>
          <div className="col-md my-2">
            <img src="./img/slide/3.png" className="w-100" />
          </div>
        </div>
      </div>

      <div className="container my-3">
        <h3 className="fw-bolder m-3 p-3 text-center">
          Belajar bersama Guru ahli terbaik
        </h3>
        <div class="card-group mx-2 my-3 text-white">
          <div className="card mx-3 mb-5">
            <div class="card-body bg-image" id="T1"></div>
            <div className="card-footer bg-light text-dark">
              <p className="text-center fst-italic fw-bolder">
                Nama Guru
                <br />
                Mapel
              </p>
              <p className="m-3 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae excepturi mollitia accusamus natus cumque,
                reprehenderit voluptates. Ducimus eveniet quos molestias iste
                unde iusto adipisci distinctio vero impedit saepe, modi officia?
              </p>
            </div>
          </div>
          <div className="card mx-3 mb-5 rounded-pill">
            <div class="card-body bg-image" id="T1"></div>
            <div className="card-footer bg-light text-dark">
              <p className="text-center fst-italic fw-bolder">
                Nama Guru
                <br />
                Mapel
              </p>
              <p className="m-3 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae excepturi mollitia accusamus natus cumque,
                reprehenderit voluptates. Ducimus eveniet quos molestias iste
                unde iusto adipisci distinctio vero impedit saepe, modi officia?
              </p>
            </div>
          </div>
          <div className="card mx-3 mb-5 rounded-pill">
            <div class="card-body bg-image" id="T1"></div>
            <div className="card-footer bg-light text-dark">
              <p className="text-center fst-italic fw-bolder">
                Nama Guru
                <br />
                Mapel
              </p>
              <p className="m-3 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae excepturi mollitia accusamus natus cumque,
                reprehenderit voluptates. Ducimus eveniet quos molestias iste
                unde iusto adipisci distinctio vero impedit saepe, modi officia?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-2 p-1">
        <h3 className="fw-bolder p-3 text-center">
          Paling baru di AnakSekolah.id
        </h3>
        <div class="col mx-2 my-3 text-white">
          <div className="row">
            <div className="col-md mx-3 mb-5">
              <img src={P1} alt="" className="w-100 h-100" />
            </div>
            <div className="col-md mx-3 mb-5">
              <img src={P2} alt="" className="w-100 pb-3 h-50" />
              <img src={P3} alt="" className="w-100 h-50" />
            </div>
            <div className="col-md mx-3 mb-5">
              <img src={P4} alt="" className="w-100 pb-3 h-50" />
              <img src={P5} alt="" className="w-100 h-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
