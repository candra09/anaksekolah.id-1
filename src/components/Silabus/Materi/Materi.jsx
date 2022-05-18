import React from "react";
import vid from "../../../assets/videos/prom.mp4";

export default function Materi() {
  return (
    <div className="container">
      <div className="row my-5 rounded-3 pb-3 bg-lblue">
        <div className="p-5 text-white">
            <h2>Materi 1</h2>
        </div>
          <div className="row my-3">
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
  );
}
