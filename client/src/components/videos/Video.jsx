import React from "react";

const Video = () => {
  return (
    <div class="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div class="w-full flex flex-col">
        <div class="relative">
          <a href="video.html">
            <img
              src="https://i.ytimg.com/vi/5reN4CpCOZA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADVBMtHFl9aTwJ_I5-QYWgMMYZ6Q"
              class="w-full h-auto"
              alt="Some video title"
            />
          </a>

          <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            12:10
          </p>
        </div>

        <div class="flex flex-row mt-2 gap-2">
          <a href="#" class="shrink-0">
            <img
              src="./assets/author.png"
              class="rounded-full h-6 w-6"
              alt=""
            />
          </a>

          <div clas="flex flex-col">
            <a href="video.html">
              <p class="text-slate-900 text-sm font-semibold">Video title</p>
            </a>
            <a class="text-gray-400 text-xs mt-2 hover:text-gray-600" href="#">
              Author name
            </a>
            <p class="text-gray-400 text-xs mt-1">200 views . May 3, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
