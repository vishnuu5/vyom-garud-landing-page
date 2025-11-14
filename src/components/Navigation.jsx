import { useState } from "react";
import { motion } from "framer-motion";

export default function Navigation({ scrollPosition }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Capabilities", "Highlights", "Contact"];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 transition-smooth"
      style={{
        backgroundColor:
          scrollPosition > 50 ? "rgba(26, 26, 26, 0.95)" : "transparent",
        backdropFilter: scrollPosition > 50 ? "blur(10px)" : "none",
        boxShadow:
          scrollPosition > 50 ? "0 10px 15px -3px rgba(0, 0, 0, 0.2)" : "none",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #ff7b00, #ff9933)",
                borderRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#1a1a1a",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  fontSize: "1.125rem",
                }}
              >
                V
              </span>
            </div>
            <span
              style={{
                color: "#ffffff",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                fontSize: "1.25rem",
                display: "none",
              }}
              className="sm:inline"
            >
              VyomGarud
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div
            style={{ display: "none" }}
            className="md:flex items-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "#a0a0a0",
                  fontSize: "0.875rem",
                  fontFamily: "Inter",
                  textDecoration: "none",
                }}
                custom={i}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                onMouseEnter={(e) => (e.target.style.color = "#ff7b00")}
                onMouseLeave={(e) => (e.target.style.color = "#a0a0a0")}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="btn-primary"
              custom={navItems.length}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              style={{ fontSize: "0.875rem" }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            style={{
              color: "#ffffff",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            style={{ borderTop: "1px solid #404040", paddingBottom: "1rem" }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  display: "block",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  color: "#a0a0a0",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => (e.target.style.color = "#ff7b00")}
                onMouseLeave={(e) => (e.target.style.color = "#a0a0a0")}
              >
                {item}
              </a>
            ))}
            <button
              className="btn-primary w-full"
              style={{ marginTop: "1rem", fontSize: "0.875rem" }}
            >
              Get Started
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
