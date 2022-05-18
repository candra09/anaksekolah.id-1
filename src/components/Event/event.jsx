import React from "react";
import "./event.css";
import IMAGE from "../../assets/img/event.png";
import CarouselEvent from "./carousel-event";

export default function Event() {
  return (
      <div className="main">
      <div class="fluid-jumbotron bg-blue p-5  " style={{height:'300px'}}>
        <div className="container">
          <div className="overlay text-dark align-center pt-5">
            <h5 class="display-5 fw-bold my-3 text-center text-white">
              Event
            </h5>
          </div>
        </div>
      </div>

      
      

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


      <div className="container mt-5">
          <div className="card col-md-12 p-3 border-0">
            <div className="row">
                <div className="col-md-6 py-3">
                <div className="card-block">
                            <h5 className="card-title">Event  Terbaru</h5>
                            <p className="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus. Eu, purus gravida in integer neque faucibus adipiscing. Amet lectus dictum erat et.</p>
                            <a href="#" className="btn btn-primary" style={{backgroundColor: '#3EB0EF', borderRadius: '20px', alignContent: 'flex-end',}}>Selengkapnya</a>
                        </div>
                        
                    </div>
                    <div className="col-md-5 ">
                    <img className="w-100" src={IMAGE} style={{width:'300px', height: '300px'}}/>

                    </div>
                </div>
            </div>
      </div>

      <CarouselEvent/>



    	


            
    </div>
  );
}
