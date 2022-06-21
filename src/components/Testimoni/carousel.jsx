import React from "react";
import "./testimoni.css";
import img1 from '../../assets/img/img-anton.png'
import img2 from '../../assets/img/img-citra.png'
import img3 from '../../assets/img/img-rangga.png'

export default function Carousel() {
    return(
        <div className="container-xl">
          <div className="row">
              <div className="col-md-12">
                  <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                      <ol className="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                          <li data-target="#myCarousel" data-slide-to="1" ></li>
                          <li data-target="#myCarousel" data-slide-to="2" ></li>
                      </ol>

                      <div className="carousel-inner">
                          <div className="item carousel-item active">
                              <div className="row">
                                  <div className="col-sm-3 p-2">
                                      <div className=" thumb-wrapper">
                                          <div >
                                              <img  className="img-box " src={img3}/>
                                          </div>
                                          <div style={{color: '#000000'}}> 
                                              <h4>Rangga</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-3 p-2">
                                      <div className=" thumb-wrapper">
                                          <div>
                                            <img  className="img-box " src={img2}/>
                                          </div>
                                          <div style={{color: '#000000'}}> 
                                              <h4>Citra</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-3 p-2">
                                      <div className=" thumb-wrapper">
                                          <div>
                                            <img  className="img-box " src={img1}/>
                                          </div>
                                          <div style={{color: '#000000'}}> 
                                              <h4>Anton</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-3 p-2">
                                      <div className=" thumb-wrapper">
                                          <div>
                                            <img  className="img-box " src={img3}/>
                                          </div>
                                          <div style={{color: '#000000'}}> 
                                              <h4>Rangga</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="item carousel-item">
                              <div className="row">
                                  <div className="col-sm-3 p-2">
                                      <div className=" thumb-wrapper">
                                          <div>
                                           <img  className="img-box " src={img1}/>
                                          </div>
                                          <div style={{color: '#000000'}}> 
                                              <h4>Testimoni</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-3 p-2">
                                      <div className=" thumb-wrapper">
                                          <div>
                                            <img  className="img-box " src={img2}/>
                                          </div>
                                          <div style={{color: '#000000'}}> 
                                              <h4>Testimoni</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-3 p-2">
                                      <div className=" thumb-wrapper">
                                          <div>
                                           <img  className="img-box " src={img1}/>
                                          </div>
                                          <div style={{color: '#000000'}}> 
                                              <h4>Testimoni</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-3 p-2">
                                      <div className=" thumb-wrapper">
                                          <div>
                                           <img  className="img-box " src={img3}/>
                                          </div>
                                          <div style={{color: '#000000'}}> 
                                              <h4>Testimoni</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="item carousel-item">
                              <div className="row">
                                  <div className="col-sm-3 p-2">
                                      <div className=" thumb-wrapper">
                                          <div>
                                            <img  className="img-box " src={img2}/>
                                          </div>
                                          <div style={{color: '#000000'}}>  
                                              <h4>Testimoni</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-3 p-2">
                                      <div className=" thumb-wrapper">
                                          <div>
                                            <img  className="img-box " src={img1}/>
                                          </div>
                                          <div style={{color: '#000000'}}> 
                                              <h4>Testimoni</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-3 p-2">
                                      <div className=" thumb-wrapper">
                                          <div>
                                            <img  className="img-box " src={img3}/>
                                          </div>
                                          <div style={{color: '#000000'}}> 
                                              <h4>Testimoni</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-3 p-2">
                                      <div className=" thumb-wrapper">
                                          <div>
                                            <img  className="img-box " src={img2}/>
                                          </div>
                                          <div style={{color: '#000000'}}> 
                                              <h4>Testimoni</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                            <i class="fa fa-angle-left"></i>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                            <i class="fa fa-angle-right"></i>
                        </a>
                  </div>
              </div>
          </div>
      </div>
    )
    
}