"use client";

import GalleryImage from "./image";
import React, { useState } from "react";

let IMAGES = ["/L1004827.jpg"];

export default function Gallery() {
  let [width, setWidth] = useState(300);
  let handleSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(parseInt(event.target.value));
  };

  return (
    <div className="p-5 w-full bg-red-200">
      <input
        type="range"
        min="100"
        max="1000"
        value={width}
        onChange={handleSlider}
      />
      <div className="bg-white gap-5 flex flex-row flex-wrap justify-center">
        <GalleryImage fileName={IMAGES[0]} width={width} />
        <GalleryImage fileName={IMAGES[0]} width={width} />
        <GalleryImage fileName={IMAGES[0]} width={width} />
        <GalleryImage fileName={IMAGES[0]} width={width} />
        <GalleryImage fileName={IMAGES[0]} width={width} />
        <GalleryImage fileName={IMAGES[0]} width={width} />
        <GalleryImage fileName={IMAGES[0]} width={width} />
      </div>
    </div>
  );
}
