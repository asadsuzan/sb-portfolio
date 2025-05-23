'use client'
import React, { useEffect } from 'react';


const RippleEffect = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      document.body.appendChild(ripple);

      const x = e.clientX;
      const y = e.clientY;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      const size = 20;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default RippleEffect;
