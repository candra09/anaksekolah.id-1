import React from "react";
import mtk from "../../assets/img/IconMTK.png";
import "./index.css";

export default function Silabus() {
  return (
    <div className="container">
      <div className="col my-5 border-25">
        <div className="row d-flex ">
          <div className="col-md-3 d-lg-inline-flex p-1">
            <img src={mtk} alt="" className="w-75 mx-5" />
          </div>
          <div className="col-md-9 d-lg-inline-flex">
            <div className="mt-5 mx-5 text-white">
              <h1 className="fw-bolder text-dark ">Kesenian </h1>
              <br />
              <p className="fs-4 text-dark">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquid corrupti autem repellat magni consectetur dicta officiis
                facilis dolores quia fugit! Laudantium, illum totam reiciendis
                possimus minima corporis dolorum autem beatae?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="jumbotron my-3">
        <h2 class="text-center py-3 ">
          Music | Tari Tradisional | Paduan Suara | Teater | Seni Rupa
        </h2>
      </div>

      <div class="jumbotron my-3">
        <h1 class="text-center py-3 ">Tutorial Seni</h1>
      </div>

      <div class="container">
        <div class="row mt-2">
          <div class="col-3  px-0  ">
            <img src={mtk} alt="" className="w-75 mx-5" />
          </div>
          <div class="col-9 bg-gray pt-3 px-3">
            <h2>Kesenian</h2>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-3  px-0  ">
            <img src={mtk} alt="" className="w-75 mx-5" />
          </div>
          <div class="col-9 bg-gray pt-3 px-3">
            <h2>Kesenian</h2>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-3  px-0  ">
            <img src={mtk} alt="" className="w-75 mx-5" />
          </div>
          <div class="col-9 bg-gray pt-3 px-3">
            <h2>Kesenian</h2>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </div>
        </div>
      </div>

      <div class="jumbotron my-3">
        <h1 class="text-center py-3 ">Event Ekstra Kulikuler Kesenian</h1>
      </div>

      <div className="container" id="event">
        <div className="row">
          <div className="col-md mx-3 mb-5">
            <img src={mtk} alt="" className="w-100 h-100" />
          </div>
          <div className="col-md mx-3 mb-5">
            <img src={mtk} alt="" className="w-100 pb-3 h-50" />
            <img src={mtk} alt="" className="w-100 h-50" />
          </div>
          <div className="col-md mx-3 mb-5">
            <img src={mtk} alt="" className="w-100 pb-3 h-50" />
            <img src={mtk} alt="" className="w-100 h-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
