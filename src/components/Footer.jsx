import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ["Features", "Capabilities", "Pricing", "Security"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Resources: ["Documentation", "Support", "API Reference", "Community"],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Compliance",
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: "𝕏" },
    { name: "LinkedIn", icon: "💼" },
    { name: "GitHub", icon: "⚙️" },
    { name: "Facebook", icon: "📱" },
  ];

  return (
    <footer
      style={{
        background: "#1a1a1a",
        borderTop: "1px solid rgba(64, 64, 64, 0.5)",
      }}
    >
      <div
        style={{ maxWidth: "80rem", margin: "0 auto", padding: "3rem 1rem" }}
      >
        {/* Main footer content */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
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
                }}
              >
                VyomGarud
              </span>
            </div>
            <p
              style={{
                color: "#a0a0a0",
                fontSize: "0.875rem",
                lineHeight: 1.6,
              }}
            >
              Advanced autonomous systems for the modern enterprise.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  style={{
                    color: "#a0a0a0",
                    fontSize: "1.125rem",
                    textDecoration: "none",
                  }}
                  title={social.name}
                  whileHover={{ scale: 1.2, color: "#ff7b00" }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3
                style={{
                  color: "#ffffff",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                {category}
              </h3>
              <ul style={{ listStyle: "none" }}>
                {links.map((link) => (
                  <li key={link} style={{ marginBottom: "0.75rem" }}>
                    <a
                      href="#"
                      style={{
                        color: "#a0a0a0",
                        fontSize: "0.875rem",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#ff7b00")}
                      onMouseLeave={(e) => (e.target.style.color = "#a0a0a0")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(64, 64, 64, 0.5)",
            marginBottom: "2rem",
          }}
        ></div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "#a0a0a0",
              fontSize: "0.875rem",
              textAlign: "center",
              fontFamily: "Inter",
            }}
          >
            &copy; {currentYear} VyomGarud. All rights reserved. | Engineered
            with precision.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="#"
              style={{
                color: "#a0a0a0",
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff7b00")}
              onMouseLeave={(e) => (e.target.style.color = "#a0a0a0")}
            >
              Privacy
            </a>
            <a
              href="#"
              style={{
                color: "#a0a0a0",
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff7b00")}
              onMouseLeave={(e) => (e.target.style.color = "#a0a0a0")}
            >
              Terms
            </a>
            <a
              href="#"
              style={{
                color: "#a0a0a0",
                fontSize: "0.875rem",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ff7b00")}
              onMouseLeave={(e) => (e.target.style.color = "#a0a0a0")}
            >
              Cookies
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "48px",
          height: "48px",
          background: "#ff7b00",
          color: "#1a1a1a",
          borderRadius: "50%",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 10px 15px -3px rgba(255, 123, 0, 0.3)",
        }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ↑
      </motion.button>
    </footer>
  );
}
