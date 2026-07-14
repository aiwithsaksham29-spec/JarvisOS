import { motion } from "framer-motion";

export default function Orb() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: "170px",
          height: "170px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #60a5fa 0%, #2563eb 45%, #0f172a 100%)",
          boxShadow:
            "0 0 40px rgba(96,165,250,.45), 0 0 120px rgba(37,99,235,.35)",
        }}
      />
    </div>
  );
}