import React from "react";
import mtk from "../../assets/img/IconMTK.png";
import img1 from "../../assets/img/img-ekskul-1.png";
import img4 from "../../assets/img/img-ekskul-4.png";
import img5 from "../../assets/img/img-ekskul-5.png";
import img6 from "../../assets/img/img-ekskul-6.png";
import img7 from "../../assets/img/img-ekskul-7.png";
import "./index.css";

export default function Silabus() {
  return (
    <div className="container">
      <div className="col my-5 border-25">
        <div className="row d-flex ">
          <div className="col-md-3 d-lg-inline-flex p-1">
            <img src={img1} alt="" className="w-75 mx-5" />
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
          <iframe className= " w-75 mx-5 h-100"  src="https://www.youtube.com/embed/8eoToo_m1Jg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <img src={mtk} alt="" className="w-75 mx-5" /> */}
          </div>
          <div class="col-9 bg-gray pt-3 px-3">
            <h2>Seni Tari</h2>
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
          <iframe className= " w-75 mx-5 h-100" src="https://www.youtube.com/embed/kJ5G-NbEH1E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <img src={mtk} alt="" className="w-75 mx-5" /> */}
          </div>
          <div class="col-9 bg-gray pt-3 px-3">
            <h2>Music</h2>
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
            <iframe className= " w-75 mx-5 h-100" src="https://www.youtube.com/embed/z-S6_5YgbrQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
            {/* <img src={mtk} alt="" className="w-75 mx-5" /> */}
          </div>
          <div class="col-9 bg-gray pt-3 px-3">
            <h2>Teater</h2>
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
            <img src={img6} alt="" className="w-75 h-50 border-25" />
          </div>
          <div className="col-md mx-3 mb-5">
            <img src={img4} alt="" className="w-100 pb-3 h-25 border-25" />
            <img src={img7} alt="" className="w-100 h-25 border-25" />
          </div>
          <div className="col-md mx-3 mb-5">
            <img src={img5} alt="" className="w-100 pb-3 h-25 border-25" />
            <img src={img7} alt="" className="w-100 h-25 border-25" />
          </div>
        </div>
      </div>
    </div>
  );
}
