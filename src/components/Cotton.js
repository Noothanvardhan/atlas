import React from "react";
import CategoryLayout from "../components/Layout";
import cotton from '../images/cotton.webp'

export default function Cotton() {
  const data = {
    title: "Cotton Fabrics",
    image: cotton, // 🔄 replace with your actual cotton fabric image
    description:
      "Our cotton fabrics are soft, breathable, and versatile — making them the perfect choice for everyday fashion, home textiles, and sustainable living. Known for comfort and durability, cotton remains the most trusted fabric across the globe.",
    rate: "₹220 – ₹320 / meter",
    features: [
      "100% Pure Cotton",
      "Breathable & skin-friendly",
      "Durable and easy to maintain",
      "Available in multiple weaves & finishes",
      "Eco-friendly processing",
    ],
  };

  return <CategoryLayout {...data} />;
}
