import React, { useRef, useState } from "react";

const TiltCard = ({ children, className = "", maxTilt = 12, scale = 1.02 }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.5s ease, box-shadow 0.5s ease",
  });
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    transform: "translate(-50%, -50%)",
  });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position inside element
    const y = e.clientY - rect.top;  // y position inside element

    // Calculate rotation angles (-0.5 to 0.5 range multiplied by maxTilt)
    const rotateX = -((y / rect.height) - 0.5) * maxTilt;
    const rotateY = ((x / rect.width) - 0.5) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: "transform 0.1s ease, box-shadow 0.1s ease",
    });

    // Move the glare highlight to center on mouse coordinates
    setGlareStyle({
      opacity: 0.15,
      left: `${x}px`,
      top: `${y}px`,
      transform: "translate(-50%, -50%)",
      transition: "opacity 0.2s ease",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease, box-shadow 0.5s ease",
    });
    setGlareStyle({
      opacity: 0,
      transform: "translate(-50%, -50%)",
      transition: "opacity 0.5s ease",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden cursor-pointer ${className}`}
      style={style}
    >
      {/* Dynamic light glare overlay */}
      <div
        className="absolute w-64 h-64 bg-white rounded-full blur-3xl pointer-events-none mix-blend-overlay"
        style={{
          position: "absolute",
          ...glareStyle,
        }}
      />
      {children}
    </div>
  );
};

export default TiltCard;
