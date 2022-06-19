import React from "react";
import "../../styles/Home.css";
import prom from "../../assets/videos/prom.mp4";
import background from "../../assets/img/back.png";

export default function Home() {
  return (
    <div className="main">
      <div class="fluid-jumbotron bg-blue p-5" id="jumbotron">
        <div className="container overlay text-dark align-center">
          <h5 class="display-5 fw-bold mb-0">
            Semua kebutuhan belajar <br />
            ada di AnakSekolah.ID
          </h5>
          <p class="card-text fw-bold py-3">
            Aplikasi Pembelajaran Online <br />
            Untuk anak Sekolah
          </p>
          <a href="" className="btn btn-md btn-primary w-25 rounded-pill">
            Download Aplikasi
          </a>
        </div>
      </div>
      <div className="container my-3 bg-blue border-25">
        <div class="d-flex flex-row mx-4 py-3 text-center">
          <h3 className="my-1 text-white">Pilih Jenjang Pendidikan : </h3>
          <a
            href=""
            className="btn btn-primary m-2 px-2 fs-4 w-25 rounded-pill fw-bold"
          >
            SD
          </a>
          <a
            href=""
            className="btn btn-primary m-2 px-2 fs-4 w-25 rounded-pill fw-bold"
          >
            SMP
          </a>
          <a
            href=""
            className="btn btn-primary m-2 px-2 fs-4 w-25 rounded-pill fw-bold"
          >
            SMA
          </a>
        </div>
        </div>

      <div className="container my-3 bg-blue border-25">
        <div class="d-flex flex-row mx-4 py-3 text-center"></div>
        <div class="card-group mx-2 my-3 text-white">

          <div className="card mx-3 mb-5 bg-info">
            <div class="card-body bg-image" id="SMA">
              <div class="d-flex justify-content-end">
                <a
                  href=""
                  className="btn btn-sm bg-light m-3 rounded-pill w-25 fw-bold"
                >
                  Promo
                </a>
              </div>
              <h5 className="fst-italic mx-3">
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
          <div className="card mx-3 mb-5 bg-info">
            <div class="card-body bg-image" id="SMP">
              <div class="d-flex justify-content-end">
                <a
                  href=""
                  className="btn btn-sm bg-light m-3 rounded-pill w-25 fw-bold"
                >
                  Promo
                </a>
              </div>
              <h5 className="fst-italic mx-3">
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
          
        </div>
      </div>

      <div className="container my-3 bg-blue border-25">
        <div class="d-flex flex-row mx-4 py-3 text-center"></div>
        <div class="card-group mx-2 my-3 text-white">
        <div className="card mx-3 mb-5 bg-info">
            <div class="card-body bg-image" id="SMA">
              <div class="d-flex justify-content-end">
                <a
                  href=""
                  className="btn btn-sm bg-light m-3 rounded-pill w-25 fw-bold"
                >
                  Promo
                </a>
              </div>
              <h5 className="fst-italic mx-3">
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
          
          <div className="card mx-3 mb-5 bg-info">
            <div class="card-body bg-image" id="SMA">
              <div class="d-flex justify-content-end">
                <a
                  href=""
                  className="btn btn-sm bg-light m-3 rounded-pill w-25 fw-bold"
                >
                  Promo
                </a>
              </div>
              <h5 className="fst-italic mx-3">
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

      <div className="container my-3 bg-blue border-25">
        <div class="d-flex flex-row mx-4 py-3 text-center"></div>
        <div class="card-group mx-2 my-3 text-white">
        <div className="card mx-3 mb-5 bg-info">
            <div class="card-body bg-image" id="SMA">
              <div class="d-flex justify-content-end">
                <a
                  href=""
                  className="btn btn-sm bg-light m-3 rounded-pill w-25 fw-bold"
                >
                  Promo
                </a>
              </div>
              <h5 className="fst-italic mx-3">
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
          
          <div className="card mx-3 mb-5 bg-info">
            <div class="card-body bg-image" id="SMA">
              <div class="d-flex justify-content-end">
                <a
                  href=""
                  className="btn btn-sm bg-light m-3 rounded-pill w-25 fw-bold"
                >
                  Promo
                </a>
              </div>
              <h5 className="fst-italic mx-3">
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
      <div className="container my-3 bg-blue border-25">
        <div class="d-flex flex-row mx-4 py-3 text-center"></div>
        <div class="card-group mx-2 my-3 text-white">
        <div className="card mx-3 mb-5 bg-info">
            <div class="card-body bg-image" id="SMA">
              <div class="d-flex justify-content-end">
                <a
                  href=""
                  className="btn btn-sm bg-light m-3 rounded-pill w-25 fw-bold"
                >
                  Promo
                </a>
              </div>
              <h5 className="fst-italic mx-3">
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
          
          <div className="card mx-3 mb-5 bg-info">
            <div class="card-body bg-image" id="SMA">
              <div class="d-flex justify-content-end">
                <a
                  href=""
                  className="btn btn-sm bg-light m-3 rounded-pill w-25 fw-bold"
                >
                  Promo
                </a>
              </div>
              <h5 className="fst-italic mx-3">
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
      
    </div>
  );
}
