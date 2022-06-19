import React from "react";
import "../../styles/Home.css";
import prom from "../../assets/videos/prom.mp4";
import background from "../../assets/img/back.png";
import mtk from "../../assets/img/IconMTK.png";

export default function Silabus() {
    return (
        <div class="container px-4 mx-auto">
            <div class="flex flex-wrap items-center -mx-4 mb-16">
                <div class="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                    <span class="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm">How it works</span>
                    <h2 class="mb-6 text-4xl md:text-5xl leading-tight font-bold tracking-tighter">Gain more insight into how people use your</h2>
                    <p class="text-lg md:text-xl text-coolGray-500 font-medium">With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage your business in one secure platform.</p>
                </div>
            <div class="w-full md:w-1/2 px-4">
        <div class="relative mx-auto md:mr-0 max-w-max overflow-hidden rounded-7xl">
        <img class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 min-h-full min-w-full max-w-none" poster="flex-ui-assets/images/testimonials/video-frame.jpeg" muted="" src={mtk} alt="" className="w-75 mx-5" />
          <a class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full" href="#">

          </a>
        </div>
      </div>
    </div>
    </div>
        

      
    


  );
}
