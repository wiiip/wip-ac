"use client";

import React, { useState } from "react";
import Image from "next/image";
import Waves from "@/public/gifs/waves.gif";
import Record from "@/public/gifs/record.gif";
import Flower from "@/public/gifs/flower.gif";
import Text from "@/public/gifs/text.gif";
import Cloth from "@/public/gifs/cloth.gif";

export const Hero = () => {
  const backgrounds = [Waves, Flower, Record, Text, Cloth];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const handleClick = () => {
    setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  return (
    <div
      className="h-96 flex items-center justify-center relative group cursor-pointer"
      onClick={handleClick}
    >
      <h1 className="text-7xl font-serif italic tracking-tighter">
        Work In Progress
      </h1>
      <Background src={backgrounds[currentBgIndex]} />
    </div>
  );
};

const Background = ({ src }: { src: any }) => {
  return (
    <Image
      src={src}
      alt="Background"
      unoptimized
      className="absolute w-full h-full object-cover -z-10 invert grayscale opacity-50"
      fill
    />
  );
};
