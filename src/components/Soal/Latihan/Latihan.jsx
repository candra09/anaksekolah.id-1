import React, { useState } from "react";
import mtk from "../../../assets/img/IconMTK.png";

export default function Latihan() {
  return (
    <div className="container">
      <div className="col my-5 border-25">
        <div className="row bg-dblue">
          <h1 className="my-3 mx-5 p-3 text-white">Soal Latihan 1</h1>
        </div>
        <div className="row d-flex bg-blue">
          <div className="col-md-3 d-lg-inline-flex p-5">
            <img src={mtk} alt="" className="w-100" />
          </div>
          <div className="col-md-9 d-lg-inline-flex">
            <div className="mt-5 mx-5 text-white">
              <h1 className="fw-bolder">Rules</h1>
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
      <div className="container my-5 border-25">
        <div className="col">
          <form>
            <div className="form-group mb-3">
              <label>
                1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                nesciunt quibusdam, quia laboriosam, accusamus ratione nulla
                dolorum itaque ea dolor id odio perspiciatis distinctio iusto
                totam quasi tenetur est possimus!
              </label>
              <div className="jawaban my-3">
                <div className="form-check">
                  <input type="radio" name="" id="" />
                  <label>Pilihan 1</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="" id="" />
                  <label>Pilihan 2</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="" id="" />
                  <label>Pilihan 3</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="" id="" />
                  <label>Pilihan 4</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="" id="" />
                  <label>Pilihan 5</label>
                </div>
              </div>
            </div>
            <div className="form-group mb-3">
              <label>
                2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                nesciunt quibusdam, quia laboriosam, accusamus ratione nulla
                dolorum itaque ea dolor id odio perspiciatis distinctio iusto
                totam quasi tenetur est possimus!
              </label>
              <div className="jawaban my-3">
                <div className="form-check">
                  <input type="radio" name="" id="" />
                  <label>Pilihan 1</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="" id="" />
                  <label>Pilihan 2</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="" id="" />
                  <label>Pilihan 3</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="" id="" />
                  <label>Pilihan 4</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="" id="" />
                  <label>Pilihan 5</label>
                </div>
              </div>
            </div>
            <div className="form-group mb-3">
              <label>
                3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                nesciunt quibusdam, quia laboriosam, accusamus ratione nulla
                dolorum itaque ea dolor id odio perspiciatis distinctio iusto
                totam quasi tenetur est possimus!
              </label>
              <div className="jawaban my-3">
                <div className="form-check">
                  <input type="radio" name="" id="" />
                  <label>Pilihan 1</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="" id="" />
                  <label>Pilihan 2</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="" id="" />
                  <label>Pilihan 3</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="" id="" />
                  <label>Pilihan 4</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="" id="" />
                  <label>Pilihan 5</label>
                </div>
              </div>
            </div>
          </form>
          <div className="row my-2">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
