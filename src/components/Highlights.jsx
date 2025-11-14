import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

export default function Highlights() {
  const [ref, isInView] = useInView();

  const highlights = [
    {
      id: 1,
      title: "Military-Grade Reliability",
      description:
        "Built to withstand extreme conditions with 99.9% operational uptime guarantee and redundant systems.",
      icon: "🛡️",
    },
    {
      id: 2,
      title: "Advanced AI Integration",
      description:
        "Machine learning algorithms enable real-time decision-making and autonomous mission execution.",
      icon: "🧠",
    },
    {
      id: 3,
      title: "Extended Operational Range",
      description:
        "5km range with real-time telemetry, video streaming, and command authority over complex terrain.",
      icon: "📡",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      id="highlights"
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
          bottom: 0,
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
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
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
              marginBottom: "1rem",
            }}
          >
            Key Advantages
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontFamily: "Montserrat",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "1.5rem",
            }}
          >
            Why Choose <span className="gradient-text">VyomGarud</span>
          </h2>
        </motion.div>

        {/* Highlights */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {highlights.map((highlight, idx) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* Icon with background */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "rgba(255, 123, 0, 0.1)",
                    border: "1px solid rgba(255, 123, 0, 0.3)",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.875rem",
                  }}
                >
                  {highlight.icon}
                </div>
              </div>

              {/* Content */}
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                }}
              >
                {highlight.title}
              </h3>
              <p
                style={{
                  color: "#a0a0a0",
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                  flex: 1,
                  fontFamily: "Inter",
                }}
              >
                {highlight.description}
              </p>

              {/* Learn more link */}
              <motion.a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#ff7b00",
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
                whileHover={{ x: 5 }}
              >
                Learn More →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ marginTop: "4rem", textAlign: "center" }}
        >
          <p
            style={{
              color: "#a0a0a0",
              fontSize: "1.125rem",
              marginBottom: "1.5rem",
              fontFamily: "Inter",
            }}
          >
            Ready to experience the future of autonomous systems?
          </p>
          <button className="btn-primary">Request a Demo Today</button>
        </motion.div>
      </div>
    </section>
  );
}
