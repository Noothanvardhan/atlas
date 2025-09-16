import React from "react";
import { StarFill } from "react-bootstrap-icons";
import { Link  } from "react-router-dom";


import {
 
  Container,
  Row,
  Col,
  Button,
  Card,
  
  Carousel,
} from "react-bootstrap";

import {
  Globe2,
  Recycle,
  Cpu,
  Layers,
  Users,
  Lightbulb,
} from "lucide-react";
import CountUp from "react-countup";
import textile from '../images/textileheader.jpg'
import fabric from '../images/fabric.jpg'
import cotton from '../images/cotton.webp'
import linen from '../images/linen.jpg'
import silk from '../images/silk.jpg'
import denim from '../images/denim.jpg'
import wool from '../images/wool.jpg'
import homet from '../images/homet.jpeg'
import apparel from '../images/apparel.avif'
import tech from '../images/technical.jpg'
import hemp from '../images/hemp.webp'
import accessories from '../images/accessories.jpg'
import breathetech from '../images/breathetech.jpg'
import polyester from '../images/polyester.jpg'
import ecoblend from '../images/ecoblend.png'
 const categories = [
    { name: "Cotton Fabrics", img: cotton , to :'/cotton' },
    { name: "Linen Fabrics", img: linen , to : "/linen" },
    { name: "Silk & Satin", img: silk, to :'/silk' },
    { name: "Denim", img: denim , to :'/denim'},
    { name: "Wool & Cashmere", img: wool , to :'/wool'},
    { name: "Home Textiles", img: homet , to :'/homet'},
    { name: "Apparel Fabrics", img: apparel , to : '/apparel' },
    { name: "Technical Textiles", img: tech , to:'/tech' },
    { name: "Hemp Textiles", img: hemp , to :'/hemp' },
    { name: "Accessories", img: accessories , to :'/accessories'},
  ];

 const roadmap = [
    {
      title: "Global Expansion",
      desc: "Strengthen our presence in 32+ countries and enter emerging markets.",
      icon: <Globe2 size={28} />,
    },
    {
      title: "Sustainability Focus",
      desc: "Eco-friendly fabrics, certifications, and zero-waste processes.",
      icon: <Recycle size={28} />,
    },
    {
      title: "Digital Transformation",
      desc: "Smart machinery, AI-driven quality control, and e-commerce solutions.",
      icon: <Cpu size={28} />,
    },
    {
      title: "Product Diversification",
      desc: "Moving into home textiles, technical fabrics, and seasonal collections.",
      icon: <Layers size={28} />,
    },
    {
      title: "Brand Building",
      desc: "Establishing Atlas as a trusted global textile brand.",
      icon: <Users size={28} />,
    },
    {
      title: "Innovation Lab",
      desc: "R&D in smart fabrics like antibacterial and fire-retardant textiles.",
      icon: <Lightbulb size={28} />,
    },
  ];

 const testimonials = [
    {
      name: "John Smith",
      country: "USA",
      text: "Atlas Enterprises delivers premium quality textiles with consistency. Their fabrics elevated our fashion line.",
      rating: 5,
    },
    {
      name: "Sophia Lee",
      country: "UK",
      text: "Professional service and excellent quality! We trust them for our home textile collections.",
      rating: 4,
    },
    {
      name: "Rajiv Kumar",
      country: "India",
      text: "Atlas ensures timely delivery and sustainable fabrics. Our partnership has been very successful.",
      rating: 5,
    },
    {
      name: "Elena Garcia",
      country: "Spain",
      text: "Their innovative fabrics helped us launch a new eco-friendly line. Truly global standards!",
      rating: 5,
    },
    {
      name: "Michael Wong",
      country: "Singapore",
      text: "Great attention to detail and timely deliveries. They are our trusted supplier.",
      rating: 4,
    },
];

export default function HomePage() {



  


  return (
    <div>
    
     

      {/* HERO CAROUSEL */}
      <Carousel fade className="mt-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={textile}
            alt="Textiles"
            style={{ height: "100vh", objectFit: "cover" , filter:'brightness(0.5)'}}
            
          />
          <Carousel.Caption>
            <h1 className="fw-bold" data-aos='fade-up'>Modern Textiles. Global Reach.</h1>
            <p data-aos='fade-up'>Sustainable fabrics shipped across  countries.</p>
            
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fabric}
            alt="Fabric"
            style={{ height: "100vh", objectFit: "cover" ,filter:'brightness(0.5)'}}
          />
          <Carousel.Caption>
            <h1 className="fw-bold">Sustainable & Certified</h1>
            <p>Eco-friendly processes for a better tomorrow.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* STATS SECTION */}
      <section className="py-5 text-center">
        <Container>
          <Row>
            <Col md={3}>
              <h2 className="fw-bold text-success"><CountUp end={120} duration={2} />+</h2>
              <p>Unique Designs</p>
            </Col>
            <Col md={3}>
              <h2 className="fw-bold text-success"><CountUp end={32} duration={2} /></h2>
              <p>Countries Served</p>
            </Col>
            <Col md={3}>
              <h2 className="fw-bold text-success"><CountUp end={500} duration={2} />K</h2>
              <p>Meters / Month</p>
            </Col>
            <Col md={3}>
              <h2 className="fw-bold text-success"><CountUp end={100} duration={2} />%</h2>
              <p>Sustainable</p>
            </Col>
          </Row>
        </Container>
      </section>

 <section id="categories" className="py-5" data-aos='fade-up'>
      <h2 className="text-center fw-bold mb-4">Explore Our Categories</h2>
      <div className="categories-scroll">
        {categories.map((cat, idx) => (
          <Card key={idx} className="category-card shadow-sm">
            <div className="img-wrapper">
              <Card.Img src={cat.img} alt={cat.name} className="category-img" />
            </div>
            <Card.Body className="text-center p-2">
              <p className="category-title mb-2">{cat.name}</p>
            </Card.Body>
            <Button variant="outline-success mb-2" style={{width:'100px',display:'block',margin:'0 auto'}}>
                     <Link to={cat.to} style={{textDecoration:"none",color:'inherit'}}>Enquire</Link>
                    </Button>
          </Card>
        ))}
      </div>
    </section>



      {/* SERVICES */}
      <section id="services" className="py-5">
        <Container>
          <h2 className="text-center mb-4 fw-bold" data-aos='zoom-in'>Our Services</h2>
          <Row>
            {[
              { title: "Fabric Design", text: "Custom patterns & finishes." },
              { title: "Production", text: "Precision looms & scalable runs." },
              { title: "Sustainability", text: "Eco-certified processes." },
              { title: "Logistics", text: "Worldwide shipping support." },
            ].map((s, idx) => (
              <Col md={3} key={idx}>
                <Card className="mb-4 shadow-sm h-100 border-0" data-aos='fade-right' data-aos-delay={idx*100}>
                  <Card.Body>
                    <Card.Title className="text-success">{s.title}</Card.Title>
                    <Card.Text>{s.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PRODUCTS */}
     

      {/* GLOBAL COUNTRIES */}
     <section className="normal-section" data-aos='fade-up'>
        <h1>Weaving Quality</h1>
        <h1>Connecting the World.</h1>
        <p>It keeps the essence of craftsmanship + global reach while flowing smoothly in two lines.</p>
     </section>


 <section className="growth-roadmap py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5">Our Future Growth Plans</h2>
        <div className="timeline">
          {roadmap.map((step, idx) => (
            <Row
              key={idx}
              className={`align-items-center mb-5 ${
                idx % 2 === 0 ? "flex-row"  : "flex-row-reverse"
              }`}
            >
              <Col md={6}>
                <div className="timeline-content shadow-sm" data-aos='fade-up'>
                  <div className="icon-circle">{step.icon}</div>
                  <h5 className="fw-bold">{step.title}</h5>
                  <p className="text-muted">{step.desc}</p>
                </div>
              </Col>
              <Col md={6} className="d-none d-md-block">
                <div className="timeline-line"></div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>


      <section id="products" className="py-5 ">
        <Container>
          <h2 className="text-center fw-bold mb-4" data-aos='zoom-in'>Featured Products</h2>
          <Row>
            {[
              {
                title: "BreatheTech Linen",
                text: "Lightweight interior fabric.",
                img: breathetech,
                to :'/breathe'
              },
              {
                title: "AeroWeave Polyester",
                text: "Durable outdoor textile.",
                img: polyester,
                to : '/aerowave'
              },
              {
                title: "EcoBlend Cotton",
                text: "Soft & sustainable fabric.",
                img: ecoblend,
                to :'/ecoblend'
              },
            ].map((p, idx) => (
              <Col md={4} key={idx}>
                <Card className="mb-4 shadow-sm border-0" data-aos='fade-left' data-aos-delay={idx*100}>
                  <Card.Img
                    variant="top"
                    src={p.img}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text>{p.text}</Card.Text>
                    <Button variant="outline-success" size="sm">
                     <Link to={p.to} style={{textDecoration:"none",color:'inherit'}}> Enquire </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
        
      {/* TESTIMONIALS */}
      <section className="testimonials py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4">What Our Clients Say</h2>
        <div className="slider">
          <div className="slide-track">
            {testimonials.concat(testimonials).map((t, i) => (
              <Card key={i} className="testimonial-card shadow-sm">
                <Card.Body>
                  <div className="stars mb-2">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <StarFill key={idx} className="text-warning me-1" />
                    ))}
                  </div>
                  <Card.Text className="fst-italic">"{t.text}"</Card.Text>
                  <h6 className="fw-bold mt-3">{t.name}</h6>
                  <small className="text-muted">{t.country}</small>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>

      {/* CONTACT */}
      <section  className="py-5" style={{display:'block',margin :'0 auto'}} data-aos='fade-right'>
        <Container className="px-5">
          <h2 className="text-center fw-bold mb-4">Get in Touch</h2>
          <Row>
            <Col md={6} className="mb-5">
            <h2>DIRECTOR</h2>
            <h2>Aditya Soni</h2>
              <h5>Location</h5>
              <p>SHOP NO.4, ARNICA IRIS CHS LTD, JANGID ENCL, MIRA ROAD[E], NR CINEMAX BEVERLY PARK, KANAKIYA ROAD,THANE,MAHARASHTRA, 401107</p>
              <p>Email: atlasenterprises8852@gmail.com</p>
              <p>Phone: +91 9004639745</p>
            </Col>
            <Col md={6} >
            <h3>Pay through below scanner</h3>
            <img src={require('../images/scanner.png')} alt="scanner" className="img-fluid" style={{width:'300px',height:'300px',objectFi:'cover'}} />
            <p>Atlas Enterprises</p>
              </Col>
              </Row>
        </Container>
      </section>

   
      
    </div>
  );
}
