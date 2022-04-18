import React from 'react';
import "../../App.css";
import mtk from "../../assets/img/IconMTK.png"

export default function Matematika() {
    return (
        <div className="container rounded-pill">
            <div className="col my-5">
                <div className="row bg-dblue">
                    <h1 className='my-3 mx-5 p-3 text-white'>Matematika</h1>
                </div>
                <div className="row d-flex">
                    <div className="col-md-4 d-lg-inline-flex my-4 mx-5 p-3">
                        <img src={mtk} alt="" className='w-50'/>
                    </div>
                    <div className='col-md-8 d-lg-inline-flex bg-warning'>
                        <h3>Matematika kelas 3</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}
