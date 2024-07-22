// src/Components/FloatingAnimation.tsx
import React, { useRef, useState, useEffect } from 'react';
import { useDrag } from '@use-gesture/react';
import floatingAnimationVideo from '@/assets/animation.webm';


const FloatingAnimation: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isBouncing, setIsBouncing] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const bind = useDrag(({ movement: [mx, my] }) => {
    setPosition({ x: mx, y: my });
    if (videoRef.current) {
      videoRef.current.style.transform = `translate(${mx}px, ${my}px)`;
    }
  });

  const handleClick = () => {
    setIsBouncing(!isBouncing);
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isBouncing) {
        videoRef.current.style.animation = 'bounce 15s ease-in-out infinite';
      } else {
        videoRef.current.style.animation = 'none';
        videoRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
      }
    }
  }, [isBouncing, position]);

  return (
    <div
      {...bind()}
      onClick={handleClick}
      className="absolute top-0 left-1/2 transform -translate-x-1/2 cursor-pointer"
      style={{ willChange: 'transform' }}
    >
      <video
        ref={videoRef}
        src={floatingAnimationVideo}
        width="150"
        height="150"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default FloatingAnimation;
