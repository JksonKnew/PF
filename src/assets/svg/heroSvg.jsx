import React from 'react';

function HeroSvg(props) {
  return (
    <svg width="543" height="569" viewBox="0 0 543 569" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#filter0_f_232_1084)">
        <path fillRule="evenodd" clipRule="evenodd" d="M287.391 12.3456C370.06 3.23455 471.187 -4.72105 519 63.3307C565.97 130.182 504.523 214.455 485.165 293.831C466.053 372.198 475.55 464.427 409.788 511.14C332.659 565.927 225.784 580.75 141.366 538.042C57.697 495.714 12.3038 400.734 6.55761 307.144C1.68213 227.736 60.0787 165.465 114.954 107.861C162.637 57.8068 218.676 19.9188 287.391 12.3456Z" fill="url(#paint0_linear_232_1084)"/>
      </g>
      <defs>
        <filter id="filter0_f_232_1084" x="0.271851" y="0.39209" width="542.03" height="568.412" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_232_1084"/>
        </filter>
        <linearGradient id="paint0_linear_232_1084" x1="239.333" y1="5.44391" x2="234.175" y2="562.994" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C4B5FD"/>
          <stop offset="1" stopColor="#5B21B6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default HeroSvg;