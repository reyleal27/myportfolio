'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Define planet data
const planets = [
  {
    id: 'mercury',
    name: 'Mercury',
    size: 20,
    orbitSize: 180,
    duration: 8,
    delay: 0,
    imagePath: '/planets/mercury.jpg',
  },
  {
    id: 'venus',
    name: 'Venus',
    size: 28,
    orbitSize: 280,
    duration: 12,
    delay: 1,
    imagePath: '/planets/venus.jpg',
  },
  {
    id: 'earth',
    name: 'Earth',
    size: 30,
    orbitSize: 360,
    duration: 15,
    delay: 2,
    imagePath: '/planets/earth.jpg',
  },
  {
    id: 'mars',
    name: 'Mars',
    size: 24,
    orbitSize: 440,
    duration: 18,
    delay: 3,
    imagePath: '/planets/mars.jpg',
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    size: 60,
    orbitSize: 560,
    duration: 22,
    delay: 4,
    imagePath: '/planets/jupiter.jpg',
  },
  {
    id: 'saturn',
    name: 'Saturn',
    size: 50,
    orbitSize: 680,
    duration: 26,
    delay: 5,
    imagePath: '/planets/saturn.jpg',
  },
];

const Planet = ({ planet }: { planet: typeof planets[0] }) => {
  return (
    <motion.div
      className="absolute"
      style={{
        width: planet.orbitSize,
        height: planet.orbitSize,
        top: `calc(50% - ${planet.orbitSize / 2}px)`,
        left: `calc(50% - ${planet.orbitSize / 2}px)`,
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: planet.duration,
        delay: planet.delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Orbit Path */}
      <div 
        className="absolute inset-0 rounded-full border border-white/10"
        style={{
          animation: `pulse 4s ${planet.delay}s infinite`,
        }}
      />
      
      {/* Planet */}
      <motion.div
        className="absolute"
        style={{
          width: planet.size,
          height: planet.size,
          top: 0,
          left: `calc(50% - ${planet.size / 2}px)`,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: planet.duration / 2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Image
          src={planet.imagePath}
          alt={planet.name}
          width={planet.size}
          height={planet.size}
          className="rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

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

  

      {/* Gradient overlay */}
      
    </div>
  );
};

export default Background;