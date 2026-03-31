'use client'

import React from 'react'

interface SVGBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  invert?: boolean
}

const SVGBorder = ({ invert = false, className = "", ...props }: SVGBorderProps) => {
  return (
    <div
      className={`relative w-full h-[40px] flex items-center justify-center ${className}`}
      {...props}
    >

      {/* LINHA CENTRAL */}
      <div className="absolute w-full h-[2px] bg-white" />

      {/* ORNAMENTO */}
      <div
        className={`
          absolute z-10 w-[100px] h-[30px]
          bg-contain bg-center bg-no-repeat
        `}
        style={{
          backgroundImage: `url(${invert ? "/assets/raiz_cima.webp" : "/assets/raiz_baixo.webp"})`,
          transform: invert
            ? "translateY(calc(-50% + 1px))"
            : "translateY(calc(50% - 1px))"
        }}
      />

    </div>
  )
}

export default SVGBorder