import React from "react";
import "./Transaksi.css";
import mtk from "../../assets/img/IconMTK.png";
import fisika from "./assets/173.png";

export default function Transaksi() {
  return (
    <div className="jumbotron bg-blue">
      <div className="container py-3">
        <div className="row px-3">
          <h3 className="m-3 text-white pb-3">Kelas saya</h3>
        </div>
        <div className="row mb-3">
          <div className="col-11 p-2">
            <input
              type="text"
              placeholder="Search"
              name="search"
              class="form-control"
            />
          </div>
          <div className="col-1 py-2">
            <a href="/">
              <i class="fa fa-search fs-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* list belanja */}
        <div className="row px-2">
          <div class="card-body bg-light p-3 w-75 my-3 border-progress">
            <div className="d-flex flex-nowrap">
              <div className="col-sm-3 pt-2">
                <h3 className="mx-3">Progress</h3>
              </div>
              <div className="col-sm-6 pt-2">
                <p class="card-text">Kelas : ID Kelas </p>
                <h2 className="py-1">Matematika Kelas 4</h2>
                <a href="/silabus" class="btn btn-primary">
                  Silabus
                </a>
              </div>
              <div className="col-sm-3 justify-content-md-end">
                {" "}
                <img src={mtk} alt="" className="w-100" />
              </div>
            </div>
          </div>
          <div class="card-body bg-light p-3 border-done w-75 my-3">
            <div className="d-flex flex-nowrap">
              <div className="col-sm-3 pt-2">
              <h3 className="mx-3">Selesai</h3>
              </div>
              <div className="col-sm-6 pt-2">
                <p class="card-text">Kelas : ID Kelas </p>
                <h2 className="py-1">Fisika Kelas 4</h2>
                <a href="/silabus" class="btn btn-primary">
                  Silabus
                </a>
              </div>
              <div className="col-sm-3">
                {" "}
                <img src={fisika} alt="" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
