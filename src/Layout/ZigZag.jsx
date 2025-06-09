const ZigzagDivider = () => {
  return (
    <div className="overflow-hidden leading-[0] relative h-[40px]">
      <div
        className="absolute top-0 left-0 w-[2880px] h-[40px] flex animate-scrollZigzag"
        style={{ willChange: 'transform' }}
      >
        <svg
          className="block w-[1440px] h-[40px] flex-shrink-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#991B1B"
            d="M0,160 
               C480,0, 960,320, 1440,160 
               L1440,0 
               L0,0 
               Z"
          />
        </svg>
        <svg
          className="block w-[1440px] h-[40px] flex-shrink-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#b91c1c"
            d="M0,160 
               C480,0, 960,320, 1440,160 
               L1440,0 
               L0,0 
               Z"
          />
        </svg>
      </div>

      <style>{`
        @keyframes scrollZigzag {
          0% { transform: translateX(0); }
          100% { transform: translateX(-1440px); }
        }

        .animate-scrollZigzag {
          animation: scrollZigzag 20s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default ZigzagDivider
