import React from "react";
import "./Splash.scss";

interface SplashProps {
   x: number;
   y: number;
   onAnimationEnd: () => void;
}

const Splash: React.FC<SplashProps> = ({ x, y, onAnimationEnd }) => {
   return (
      <div
         className="splash"
         style={{ top: `${y}px`, left: `${x}px` }}
         onAnimationEnd={onAnimationEnd}
      >
         <span>+1</span>
      </div>
   );
};

export default Splash;
