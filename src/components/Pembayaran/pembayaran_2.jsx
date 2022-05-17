import React from "react";
import "./pembayaran_2.css";
import IMAGE from "../../assets/img/sd.png";
import IconPerson from "../../assets/icon/user.png";
import IconHarga from "../../assets/icon/iconharga.svg";
import IconMengikuti from "../../assets/icon/iconMengikuti.svg";
import IconModul from "../../assets/icon/iconModul.svg";
import IconTransaksi from "../../assets/icon/iconTransaksi.svg";
import IconMoney from "../../assets/icon/iconMoney.svg";
import IconHand from "../../assets/icon/iconhandshake.svg";

export default function pembayaran_2() {
  return (
    <div className=" container">
        <div className="row ">
            <div className=" col-lg-9 mb-2">
                <div className="card p-3  align-items-center justify-content-center" style={{ backgroundColor: '#2F5493' }} >
                    <h4 style={{fontWeight: 'bold', color: 'white'}}>Keterangan Paket Kelas</h4>
                </div>
                <div className="card">
                    <div className="card-img-top align-items-center" >
                        <img src={IMAGE} style={{width: '50%' }} />
                    </div>
                    <div className="card-judul align-items-center justify-content-center" style={{ fontSize: 24, }}  >
                        <strong>Matematika kelas 12</strong>
                    </div>
                    <div className="card-body py-4 px-4 align-items-center justify-content-center" >
                        <div className="mb-1 text-size-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, nunc at imperdiet tincidunt, diam mi consequat dui, a ornare urna velit vitae urna. Donec ut risus eget ipsum dignissim vulputate. Nullam mattis eleifend semper. Sed lobortis nisl id ipsum viverra porta. Nullam tincidunt vulputate lectus non maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat at orci sed vulputate.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, nunc at imperdiet tincidunt, diam mi consequat dui, a ornare urna velit vitae urna. Donec ut risus eget ipsum dignissim vulputate. Nullam mattis eleifend semper. Sed lobortis nisl id ipsum viverra porta. Nullam tincidunt vulputate lectus non maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat at orci sed vulputate.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, nunc at imperdiet tincidunt, diam mi consequat dui, a ornare urna velit vitae urna. Donec ut risus eget ipsum dignissim vulputate. Nullam mattis eleifend semper. Sed lobortis nisl id ipsum viverra porta. Nullam tincidunt vulputate lectus non maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat at orci sed vulputate.</p>
                        </div>

                    </div>
                </div>

            </div>
            
            <div className="col-lg-3">
                <div className="card mb-5 mb-lg-0 " style={{borderRadius: '30px', borderWidth: '2px', borderColor: '#000000'}}>
                    <form action method="post" acceptCharset="utf-8">
                        {/* <input></input> */}
                        <div>
                            <div className="row card-body text-center">
                                <div className="dropdown-pembayaran">
                                    <h3>Pembayaran</h3>
                                    {/* <div className="dropdown pb-2">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                            style={{backgroundColor:'red'}}>
                                            E-wallet
                                            <span className="caret"></span>
                                        </button>
                                        <div class="dropdown-menu tipe_bayar">
                                        </div>
                                    </div> */}
                                    <div class="dropdown pb-2">
                                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" style={{backgroundColor:'#2F5493',borderRadius: '10px'}}>
                                        E-wallet
                                        </button>
                                        <div class="dropdown-menu">
                                        <a class="dropdown-item" href="/">DANA</a>
                                        <a class="dropdown-item" href="#">BCA</a>
                                        <a class="dropdown-item" href="#">BRI</a>
                                    </div>

                                </div>
                                    <button type="button" class="btn btn-primary btn-submit mb-2" style={{backgroundColor: 'red', borderRadius: '10px'}}> Bayar Sekarang </button>
                                    <br/>
                                    <hr/>
                            </div>
                            <div className="form-check text-left mb-2">
                                    <input type="checkbox" className="form-check-input"/>
                                    <label className="from-check-label">
                                            <strong>Pakai Kupon</strong>
                                        </label>

                            </div>
                            <div className="form-grup text-left">
                                <input type="text" className="form-control" placeholder="Masukkan Kupon"/>
                            </div>
                                

                            </div>
                        </div>

                    </form>
                </div>
                <div className="card mt-2" style={{borderRadius: '30px', borderWidth: '2px', borderColor: '#000000'}}>
                    <div className="row card-body">
                        <h5 className="text-center" >Rincian</h5>
                        <div>
                        <h6 ><img src={IconMoney} style={{width: '30px', margin: '10px', }} />
                                Harga</h6>
                        <h6 style={{paddingLeft: '53px'}}>
                                Rp. 100.000</h6>
                                
                        <hr/>
                        <br/>
                        <h6 ><img src={IconHand} style={{width: '30px', margin: '10px', }} />
                                Anak Sekolah ID</h6>
                        </div>

                    </div>
                </div>
            </div>
        
            
            
        </div>
    </div>
  );
}
