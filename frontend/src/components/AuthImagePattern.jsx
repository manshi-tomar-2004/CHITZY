import React from "react";

// Import all 9 images
import img1 from "../photo/1___pic.jpg";
import img2 from "../photo/2__pic.jpg";
import img3 from "../photo/3_pic.webp";
import img4 from "../photo/4_pic.jpg";
import img5 from "../photo/5_pic.webp";
import img6 from "../photo/6__pic.png";
import img7 from "../photo/7_pic.jpg";
import img8 from "../photo/8_pic.jpg";
import img9 from "../photo/9_pic.jpg";

const AuthImagePattern = ({ title, subtitle }) => {
  // Put them in an array
  //${ i%2==0 ? "animate-bounce" : "animate-pulse"} ---TO MAKE DYNAMIC
  const images = [img2, img1, img7, img3, img5, img8, img4, img6, img9];

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {images.map((src, i) => (
            <div key={i} className={`aspect-square rounded-4xl overflow-hidden 
              `}>
              <img
                src={src}
                alt={`pattern-${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <h2 className="text-4xl font-extrabold mb-4">{title}</h2>
        <p className="text-base-content/90 text-1xl font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;

