import React from "react";
import "./pembayaran_1.css";
import IMAGE from "../../assets/img/IconMTK.png";
import IconPerson from "../../assets/icon/user.png";
import IconHarga from "../../assets/icon/iconharga.svg";
import IconMengikuti from "../../assets/icon/iconMengikuti.svg";
import IconModul from "../../assets/icon/iconModul.svg";
import IconTransaksi from "../../assets/icon/iconTransaksi.svg";

export default function pembayaran_1() {
  return (
    <div className=" container">
        
        <div className="row ">
            <div className=" col-lg-9 mb-2">
                <div className="card p-3  align-items-center justify-content-center" style={{ backgroundColor: '#2F5493' }} >
                    <h4 style={{fontWeight: 'bold', color: 'white'}}>Keterangan Paket Kelas</h4>
                </div>
                <div className="card">
                    <div className="card-img-top mt-3 align-items-center text-center" >
                        <img src={IMAGE} style={{width: '30%' }} />
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
                <div className="card " style={{borderRadius: '30px', borderWidth: '2px', borderColor: '#000000'}}>
                    <div className="row card-body  text-center align-items-center justify-content-center " >
                        <h5 style={{fontWeight: 'bold'}}>Pendaftaran</h5>
                        <a href="/Pembayaran_2" className="btn btn-hover btn-primary mt-4 px-4 py-2 w-50 text-size-1" style={{ backgroundColor: '#2F5493' }}>
                            {/* <i></i> */}
                            Daftar Kelas
                            </a>
                    </div>
                </div>
                <div className="card mt-2" style={{borderRadius: '30px', borderWidth: '2px', borderColor: '#000000'}}>
                    <div className="row card-body">
                        <h5 className="text-center">Detail Kelas</h5>
                        <ul className="mt-4">
                            <li className="mb-4">
                                
                                <h6>
                                    <img src={IconPerson} style={{width: '30px', margin: '5px'}} />
                                Pembuat</h6>
                                <span></span>
                            </li>
                            <li className="mb-4">
                                
                                <h6>
                                    <img src={IconHarga} style={{width: '30px', margin: '5px'}} />
                                Harga</h6>
                                <span></span>
                            </li>
                            <li className="mb-4">
                                
                                <h6>
                                    <img src={IconTransaksi} style={{width: '30px', margin: '5px'}} />
                                Transaksi</h6>
                                <span></span>
                            </li>
                            <li className="mb-4">
                                
                                <h6>
                                    <img src={IconModul} style={{width: '30px', margin: '5px'}} />
                                Modul</h6>
                                <span></span>
                            </li>
                            <li className="mb-4">
                                
                                <h6>
                                    <img src={IconMengikuti} style={{width: '30px', margin: '5px'}} />
                                Mengikuti</h6>
                                <span></span>
                            </li>
                            <li className="mb-4"> <h6> <img src={IconPerson} style={{width: '30px', margin: '5px'}} /> Pembuat</h6> <span></span> </li>
                        </ul>
                    </div>
                </div>
            </div>
        
            
            
        </div>
    </div>
  );
}
