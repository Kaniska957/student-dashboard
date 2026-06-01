"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="contents"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}