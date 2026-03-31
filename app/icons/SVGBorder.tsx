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
      {/* ORNAMENTO */}
      <div
        className={`
          absolute z-10 w-[100px] h-[40px]
          bg-contain bg-center bg-no-repeat
        `}
        style={{
          backgroundImage: `url(${invert ? "/assets/raiz_cima.webp" : "/assets/raiz_baixo.webp"})`,
          marginTop: invert ? "8px" : "0",
          marginBottom: invert ? "0" : "8px",
        }}
      />

    </div>
  )
}

export default SVGBorder