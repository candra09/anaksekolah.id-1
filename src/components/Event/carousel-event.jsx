import React from "react";
import "./carousel-event.css";
import img1 from '../../assets/img/img-event-1.png'
import img2 from '../../assets/img/img-event-2.png'
import img3 from '../../assets/img/img-event-3.png'
import img4 from '../../assets/img/img-event-4.png'
import img5 from '../../assets/img/img-event-5.png'
import img6 from '../../assets/img/img-event-6.png'

export default function CarouselEvent() {
    return(
        <div className="container-xl ">
          <div className="row">
              <div className="col-md-12 ">
                  <div id="myCarousel" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                          <li data-target="#myCarousel" data-slide-to="1" ></li>
                          <li data-target="#myCarousel" data-slide-to="2" ></li>
                      </ol>

                      <div className="carousel-inner">
                          <div className="item carousel-item active">
                              <div className="row">
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img1} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Pelatihan Exel</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img2} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Webniar Pedagogik</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img3} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Pelatihan Teknik
Mesin</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img4} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Tips UNBK</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img5} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event">
                                              <h4>Belajar dengan 
Efektif</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img6} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Pelatihan Html</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="item carousel-item ">
                              <div className="row">
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img1} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img2} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img3} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img4} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img5} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event">
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img6} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="item carousel-item ">
                              <div className="row">
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img1} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img2} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img3} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img4} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img5} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event">
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img6} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="item carousel-item ">
                              <div className="row">
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img1} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img1} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img1} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img1} className="img-box-event"/>
                                          </div>
                                          <div style={{color: '#000000'}}> 
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img1} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event">
                                              <h4>Event</h4>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis euismod gravida in quis dictum donec mi faucibus.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-4">
                                      <div className=" thumb-wrapper">
                                          <div>
                                              <img src={img1} className="img-box-event"/>
                                          </div>
                                          <div className="text-crs-event"> 
                                              <h4>Event</h4>
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