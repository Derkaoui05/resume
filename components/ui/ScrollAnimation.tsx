import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

export const FadeInSection: FC<{ children: ReactNode }> = ({ children }) => {
    const [ref, inView] = useInView({
      triggerOnce:false,
      threshold: 0.1,
    });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    );
  };