import React from "react";
import "../../styles/Ekskul.css";
import mtk from "../../assets/img/IconMTK.png";
import prom from "../../assets/videos/prom.mp4";
import background from "../../assets/img/back.png";

export default function Home() {
  return (
    <div className="main">
      <div class="fluid-jumbotron bg-blue p-5" id="jumbotron">
        <div className="container overlay text-dark align-center">
          <h5 class="display-5 fw-bold mb-0">
            Temukan Ekstra Kulikuler  <br />
            yang kamu minati 
          </h5>
         
        </div>
      </div>

      

      <div class="jumbotron my-3">
        <h2 class="text-center py-3 fw-bolder fs-1">
          Ekstra Kulikuler AnakSekolah.ID
        </h2>
      </div>


      <div class="container">
        <div class="row">
            <div class="col-3  px-0  ">
                <img src={mtk} alt="" className="w-75 mx-5" />
            </div>
            <div class="col-9 bg-info p-3">
                <h2 >Kesenian</h2>
                <p>lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
            </div>

        </div>

        <br>
        </br>

        <div class="row">
            <div class="col-3  px-0 ">
                <img src={mtk} alt="" className="w-75 mx-5" />
            </div>
            <div class="col-9 bg-info py-3">
            <h2 >Desain</h2>
                <p>lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
            </div>
            
        </div>

        <br>
        </br>

        <div class="row">
            <div class="col-3  ">
                <img src={mtk} alt="" className="w-75 mx-5" />
            </div>
            <div class="col-9 bg-info p-3">
            <h2 >Koding For Kids </h2>
                <p>lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
            </div>

            <div>
              
            </div>
            
        </div>

        <br>
        </br>


        


      
      
    </div>

      

      


    </div>
    )
}

