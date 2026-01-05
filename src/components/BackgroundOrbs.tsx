import { motion } from 'framer-motion';

const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Primary red orb */}
      <motion.div
        className="glow-orb w-[600px] h-[600px] bg-primary/20 -top-[200px] -right-[200px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary orb */}
      <motion.div
        className="glow-orb w-[400px] h-[400px] bg-primary/10 bottom-[10%] -left-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Accent orb */}
      <motion.div
        className="glow-orb w-[300px] h-[300px] bg-accent/15 top-[40%] right-[10%]"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default BackgroundOrbs;
