import React, { useRef, useEffect } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, onClick, className = '' }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || !window.gsap) return;

    const xTo = window.gsap.quickTo(button, "x", { duration: 0.8, ease: "power3" });
    const yTo = window.gsap.quickTo(button, "y", { duration: 0.8, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      // Magnetic strength
      xTo(x * 0.3);
      yTo(y * 0.3);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`relative inline-block cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default MagneticButton;