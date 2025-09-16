import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCheckCircle, } from "react-icons/fa";


import factory from "../images/factory1.jpeg"
import Flag from "react-world-flags";


const AboutUs = () => {
  const countries = [
  { code: "US", name: "USA" },
  { code: "GB", name: "UK" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "IT", name: "Italy" },
  { code: "ES", name: "Spain" },
  { code: "PT", name: "Portugal" },
  { code: "NL", name: "Netherlands" },
  { code: "CA", name: "Canada" },
  { code: "MX", name: "Mexico" },
  { code: "BR", name: "Brazil" },
  { code: "AR", name: "Argentina" },
  { code: "ZA", name: "South Africa" },
  { code: "EG", name: "Egypt" },
  { code: "AE", name: "UAE" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "IN", name: "India" },
  { code: "CN", name: "China" },
  { code: "JP", name: "Japan" },
  { code: "KR", name: "South Korea" },
  { code: "VN", name: "Vietnam" },
  { code: "TH", name: "Thailand" },
  { code: "BD", name: "Bangladesh" },
  { code: "ID", name: "Indonesia" },
  { code: "AU", name: "Australia" },
  { code: "NZ", name: "New Zealand" },
  { code: "TR", name: "Turkey" },
  { code: "PL", name: "Poland" },
  { code: "SE", name: "Sweden" },
  { code: "NO", name: "Norway" },
  { code: "DK", name: "Denmark" },
  { code: "RU", name: "Russia" },
];

  return (
    <div className="about-page">

      {/* Breadcrumb Section */}
      <section className="breadcrumb-section text-center">
        <h1 data-aos='fade-right'>About Us</h1>
        <p data-aos='fade-right'><b>We weave trust, quality, and innovation into every fabric.</b></p>
        
      </section>

      {/* 🌟 Fullscreen About Section */}
    <section className="aboutus-hero">
      <Container>
        <Row className="align-items-center">
          {/* Left Image */}
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src={factory}
              alt="Factory"
              className="img-fluid aboutus-main-img"
              data-aos='fade-right'
            />
          </Col>

          {/* Right Content */}
          <Col md={6}>
            <h6 className="aboutus-subtitle" data-aos='fade-left'>01. About Us</h6>
            <h2 className="aboutus-title" data-aos='fade-left'>
              The Best Solution For All Industrial & Factory Businesses
            </h2>
            <p className="aboutus-text" data-aos='fade-left'>
              In 1999, Extice entered the textile sector with its manufacturing
              facilities of cotton yarn. Combining modern technology with skilled
              manpower under Extice unique inspiring atmosphere, this new venture
              soon rose to the top of the local textile industry. Today it has one
              of the most sophisticated vertically integrated set-ups.
            </p>

            {/* Bullet Points */}
            <ul className="aboutus-list" data-aos='fade-left'>
              <li>
                <FaCheckCircle className="icon" /> 3 Factories, 36400m² covering,
                150+ workers
              </li>
              <li>
                <FaCheckCircle className="icon" /> Professional Quality Inspection
                Teams
              </li>
              <li>
                <FaCheckCircle className="icon" /> Focus On Sustainability
              </li>
              <li>
                <FaCheckCircle className="icon" /> Product Design & Development
              </li>
            </ul>

            {/* Gradient Button */}
           

            {/* Small Image at Bottom */}
           
          </Col>
        </Row>
      </Container>
    </section>


      {/* Gallery Section */}
    <section className="global-presence" >
      <h5 className="section-subtitle text-center" >03. Global Reach</h5>
      <h2 className="section-title text-center mb-4" data-aos='zoom-in'>
        Supplying Quality Textiles <br /> To <span>32 Countries</span> Worldwide
      </h2>

      {/* Scrolling Line */}
      <div className="scroll-wrapper">
        <div className="scroll-track">
          {countries.concat(countries).map((country, index) => (
            <span key={index} className="scroll-item">
              <Flag code={country.code} alt={country.name} className="flag-icon" />
              {country.name}
            </span>
          ))}
        </div>
      </div>
    </section>

      {/* Video Background Section */}
      <section className="video-section">
        <video autoPlay muted loop playsInline className="bg-video">
          <source
            src="https://arville.com/wp-content/uploads/2025/04/homepage-header-video-.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay text-center">
          <h2 className="video-text" data-aos='fade-in'>
            We Shape Interior Designs, Crafting Timeless and Inspiring Spaces
          </h2>
        </div>
      </section>
      {/* Working Process Section (new style) */}
<section className="working-process-section">
  <Container>
   
    <h2 className="section-title text-center mb-5"data-aos='fade-right'>
      Description Textiles Process <br /> For Exceptional Results
    </h2>
    <Row>
      {[
        {
          icon: "🏭",
          title: "01. Production Of Fabric",
          text: "We do execute stabilization including reweaving & stitch repair details."
        },
        {
          icon: "🌍",
          title: "02. Exportation Globally",
          text: "We do execute stabilization including reweaving & stitch repair details."
        },
        {
          icon: "⚙️",
          title: "03. Improve And Evolve",
          text: "We do execute stabilization including reweaving & stitch repair details."
        },
        {
          icon: "🤝",
          title: "04. Lasting Partnership",
          text: "We build strong client relationships through regular contact and feedback."
        }
      ].map((step, i) => (
        <Col key={i} md={3} sm={6} className="text-center process-item" data-aos='fade-left' data-aos-delay={i*100}>
          <div className="icon-circle">{step.icon}</div>
          <h5 className="process-title">{step.title}</h5>
          <p>{step.text}</p>
          <span className="hover-line"></span>
        </Col>
      ))}
    </Row>
  </Container>
</section>


      {/* Working Process Section */}
      <Container fluid className="process-section">
        
        <h2 className="section-title text-center mb-5" data-aos='zoom-in'>
          Textile process for exceptional results
        </h2>
        <Row>
          <Col md={3} sm={6} className="mb-4">
            <Card className="process-card text-center" data-aos='fade-in' data-aos-delay='100'>
              <Card.Body>
                <Card.Title>01. Production of fabric</Card.Title>
                <Card.Text>
                  We execute stabilization including reweaving & stitch repair.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <Card className="process-card text-center" data-aos='fade-in' data-aos-delay='200'>
              <Card.Body>
                <Card.Title>02. Exportation globally</Card.Title>
                <Card.Text>
                  Ensuring proper logistics and export worldwide.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <Card className="process-card text-center" data-aos='fade-in' data-aos-delay='300'>
              <Card.Body>
                <Card.Title>03. Improve and Evolve</Card.Title>
                <Card.Text>
                  Constant innovation and product evolution for better results.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <Card className="process-card text-center" data-aos='fade-in' data-aos-delay='400'>
              <Card.Body>
                <Card.Title>04. Lasting Partnership</Card.Title>
                <Card.Text>
                  Building strong relationships through feedback and trust.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;