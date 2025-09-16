import React from "react";
import CategoryLayout from "../components/Layout";
import wool from '../images/wool.jpg'

export default function WoolCashmere() {
  const data = {
    title: "Wool & Cashmere Fabrics",
    image: wool, // 🔄 replace with your wool/cashmere image
    description:
      "Our Wool & Cashmere collection blends luxurious softness with unmatched warmth. Perfect for premium winter wear, suits, and scarves, these fabrics offer timeless elegance and exceptional comfort while maintaining durability.",
    rate: "₹500 – ₹1200 / meter",
    features: [
      "Premium Wool & Cashmere blends",
      "Soft, warm & breathable",
      "Durable yet lightweight",
      "Ideal for winter wear, coats & suits",
      "Luxurious feel with fine finish",
    ],
  };

  return <CategoryLayout {...data} />;
}
