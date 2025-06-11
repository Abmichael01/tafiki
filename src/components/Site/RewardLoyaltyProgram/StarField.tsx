// StarField.tsx
import React from 'react';
import { Star, Stars } from 'lucide-react';

interface StarProps {
  size: number;
  left: number;
  top: number;
  rotate: number;
  opacity: number;
}

// Generate static random star data
const stars: StarProps[] = Array.from({ length: 10 }, (_, i) => {
  const seed = i * 97 + 42;

  // 80% chance of being a tiny star (distant), 20% chance to be larger
  const isTinyStar = seed % 100 < 80;
  const size = isTinyStar ? 8 + (seed % 7) : 16 + (seed % 13); // Tiny: 8–14px | Larger: 16–28px

  const left = (seed * 3) % 100; // percent
  const top = (seed * 5) % 100;
  const rotate = (seed * 17) % 360;
  const opacity = 0.4 + (seed % 100) / 50; // Opacity between 0.1 - 0.6

  return { size, left, top, rotate, opacity };
});

const StarField: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star, index) => {
        const Icon = index % 2 === 0 ? Star : Stars;
        return (
          <Icon
            key={index}
            className="text-white absolute"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
              transform: `rotate(${star.rotate}deg)`,
              opacity: star.opacity,
            }}
          />
        );
      })}
    </div>
  );
};

export default StarField;