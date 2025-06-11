// src/animations/fadeIn.ts
import { Variants } from "framer-motion";

interface FadeInOptions {
  delay?: number;
  duration?: number;
  y?: number;
}

export const fadeIn = ({ delay = 0.2, duration = 0.6, y = 40 }: FadeInOptions = {}): Variants => ({
  initial: {
    opacity: 0,
    y,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
