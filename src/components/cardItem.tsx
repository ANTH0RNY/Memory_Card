import "../sass/card-item.scss"

import { useEffect, useRef } from 'react';

export default function CardItem() {
  const cardRef = useRef<HTMLDivElement>(null);
  let bounds: DOMRect;

  const rotateToMouse = (e: MouseEvent): void => {
    if (!cardRef.current) return;

    const mouseX: number = e.clientX;
    const mouseY: number = e.clientY;
    const leftX: number = mouseX - bounds.x;
    const topY: number = mouseY - bounds.y;
    const center: { x: number; y: number } = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    }
    const distance: number = Math.sqrt(center.x**2 + center.y**2);

    cardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    const glowElement: HTMLElement | null = cardRef.current.querySelector('.glow');
    if (glowElement) {
      glowElement.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width/2}px
          ${center.y * 2 + bounds.height/2}px,
          #ffffff55,
          #0000000f
        )
      `;
    }
  }

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = (): void => {
      bounds = card.getBoundingClientRect();
      document.addEventListener('mousemove', rotateToMouse);
    };

    const handleMouseLeave = (): void => {
      document.removeEventListener('mousemove', rotateToMouse);
      card.style.transform = '';
      card.style.background = '';
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', rotateToMouse);
    };
  }, []);

  return (
    <div className="card" ref={cardRef}>
      <div className="glow"></div>
    </div>
  );
}
