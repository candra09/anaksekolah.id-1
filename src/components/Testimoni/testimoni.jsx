import React from "react";
import "./testimoni.css";
import Carousel from "./carousel";
import CarouselYt from "./carousel-yt";


export default function Testimoni() {
  return (
      <div className="main">
      <div class="fluid-jumbotron bg-blue p-5  " style={{height:'300px'}}>
        <div className="container">
          <div className="overlay text-dark align-center pt-5">
            <h5 class="display-5 fw-bold my-3 text-center text-white">
              Testimoni
            </h5>
          </div>
        </div>
      </div>

      <div className="container my-3 p-3">
          <div className="text-center">
              <h3>Cerita Serunya bersama Anaksekolah.ID</h3>
          </div>
          <div className="card-body text-center align-items-center justify-content-center " >
                        <a href="#" className="btn button  px-4 py-2 m-2 text-size-1">
                            {/* <i></i> */}
                            Siswa
                            </a>
                        <a href="#" className="btn button px-4 py-2 m-2 text-size-1">
                            {/* <i></i> */}
                            Guru
                            </a>
                        <a href="#" className="btn button  px-4 py-2 m-2 text-size-1">
                            {/* <i></i> */}
                            Umum
                            </a>
          </div>
        
      </div>
      {/* Carousel */}
      <Carousel/>
      

      {/* tengah */}
      {/* <div className="container m-4">
      <div className="container card p-3  align-items-center justify-content-center">
          <div className="row g-0">
              <div className="col-sm-5">
                  <img className="card-img" src="" />
              </div>
              <div className="col-sm-7">
                  <div className="card-body">
                      <h5 className="card-title">Review Pembelajaran</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus. Eu, purus gravida in integer neque faucibus adipiscing. Amet lectus dictum erat et.</p>
                      <a href="#" className="btn button">Selengkapnya</a>
                  </div>
              </div>
          </div>
      </div>
      </div> */}


      <div className="container">
          <div className="card col-md-12 p-3 border-0">
            <div className="row">
                <div className="col-md-6">
                        {/* <img className="w-100" src={IMAGE} style={{width:'450px'}}/> */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/YJym5QIC8aY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-5 p-4">
                        <div className="card-block">
                            <h5 className="card-title">Review Pembelajaran</h5>
                            <p className="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus. Eu, purus gravida in integer neque faucibus adipiscing. Amet lectus dictum erat et.</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: '#3EB0EF', borderRadius: '20px'}}>Selengkapnya</a>
                        </div>
                    </div>
                </div>
            </div>
      </div>

      <div className="container my-3 p-3">
          <div className="card-body text-center align-items-center justify-content-center " >
                        <a href="#" className="btn button2 px-4 py-2 m-2 text-size-1">
                            {/* <i></i> */}
                            Siswa
                            </a>
                        <a href="#" className="btn button2 px-4 py-2 m-2 text-size-1">
                            {/* <i></i> */}
                            Guru
                            </a>
                        <a href="#" className="btn button2  px-4 py-2 m-2 text-size-1">
                            {/* <i></i> */}
                            Umum
                            </a>
          </div>
        
      </div>

        <CarouselYt />
        <div style={{marginBottom: '100px'}}></div>




    	


            
    </div>
  );
}
