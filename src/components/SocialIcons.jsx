import React, { useState } from "react";

const SocialIcons = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <path fill={!isHovered ? "#fff" : "hsl(136, 65%, 51%)"} d={props.d} />
    </svg>
  );
};

export default SocialIcons;
