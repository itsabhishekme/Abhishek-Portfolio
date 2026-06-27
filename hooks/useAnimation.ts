"use client";

import { Variants } from "framer-motion";

/**
 * Fade In Animation
 */
export const fadeIn = (
  direction: "up" | "down" | "left" | "right" = "up",
  delay = 0,
  duration = 0.6
): Variants => {
  const distance = 60;

  const x =
    direction === "left"
      ? distance
      : direction === "right"
      ? -distance
      : 0;

  const y =
    direction === "up"
      ? distance
      : direction === "down"
      ? -distance
      : 0;

  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },

    visible: {
      opacity: 1,
      x: 0,
      y: 0,

      transition: {
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

/**
 * Slide Up
 */
export const slideUp = (
  delay = 0,
  duration = 0.6
): Variants => ({
  hidden: {
    opacity: 0,
    y: 80,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Slide Down
 */
export const slideDown = (
  delay = 0,
  duration = 0.6
): Variants => ({
  hidden: {
    opacity: 0,
    y: -80,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Slide Left
 */
export const slideLeft = (
  delay = 0,
  duration = 0.6
): Variants => ({
  hidden: {
    opacity: 0,
    x: 80,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Slide Right
 */
export const slideRight = (
  delay = 0,
  duration = 0.6
): Variants => ({
  hidden: {
    opacity: 0,
    x: -80,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Zoom In
 */
export const zoomIn = (
  delay = 0,
  duration = 0.6
): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Zoom Out
 */
export const zoomOut = (
  delay = 0,
  duration = 0.6
): Variants => ({
  hidden: {
    opacity: 0,
    scale: 1.2,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Rotate In
 */
export const rotateIn = (
  delay = 0,
  duration = 0.7
): Variants => ({
  hidden: {
    opacity: 0,
    rotate: -15,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,

    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

/**
 * Stagger Container
 */
export const staggerContainer = (
  staggerChildren = 0.15,
  delayChildren = 0
): Variants => ({
  hidden: {},

  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Floating Animation
 */
export const floatingAnimation = {
  animate: {
    y: [0, -15, 0],

    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "easeInOut",
    },
  },
};

/**
 * Pulse Animation
 */
export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],

    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

/**
 * Infinite Rotation
 */
export const rotateAnimation = {
  animate: {
    rotate: 360,

    transition: {
      repeat: Infinity,
      duration: 12,
      ease: "linear",
    },
  },
};

/**
 * Bounce Animation
 */
export const bounceAnimation = {
  animate: {
    y: [0, -12, 0],

    transition: {
      repeat: Infinity,
      duration: 1.6,
      ease: "easeInOut",
    },
  },
};

/**
 * Hover Card
 */
export const hoverCard = {
  whileHover: {
    y: -8,
    scale: 1.03,

    transition: {
      duration: 0.25,
    },
  },
};

/**
 * Hover Icon
 */
export const hoverIcon = {
  whileHover: {
    rotate: 10,
    scale: 1.2,

    transition: {
      duration: 0.2,
    },
  },
};

/**
 * Button Animation
 */
export const buttonAnimation = {
  whileHover: {
    scale: 1.05,
  },

  whileTap: {
    scale: 0.95,
  },
};

/**
 * Page Transition
 */
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },

  exit: {
    opacity: 0,

    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};