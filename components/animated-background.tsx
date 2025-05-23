"use client";
import { motion } from "framer-motion";

interface CollageItem {
  id: number;
  src: string;
  initialX: number;
  initialY: number;
  size: number;
  rotation: number;
  speed: number;
  direction: number;
}

export default function AnimatedBackground() {
  // Create an array of collage items with random positions and properties
  const collageItems: CollageItem[] = [
    {
      id: 1,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4POTDuJtGCbGZx9AumUSDLIiB7coIg.png", // Airplane with crocodile head
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      size: 15 + Math.random() * 10,
      rotation: Math.random() * 20 - 10,
      speed: 0.5 + Math.random() * 0.5,
      direction: Math.random() > 0.5 ? 1 : -1,
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eKEWkdIcQB6ca6JVcxbMjnHifUHFQZ.png", // Shark with sneakers
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      size: 12 + Math.random() * 8,
      rotation: Math.random() * 20 - 10,
      speed: 0.3 + Math.random() * 0.4,
      direction: Math.random() > 0.5 ? 1 : -1,
    },
    {
      id: 3,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6DrkMIPfkZHQ7Pt4VVOkyMuhc8Z80A.png", // Ninja coffee cup
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      size: 10 + Math.random() * 8,
      rotation: Math.random() * 20 - 10,
      speed: 0.4 + Math.random() * 0.5,
      direction: Math.random() > 0.5 ? 1 : -1,
    },
  ];

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Semi-transparent overlay to ensure content readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Animated collage items */}
      {collageItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute rounded-lg overflow-hidden shadow-lg opacity-60"
          style={{
            width: `${item.size}vw`,
            height: `${item.size}vw`,
            left: `${item.initialX}vw`,
            top: `${item.initialY}vh`,
            rotate: `${item.rotation}deg`,
          }}
          animate={{
            x: [0, item.direction * 100, 0],
            y: [0, item.direction * -50, 0],
            rotate: [
              item.rotation,
              item.rotation + item.direction * 10,
              item.rotation,
            ],
          }}
          transition={{
            duration: 20 / item.speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <img
            src={item.src || "/placeholder.svg"}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
