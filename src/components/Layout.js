import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";

export default function CategoryLayout({ title, image, description, rate, features }) {
  return (
    <section
      className="category-layout py-5"
      style={{
        background: "linear-gradient(120deg, #f4f4f9, #faf7f2)",marginTop:'70px'
      }}
    >
      <Container>
        <Row className="align-items-center g-5">
          {/* Image Section */}
          <Col md={6} data-aos='fade-right'>
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={image}
                alt={title}
                className="img-fluid w-100"
                style={{
                  objectFit: "cover",
                  maxHeight: "520px",
                  transition: "transform 0.5s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                
              />
            </div>
          </Col>

          {/* Text Section */}
          <Col md={6} data-aos='fade-left'>
            <h1 className="fw-bold mb-3" style={{ fontSize: "2.2rem", lineHeight: "1.3" }}>
              {title}
            </h1>
            <p className="text-muted mb-4" style={{ fontSize: "1.05rem" }}>
              {description}
            </p>
            <h3 className="text-success fw-bold mb-4">{rate}</h3>

            {/* Features */}
            <Row className="g-3 mb-4">
              {features.map((f, i) => (
                <Col xs={12} sm={6} key={i}>
                  <Card
                    className="h-100 border-0 shadow-sm"
                    style={{ borderRadius: "14px", background: "#fff" }}
                  >
                    <Card.Body className="py-3 px-3 d-flex align-items-center">
                      <span style={{ fontSize: "0.9rem" }}>{f}</span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* CTA */}
            <Button
              variant="success"
              className="px-4 py-2 fw-semibold shadow"
              style={{ borderRadius: "50px", fontSize: "1rem" }}
            >
              Call To Order
            </Button>
          </Col>
        </Row>

        {/* Contact Section */}
        <Row className="justify-content-center mt-5" data-aos='fade-up'>
          <Col md={10}>
            <Card
              className="shadow border-0 text-center"
              style={{
                borderRadius: "20px",
                background: "linear-gradient(135deg, #ffffff, #f3f6f9)",
              }}
            >
              <Card.Body className="py-5">
                <h2 className="fw-bold mb-3" style={{ fontSize: "1.8rem" }}>
                  Get in Touch with Us
                </h2>
                <p className="text-muted mb-4" style={{ fontSize: "1.05rem" }}>
                  For enquiries, bulk bookings, and rate negotiations, connect with our team directly.
                </p>

                <div className="d-flex flex-column flex-sm-row justify-content-center gap-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <TelephoneFill className="text-success me-2" size={20} />
                    <a
                      href="tel:+911234567890"
                      className="text-decoration-none text-dark fw-semibold"
                      style={{ fontSize: "1rem" }}
                    >
                      +91 9004639745
                    </a>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <EnvelopeFill className="text-primary me-2" size={20} />
                    <a
                      href="mailto:info@atlasenterprises.com"
                      className="text-decoration-none text-dark fw-semibold"
                      style={{ fontSize: "1rem" }}
                    >
                      atlasenterprises8852@gmail.com
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
