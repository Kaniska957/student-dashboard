"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  progress: number;
};

export default function CourseCard({
  title,
  progress,
}: Props) {
  return (
    <motion.article
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
      rounded-3xl
      bg-zinc-900
      border
      border-zinc-800
      p-6
      "
    >
      <h2 className="text-lg font-semibold mb-4">
        {title}
      </h2>

      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 1,
          }}
          className="h-full bg-white"
        />
      </div>

      <p className="mt-2 text-sm text-zinc-400">
        {progress}%
      </p>
    </motion.article>
  );
}