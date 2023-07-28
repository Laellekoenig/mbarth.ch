"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function GalleryImage({
  fileName,
  width,
}: {
  fileName: string;
  width: number;
}) {
  let [isOpen, setIsOpen] = useState(false);
  let maxHeight = window.innerHeight * 0.5;
  let maxWidth = window.innerWidth * 0.5;

  return (
    <div
      className={
        isOpen
          ? "z-10 fixed top-0 w-screen h-screen bg-white flex items-center justify-center"
          : ""
      }
    >
      <Image
        className={"cursor-pointer border-white border-8 " + (isOpen ? "" : "m-10")}
        src={fileName}
        alt={fileName}
        width={isOpen ? maxWidth : width}
        height={isOpen ? maxHeight : width}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
    </div>
  );
}
