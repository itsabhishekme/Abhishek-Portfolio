// lib/animations.ts

import { Variants, Transition } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                                   Timing                                   */
/* -------------------------------------------------------------------------- */

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};

export const smoothTransition: Transition = {
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1],
};

/* -------------------------------------------------------------------------- */
/*                              Fade Animations                               */
/* -------------------------------------------------------------------------- */

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

/* -------------------------------------------------------------------------- */
/*                             Scale Animations                               */
/* -------------------------------------------------------------------------- */

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
};

export const zoomIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: smoothTransition,
  },
};

export const zoomOut: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: smoothTransition,
  },
};

/* -------------------------------------------------------------------------- */
/*                             Rotate Animation                               */
/* -------------------------------------------------------------------------- */

export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -15,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: springTransition,
  },
};

/* -------------------------------------------------------------------------- */
/*                            Container Animation                             */
/* -------------------------------------------------------------------------- */

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const fastStagger: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                            Card Hover Animation                            */
/* -------------------------------------------------------------------------- */

export const cardHover = {
  whileHover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.25,
    },
  },

  whileTap: {
    scale: 0.98,
  },
};

/* -------------------------------------------------------------------------- */
/*                           Floating Animation                               */
/* -------------------------------------------------------------------------- */

export const floatingAnimation = {
  animate: {
    y: [0, -12, 0],
  },

  transition: {
    repeat: Infinity,
    duration: 3,
    ease: "easeInOut",
  },
};

/* -------------------------------------------------------------------------- */
/*                             Pulse Animation                                */
/* -------------------------------------------------------------------------- */

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.85, 1],
  },

  transition: {
    repeat: Infinity,
    duration: 2,
  },
};

/* -------------------------------------------------------------------------- */
/*                            Bounce Animation                                */
/* -------------------------------------------------------------------------- */

export const bounceAnimation = {
  animate: {
    y: [0, -15, 0],
  },

  transition: {
    repeat: Infinity,
    duration: 1.5,
  },
};

/* -------------------------------------------------------------------------- */
/*                            Rotate Animation                                */
/* -------------------------------------------------------------------------- */

export const spinAnimation = {
  animate: {
    rotate: 360,
  },

  transition: {
    repeat: Infinity,
    duration: 10,
    ease: "linear",
  },
};

/* -------------------------------------------------------------------------- */
/*                             Page Animation                                 */
/* -------------------------------------------------------------------------- */

export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },

  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.4,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                             Hero Animation                                 */
/* -------------------------------------------------------------------------- */

export const heroText: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              Utility Export                                */
/* -------------------------------------------------------------------------- */

export const animationPresets = {
  fadeIn,
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
  zoomIn,
  zoomOut,
  rotateIn,
  staggerContainer,
  fastStagger,
  pageTransition,
  heroText,
};

export default animationPresets;