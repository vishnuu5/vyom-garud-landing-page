import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

export default function Contact() {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "5rem 0",
        background: "#2d2d2d",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
          maxWidth: "56rem",
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
          style={{ textAlign: "center", marginBottom: "3rem" }}
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
            Get In Touch
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontFamily: "Montserrat",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Let's Build the{" "}
            <span className="gradient-text">Future Together</span>
          </h2>
          <p
            style={{
              color: "#a0a0a0",
              fontSize: "1.125rem",
              fontFamily: "Inter",
            }}
          >
            Reach out to explore partnership opportunities and advanced UAV
            solutions.
          </p>
        </motion.div>

        {/* Contact form */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    color: "#ffffff",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    marginBottom: "0.5rem",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "#1a1a1a",
                    border: "1px solid rgba(64, 64, 64, 0.5)",
                    borderRadius: "0.5rem",
                    color: "#ffffff",
                    fontFamily: "Inter",
                  }}
                  placeholder="Your name"
                  onFocus={(e) => (e.target.style.borderColor = "#ff7b00")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(64, 64, 64, 0.5)")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    color: "#ffffff",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    marginBottom: "0.5rem",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "#1a1a1a",
                    border: "1px solid rgba(64, 64, 64, 0.5)",
                    borderRadius: "0.5rem",
                    color: "#ffffff",
                    fontFamily: "Inter",
                  }}
                  placeholder="you@company.com"
                  onFocus={(e) => (e.target.style.borderColor = "#ff7b00")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(64, 64, 64, 0.5)")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    color: "#ffffff",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    marginBottom: "0.5rem",
                  }}
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "#1a1a1a",
                    border: "1px solid rgba(64, 64, 64, 0.5)",
                    borderRadius: "0.5rem",
                    color: "#ffffff",
                    fontFamily: "Inter",
                  }}
                  placeholder="Your organization"
                  onFocus={(e) => (e.target.style.borderColor = "#ff7b00")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(64, 64, 64, 0.5)")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    color: "#ffffff",
                    fontFamily: "Inter",
                    fontWeight: 500,
                    marginBottom: "0.5rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "#1a1a1a",
                    border: "1px solid rgba(64, 64, 64, 0.5)",
                    borderRadius: "0.5rem",
                    color: "#ffffff",
                    fontFamily: "Inter",
                    resize: "none",
                  }}
                  placeholder="Tell us about your project..."
                  onFocus={(e) => (e.target.style.borderColor = "#ff7b00")}
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(64, 64, 64, 0.5)")
                  }
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn-primary"
                style={{ width: "100%" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? "Message Sent! ✓" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            {/* Email */}
            <div
              style={{
                background: "#1a1a1a",
                border: "1px solid rgba(64, 64, 64, 0.5)",
                borderRadius: "0.5rem",
                padding: "1.5rem",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255, 123, 0, 0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(64, 64, 64, 0.5)")
              }
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
                📧
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "0.5rem",
                }}
              >
                Email
              </h3>
              <a
                href="mailto:contact@vyomgarud.com"
                style={{ color: "#ff7b00", textDecoration: "none" }}
              >
                contact@vyomgarud.com
              </a>
              <p
                style={{
                  color: "#a0a0a0",
                  fontSize: "0.875rem",
                  marginTop: "0.5rem",
                  fontFamily: "Inter",
                }}
              >
                We typically respond within 24 hours.
              </p>
            </div>

            {/* Phone */}
            <div
              style={{
                background: "#1a1a1a",
                border: "1px solid rgba(64, 64, 64, 0.5)",
                borderRadius: "0.5rem",
                padding: "1.5rem",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255, 123, 0, 0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(64, 64, 64, 0.5)")
              }
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
                📞
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "0.5rem",
                }}
              >
                Phone
              </h3>
              <a
                href="tel:+918881444693"
                style={{ color: "#ff7b00", textDecoration: "none" }}
              >
                +91 8881 444 693
              </a>
              <p
                style={{
                  color: "#a0a0a0",
                  fontSize: "0.875rem",
                  marginTop: "0.5rem",
                  fontFamily: "Inter",
                }}
              >
                Available Monday - Friday, 9 AM - 6 PM IST
              </p>
            </div>

            {/* Address */}
            <div
              style={{
                background: "#1a1a1a",
                border: "1px solid rgba(64, 64, 64, 0.5)",
                borderRadius: "0.5rem",
                padding: "1.5rem",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255, 123, 0, 0.5)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(64, 64, 64, 0.5)")
              }
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
                📍
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "0.5rem",
                }}
              >
                Headquarters
              </h3>
              <p style={{ color: "#ff7b00" }}>
                India
                <br />
                <span style={{ color: "#a0a0a0", fontSize: "0.875rem" }}>
                  123 Innovation Drive, Tech Park, Bengaluru, Karnataka 560001
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
