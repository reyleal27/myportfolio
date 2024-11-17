'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


const ShootingStar = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-[2px] h-[2px] bg-white rounded-full"
    initial={{
      top: -5,
      left: Math.random() * 100 + '%',
      opacity: 1,
      height: '2px',
    }}
    animate={{
      top: '100%',
      left: `${Math.random() * 100}%`,
      opacity: [1, 1, 0],
      height: ['2px', '30px', '2px'],
    }}
    transition={{
      duration: 1.5,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
    style={{
      boxShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff',
    }}
  />
);

const Background = () => {
  const [stars, setStars] = useState<{ id: number; delay: number }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#030014] overflow-hidden -z-10">
      {/* Stars background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Shooting stars */}
      {stars.map((star) => (
        <ShootingStar key={star.id} delay={star.delay} />
      ))}
    </div>
  );
};

export default Background;