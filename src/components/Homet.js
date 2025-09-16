import React from "react";
import CategoryLayout from "../components/Layout";
import homet from '../images/homet.jpeg'
export default function HomeTextiles() {
  const data = {
    title: "Home Textiles",
    image: homet, // 🔄 replace with your home textiles image
    description:
      "Our Home Textiles collection brings comfort and elegance into every living space. From soft furnishings to premium curtains and bed linens, we design fabrics that transform homes with style, durability, and warmth.",
    rate: "₹400 – ₹900 / piece",
    features: [
      "Curtains, bed linens & upholstery",
      "Durable and easy to maintain",
      "Wide range of textures & patterns",
      "Elegant designs for modern homes",
      "Eco-conscious and long-lasting materials",
    ],
  };

  return <CategoryLayout {...data} />;
}
