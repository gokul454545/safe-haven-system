import React from "react";

interface LeafLogoProps {
  className?: string;
}

const LeafLogo: React.FC<LeafLogoProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      className={className} 
    >
      <path d="M256 20C180 80 100 180 100 280c0 120 80 212 156 212s156-92 156-212c0-100-80-200-156-260zm0 60c60 60 116 140 116 200 0 96-60 172-116 172S140 376 140 280c0-60 56-140 116-200z" />
      <path d="M250 100v312h20V100zM180 220c30 40 60 80 76 120l-16 8c-20-40-44-76-72-112zM332 220c-28 36-52 72-72 112l-16-8c16-40 46-80 76-120z" />
    </svg>
  );
};

export default LeafLogo;
