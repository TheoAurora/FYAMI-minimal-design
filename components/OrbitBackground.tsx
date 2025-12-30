
import React from 'react';

const OrbitBackground: React.FC = () => {
  return (
    <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-full h-[800px] perspective-container opacity-40">
      <div className="relative w-full h-full orbit-perspective flex items-center justify-center">
        {/* Ring 1 - Smallest */}
        <div className="absolute border-[1.5px] border-[#6D28D9]/20 rounded-full w-[400px] h-[400px] animate-orbit-spin" style={{ animationDuration: '15s' }}>
          <div className="absolute -top-2 left-1/2 w-4 h-4 bg-[#6D28D9] rounded-full blur-[2px] shadow-[0_0_15px_#6D28D9]"></div>
        </div>

        {/* Ring 2 - Medium */}
        <div className="absolute border-[1px] border-[#425B76]/10 rounded-full w-[600px] h-[600px] animate-orbit-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
          <div className="absolute top-1/2 -left-2 w-3 h-3 bg-[#425B76] rounded-full opacity-50"></div>
        </div>

        {/* Ring 3 - Large */}
        <div className="absolute border-[1px] border-[#6D28D9]/15 rounded-full w-[850px] h-[850px] animate-orbit-spin" style={{ animationDuration: '40s' }}>
           <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-[#6D28D9] rounded-full"></div>
        </div>

        {/* Gradient Orbs for depth */}
        <div className="absolute w-[300px] h-[300px] bg-[#6D28D9]/5 blur-[120px] rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-[#425B76]/5 blur-[150px] rounded-full bottom-1/4 right-1/4"></div>
      </div>
    </div>
  );
};

export default OrbitBackground;
