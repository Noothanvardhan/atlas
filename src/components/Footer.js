import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="site-footer" id='contact'>
      <Container>
        <Row>
          {/* Column 1: Logo + Company Info */}
          <Col md={3} sm={6} className="mb-4">
            <h1>ATLAS ENTERPRISES</h1>
            <p className="footer-text">
              We are a global textile supplier, delivering sustainable and
              high-quality fabrics to 32+ countries since 1999. Innovation and
              trust define our journey.
            </p>
            <h5>Location</h5>
              <p>SHOP NO.4, ARNICA IRIS CHS LTD, JANGID ENCL, MIRA ROAD[E], NR CINEMAX BEVERLY PARK, KANAKIYA ROAD,THANE,MAHARASHTRA, 401107</p>
              <p>Email: atlasenterprises8852@gmail.com</p>
              <p>Phone: +91 8852030430</p>
          </Col>

          {/* Column 2: Pages */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-title">Main Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              
              
           
            </ul>
          </Col>

          {/* Column 3: Products */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-title">Categories</h5>
            <ul className="footer-links">
              <li><Link to="/cotton">Cotton Fabrics</Link></li>
              <li><Link to="/Linen">Linen Fabrics</Link></li>
              <li><Link to="/silk">Silk & Satin</Link></li>
              <li><Link to="/denim">Denim</Link></li>
              <li><Link to="/wool">Wool & Cashmere</Link></li>
              <li><Link to="/homet">Home Textiles</Link></li>
              <li><Link to="/apparel">Apparel Fabrics</Link></li>
              <li><Link to="/tech">Technical Tectiles</Link></li>
              <li><Link to="/hemp">Hemp Textiles</Link></li>
              <li><Link to="/accessories">Accessories</Link></li>
            </ul>
          </Col>

          {/* Column 4: Resources / Extras */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-title">Featured Products</h5>
            <ul className="footer-links">
              <li><Link to="/breathe">BreatheTech Linen</Link></li>
              <li><Link to="/aerowave">Aerowave Polyester</Link></li>
              <li><Link to="/ecoblend">EcoBlend Fabrics</Link></li>
            </ul>
          </Col>
        </Row>

        {/* Bottom Row */}
        <Row>
          <Col className="text-center mt-4">
            <p className="copyright">
              © {new Date().getFullYear()} YourCompany. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
      
    </footer>
  );
};

export default Footer;