import React from "react";
import vid from "../../../assets/videos/prom.mp4";

export default function Materi() {
  return (
    <div className="container bg-lblue">
      <div className="col my-5 rounded-3 pb-3">
        <div className="row bg-dblue p-5 text-white">
          <div className="row px-5">
            <h2>Materi 1</h2>
          </div>
        </div>
        <div className="my-2">
          <div className="col m-5">
            <div className="container">
              <video src={vid} controls className="w-100"></video>
              <hr />
              <div className="text-justify">
                <p className="mx-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem cupiditate et, quam ad magni cumque modi fugiat cum
                  exercitationem odio, veritatis ducimus vel ullam nisi maiores
                  laboriosam velit quos laborum.
                </p>
                <p className="mx-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem cupiditate et, quam ad magni cumque modi fugiat cum
                  exercitationem odio, veritatis ducimus vel ullam nisi maiores
                  laboriosam velit quos laborum.
                </p>
                <p className="mx-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem cupiditate et, quam ad magni cumque modi fugiat cum
                  exercitationem odio, veritatis ducimus vel ullam nisi maiores
                  laboriosam velit quos laborum.
                </p>
                <p className="mx-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem cupiditate et, quam ad magni cumque modi fugiat cum
                  exercitationem odio, veritatis ducimus vel ullam nisi maiores
                  laboriosam velit quos laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
