import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

export default function Capabilities() {
  const [ref, isInView] = useInView();

  const capabilities = [
    {
      id: 1,
      title: "Autonomous Flight",
      description:
        "AI-powered autonomous systems with real-time decision making and adaptive pathfinding.",
      icon: "✈️",
      features: [
        "Real-time adaptation",
        "Smart navigation",
        "Collision avoidance",
      ],
    },
    {
      id: 2,
      title: "Surveillance & Reconnaissance",
      description:
        "Advanced sensor arrays for mission-critical surveillance and intelligence gathering.",
      icon: "🎯",
      features: ["4K thermal imaging", "LiDAR sensors", "Extended range"],
    },
    {
      id: 3,
      title: "Payload Delivery",
      description:
        "Precision delivery systems capable of handling critical operational requirements.",
      icon: "📦",
      features: ["Precision targeting", "Safe release", "25kg capacity"],
    },
    {
      id: 4,
      title: "Data Analytics",
      description:
        "Advanced analytics platform for real-time insights and operational intelligence.",
      icon: "📊",
      features: ["Live dashboards", "AI analysis", "Predictive insights"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="capabilities"
      style={{ padding: "5rem 0", background: "#2d2d2d", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "5rem",
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
            Our Solutions
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
            Industry-Leading <span className="gradient-text">Capabilities</span>
          </h2>
          <p
            style={{
              color: "#a0a0a0",
              fontSize: "1.125rem",
              maxWidth: "42rem",
              margin: "0 auto",
            }}
          >
            Comprehensive UAV solutions engineered for complex operational
            demands.
          </p>
        </motion.div>

        {/* Capabilities grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.id}
              variants={cardVariants}
              style={{
                background: "#1a1a1a",
                border: "1px solid rgba(64, 64, 64, 0.5)",
                borderRadius: "0.75rem",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 123, 0, 0.5)";
                e.currentTarget.style.boxShadow =
                  "0 20px 25px -5px rgba(255, 123, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(64, 64, 64, 0.5)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                  position: "relative",
                  zIndex: 10,
                }}
              >
                {cap.icon}
              </div>

              {/* Content */}
              <div style={{ position: "relative", zIndex: 10 }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "0.75rem",
                  }}
                >
                  {cap.title}
                </h3>
                <p
                  style={{
                    color: "#a0a0a0",
                    fontSize: "0.875rem",
                    marginBottom: "1.5rem",
                    lineHeight: 1.6,
                  }}
                >
                  {cap.description}
                </p>

                {/* Features */}
                <ul style={{ listStyle: "none" }}>
                  {cap.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "#a0a0a0",
                        fontSize: "0.875rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          background: "#ff7b00",
                          borderRadius: "50%",
                        }}
                      ></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
