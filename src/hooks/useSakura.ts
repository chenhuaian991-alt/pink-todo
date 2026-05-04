import { useEffect } from 'react';

const PETALS = ['🌸', '✿', '❀', '💮'];

export function useSakura() {
  useEffect(() => {
    function spawn() {
      const el = document.createElement('div');
      el.className = 'sakura';
      el.textContent = PETALS[Math.floor(Math.random() * PETALS.length)];
      el.style.left = Math.random() * 100 + 'vw';
      el.style.fontSize = (12 + Math.random() * 12) + 'px';
      el.style.animationDuration = (6 + Math.random() * 8) + 's';
      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }

    for (let i = 0; i < 6; i++) {
      setTimeout(() => spawn(), i * 200);
    }

    const interval = setInterval(spawn, 1200);
    return () => clearInterval(interval);
  }, []);
}
