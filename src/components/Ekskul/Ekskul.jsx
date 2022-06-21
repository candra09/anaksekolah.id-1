import React from "react";
import img1 from "../../assets/img/img-ekskul-1.png";
import img2 from "../../assets/img/img-ekskul-2.png";
import img3 from "../../assets/img/img-ekskul-3.png";
import BG from "../../assets/bg-ekskul.jpg";

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
      {/* <div  style={{backgroundImage: 'url(' + BG + ')',backgroundRepeat: 'no-repeat', backgroundSize: '100% 1000px', marginBottom:'100px', width: '100%' ,height: '1000px',}}> */}
      <div class="container  ">
        <div class="row ">
            <div class="col-4 ">
                <img src={img1} alt="" className="w-75 mx-5 border-25" />
            </div>
            <div class="col-8 bg-info p-3 border-25">
                <a href="/ekskul/detail" style={{textDecoration: 'none', color: '#000000'}}>
                  <h4 className="p-3">Kesenian</h4>
                    </a>
                <p className="mx-3">lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
            </div>

        </div>

        <br>
        </br>

        <div class="row">
            <div class="col-4   ">
                <img src={img2} alt="" className="w-75 mx-5 border-25" />
            </div>
            <div class="col-8 bg-info py-3 border-25">
            <h4 className="p-3">Desain</h4>
                <p className="mx-3">lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
            </div>
            
        </div>

        <br>
        </br>

        <div class="row">
            <div class="col-4  ">
                <img src={img3} alt="" className="w-75 mx-5 border-25" />
            </div>
            <div class="col-8 bg-info p-3 border-25">
            <h4 className="p-3">Koding For Kids </h4>
                <p className="mx-3">lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
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

