import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

export default function About() {
  const [ref, isInView] = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      style={{
        padding: "5rem 0",
        background: "#1a1a1a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "384px",
          height: "384px",
          background: "rgba(255, 123, 0, 0.05)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      ></div>

      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 1rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Left side - Image/Visualization */}
          <motion.div
            variants={itemVariants}
            style={{ order: 2 }}
            className="md:order-1"
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
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
                      "linear-gradient(135deg, rgba(255, 123, 0, 0.3), transparent)",
                  }}
                ></div>
                <div
                  style={{ fontSize: "6rem", color: "rgba(255, 123, 0, 0.25)" }}
                >
                  📡
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={itemVariants}
            style={{ order: 1 }}
            className="md:order-2"
          >
            <div style={{ marginBottom: "1rem" }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "0.25rem 0.75rem",
                  background: "rgba(255, 123, 0, 0.1)",
                  border: "1px solid rgba(255, 123, 0, 0.3)",
                  borderRadius: "9999px",
                  color: "#ff7b00",
                  fontSize: "0.875rem",
                  fontFamily: "Inter",
                  fontWeight: 500,
                }}
              >
                About VyomGarud
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontFamily: "Montserrat",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
              }}
            >
              Precision Engineering{" "}
              <span className="gradient-text">Meets Innovation</span>
            </h2>

            <p
              style={{
                color: "#a0a0a0",
                fontSize: "1.125rem",
                marginBottom: "1rem",
                lineHeight: 1.6,
                fontFamily: "Inter",
              }}
            >
              VyomGarud stands at the forefront of autonomous drone technology,
              combining military-grade reliability with cutting-edge AI systems.
              We design UAVs that think, adapt, and deliver with unparalleled
              precision.
            </p>

            <p
              style={{
                color: "#a0a0a0",
                fontSize: "1.125rem",
                marginBottom: "2rem",
                lineHeight: 1.6,
                fontFamily: "Inter",
              }}
            >
              Our mission: to empower organizations with advanced autonomy that
              transcends limitations and redefines what's possible in unmanned
              systems.
            </p>

            <div style={{ display: "flex", gap: "2rem" }}>
              <div>
                <p
                  style={{
                    fontSize: "1.875rem",
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    color: "#ff7b00",
                    marginBottom: "0.5rem",
                  }}
                >
                  2K+
                </p>
                <p style={{ color: "#a0a0a0", fontSize: "0.875rem" }}>
                  Missions Completed
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "1.875rem",
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    color: "#ff7b00",
                    marginBottom: "0.5rem",
                  }}
                >
                  50+
                </p>
                <p style={{ color: "#a0a0a0", fontSize: "0.875rem" }}>
                  Enterprise Clients
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "1.875rem",
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    color: "#ff7b00",
                    marginBottom: "0.5rem",
                  }}
                >
                  99%
                </p>
                <p style={{ color: "#a0a0a0", fontSize: "0.875rem" }}>
                  Success Rate
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
