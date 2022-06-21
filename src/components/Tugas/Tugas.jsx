import React, { useState } from "react";
import { MDBCollapse, MDBBtn } from "mdb-react-ui-kit";
import "../../App.css";
import mtk from "../../assets/img/IconMTK.png";

export default function Matematika() {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <div className="container">
      <div className="col my-5 border-25">
        <div className="row bg-dblue">
          <h1 className="my-3 mx-5 p-3 text-white">Matematika</h1>
        </div>
        <div className="row d-flex bg-blue">
          <div className="col-md-3 d-lg-inline-flex p-5">
            <img src={mtk} alt="" className="w-100" />
          </div>
          <div className="col-md-9 d-lg-inline-flex">
            <div className="mt-5 mx-5 text-white">
              <h1 className="fw-bolder">Matematika kelas 3</h1>
              <br />
              <p className="fs-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquid corrupti autem repellat magni consectetur dicta officiis
                facilis dolores quia fugit! Laudantium, illum totam reiciendis
                possimus minima corporis dolorum autem beatae?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col my-5 border-25">
        <div className="row bg-dblue">
          <nav class="navbar navbar-expand-lg bg-dblue navbar-dark">
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav mx-3">
                <li class="nav-item">
                  <a class="nav-link" href="/silabus">
                    Silabus
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/tugas">
                    Tugas
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/soal">
                    Soal
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/diskusi">
                    Diskusi
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="row row-cols-1 bg-blue px-5">
          <div className="mt-5 px-5 py-3 bg-lblue border-25">
            <h1 className="display-3">Tugas 1</h1>
            <div className="col-md my-3">
              <MDBBtn tag="a" onClick={toggleShow}>
                Deskripsi
              </MDBBtn>
            </div>
            <MDBCollapse show={showShow}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
              <div className="col-md text-center">
                <MDBBtn className="btn-success mx-2 rounded-pill">
                  Submit
                </MDBBtn>
              </div>
            </MDBCollapse>
          </div>
          <div className="col mt-5 px-5 py-3 bg-lblue border-25">
            <h1 className="display-3">Tugas 2</h1>
            <div className="col-md my-3">
              <MDBBtn tag="a" onClick={toggleShow}>
                Deskripsi
              </MDBBtn>
            </div>
            <MDBCollapse show={showShow}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
              <div className="col-md text-center">
                <MDBBtn className="btn-success mx-2 rounded-pill">
                  Submit
                </MDBBtn>
              </div>
            </MDBCollapse>
          </div>
          <div className="col mt-5 px-5 py-3 bg-lblue border-25">
            <h1 className="display-3">Tugas 3</h1>
            <div className="col-md my-3">
              <MDBBtn tag="a" onClick={toggleShow}>
                Deskripsi
              </MDBBtn>
            </div>
            <MDBCollapse show={showShow}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
              <div className="col-md text-center">
                <MDBBtn className="btn-success mx-2 rounded-pill">
                  Submit
                </MDBBtn>
              </div>
            </MDBCollapse>
          </div>
          <div className="col mt-5 px-5 py-3 bg-lblue border-25">
            <h1 className="fs-2">Tugas 4</h1>
            <div className="col-md my-3">
              <MDBBtn tag="a" onClick={toggleShow}>
                Deskripsi
              </MDBBtn>
            </div>
            <MDBCollapse show={showShow}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
              <div className="col-md text-center">
                <MDBBtn className="btn-success mx-2 rounded-pill">
                  Submit
                </MDBBtn>
              </div>
            </MDBCollapse>
          </div>
          <div className="col mt-5 mb-5 px-5 py-3 bg-lblue border-25">
            <h1 className="display-3">Tugas 5</h1>
            <div className="col-md my-3">
              <MDBBtn tag="a" onClick={toggleShow}>
                Deskripsi
              </MDBBtn>
            </div>
            <MDBCollapse show={showShow}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
              <div className="col-md text-center">
                <MDBBtn className="btn-success mx-2 rounded-pill">
                  Submit
                </MDBBtn>
              </div>
            </MDBCollapse>
          </div>
        </div>
      </div>
    </div>
  );
}
