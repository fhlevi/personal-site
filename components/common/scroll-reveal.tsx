import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

// --- VARIANTS COLLECTION --- //

// 1. Fade & Slide Up (Default)
export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

// 2. Slide In dari Kiri/Kanan
export const slideInVariant = (direction: 'left' | 'right'): Variants => ({
  hidden: { 
    opacity: 0, 
    x: direction === 'left' ? -80 : 80 
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
});

// 3. Pop/Scale Up (Spring Physics)
export const popVariant: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { type: 'spring', stiffness: 200, damping: 15 } 
  }
};

// 4. Stagger Container (Untuk list/grid)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

interface ScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  isStaggerContainer?: boolean;
}

export const ScrollReveal = ({ 
  children, 
  variants = fadeUpVariant, 
  className = ""
}: ScrollRevealProps) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} 
      className={className}
    >
      {children}
    </motion.div>
  );
}
