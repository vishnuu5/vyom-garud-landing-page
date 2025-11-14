import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#1a1a1a",
        position: "relative",
        overflow: "hidden",
        paddingTop: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background gradient elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "384px",
          height: "384px",
          background: "rgba(255, 123, 0, 0.05)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "384px",
          height: "384px",
          background: "rgba(255, 123, 0, 0.05)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      ></div>

      <motion.div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "5rem 1rem",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} style={{ marginBottom: "1rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              background: "rgba(255, 123, 0, 0.1)",
              border: "1px solid rgba(255, 123, 0, 0.3)",
              borderRadius: "9999px",
              color: "#ff7b00",
              fontSize: "0.875rem",
              fontFamily: "Inter",
              fontWeight: 500,
            }}
          >
            Advanced UAV Technology
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: "clamp(2rem, 8vw, 3.5rem)",
            fontFamily: "Montserrat",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "1.5rem",
            lineHeight: 1.2,
          }}
        >
          <span style={{ color: "#ffffff" }}>The Future of </span>
          <span className="gradient-text">Autonomous</span>
          <span style={{ color: "#ffffff" }}> Flight</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "#a0a0a0",
            maxWidth: "48rem",
            margin: "0 auto 2rem",
            lineHeight: 1.6,
            fontFamily: "Inter",
          }}
        >
          VyomGarud delivers military-grade UAV systems engineered for
          precision, autonomy, and unmatched reliability. Transform your
          operations with advanced drone technology.
        </motion.p>

        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
          className="sm:flex-row"
        >
          <button className="btn-primary">Explore Capabilities</button>
          <button className="btn-secondary">Request Demo</button>
        </motion.div>

        {/* Hero visualization */}
        <motion.div
          variants={itemVariants}
          style={{ marginTop: "4rem", position: "relative" }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "256px",
              borderRadius: "0.75rem",
              overflow: "hidden",
              border: "1px solid rgba(64, 64, 64, 0.5)",
              background: "rgba(45, 45, 45, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom right, rgba(255, 123, 0, 0.2), rgba(255, 123, 0, 0.05))",
              }}
            ></div>
            <motion.div
              style={{ position: "relative", zIndex: 10, textAlign: "center" }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <div
                style={{
                  fontSize: "6rem",
                  color: "rgba(255, 123, 0, 0.3)",
                  marginBottom: "1rem",
                }}
              >
                🚁
              </div>
              <p
                style={{
                  color: "#ff7b00",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  marginTop: "1rem",
                }}
              >
                Advanced Autonomous System
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
