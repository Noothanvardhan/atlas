import React from "react";
import CategoryLayout from "../components/Layout";
import breathe from '../images/breathetech.jpg'

export default function Breathe() {
  const data = {
  title: "Breathable Linen Fabrics",
  image: breathe, // replace with your actual image path
  description:
    "Discover our premium breathable linen fabrics, perfect for apparel and home textiles. Lightweight, soft, and naturally moisture-wicking, ideal for warm climates and comfortable wear.",
  rate: "$35 per meter",
  features: [
    "100% natural linen",
    "Highly breathable and cool",
    "Soft and durable",
    "Eco-friendly production",
    "Available in multiple colors",
  ],
 
  };

  return <CategoryLayout {...data} />;
}


    