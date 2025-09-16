import React from "react";
import { Navbar , Nav , Container , Button } from "react-bootstrap";
import { NavLink , Link  } from "react-router-dom";
import { useState } from "react";

import logo from '../images/logo-removebg-preview.png'




 export default function CustomNavbar() {
  const categories = [
  { name: "Cotton Fabrics", to: "/cotton" },
  { name: "Linen Fabrics", to: "/linen" },
  { name: "Silk & Satin", to: "/silk" },
  { name: "Denim", to: "/denim" },
  { name: "Wool & Cashmere", to: "/wool" },
  { name: "Home Textiles", to: "/homet" },
  { name: "Apparel Fabrics", to: "/apparel" },
  { name: "Technical Textiles", to: "/tech" },
  { name: "Hemp Textiles", to: "/hemp" },
  { name: "Accessories", to: "/accessories" },
];

const products = [
  {name: 'Breathetech Linen', to : 'breathe'},
  {name: 'Aerowave Polyester', to : 'aerowave'},
  {name: 'Ecoblend Cotton', to : 'ecoblend'},
]

 const [showCategories, setShowCategories] = useState(false);
 const [showProducts, setShowProducts] = useState(false);
 const [ expanded , setExpanded ] = useState(false);
  
    return(
    <Navbar expand="lg"  fixed="top" className="navbar-bg"  expanded={expanded} onToggle={() => setExpanded(!expanded)}>
        <Container>
          <Navbar.Brand as={NavLink} to='/' className="fw-bold text-success">
            <img src={logo} alt="logo" className="img-fluid" style={{width :'75px', height :'75px' , objectFit :'cover',borderRadius:'50%'}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav"  />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-center position-relative">

            {/* Categories Hover */}
            <Nav.Link
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
              style={{ position: "relative", cursor: "pointer" }}

            >
              Categories
              {showCategories && (
                <div
                  onMouseEnter={() => setShowCategories(true)}
                  onMouseLeave={() => setShowCategories(false)}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    width: "220px",
                    background: "#fff",
                    padding: "1rem",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    borderRadius: "12px",
                    zIndex: 1000,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column", // vertical stack
                      gap: "0.5rem",
                    }}
                  >
                    {categories.map((cat, idx) => (
                      <Link
                        key={idx}
                        to={cat.to}
                        className="text-decoration-none"
                      >
                        <div
                          style={{
                            background: "#f7f7f7",
                            padding: "0.75rem",
                            borderRadius: "8px",
                            textAlign: "center",
                            fontWeight: "600",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#ff9800";
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.transform = "scale(1.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#f7f7f7";
                            e.currentTarget.style.color = "#000";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          {cat.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </Nav.Link>

          
            
            

              <Nav.Link
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
              style={{ position: "relative", cursor: "pointer" }}
            >
              Featured Products
              {showProducts && (
                <div
                  onMouseEnter={() => setShowProducts(true)}
                  onMouseLeave={() => setShowProducts(false)}
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    width: "220px",
                    background: "#fff",
                    padding: "1rem",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    borderRadius: "12px",
                    zIndex: 1000,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column", // vertical stack
                      gap: "0.5rem",
                    }}
                  >
                    {products.map((pro, i) => (
                      <Link
                        key={i}
                        to={pro.to}
                        className="text-decoration-none"
                      >
                        <div
                          style={{
                            background: "#f7f7f7",
                            padding: "0.75rem",
                            borderRadius: "8px",
                            textAlign: "center",
                            fontWeight: "600",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#ff9800";
                            e.currentTarget.style.color = "#fff";
                            e.currentTarget.style.transform = "scale(1.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#f7f7f7";
                            e.currentTarget.style.color = "#000";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          {pro.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </Nav.Link>

             
              
              <Nav.Link as={NavLink}  to='/about'>About</Nav.Link>
              
      <Button
      variant="success"
        className="ms-3 px-4"
        onClick={() => {
          setExpanded(false);
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact
      </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
 }
