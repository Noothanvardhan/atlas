import React from "react";
import CategoryLayout from "../components/Layout";
import linen from '../images/linen.jpg'

export default function Linen() {
  const data = {
    title: "Linen Fabrics",
    image: linen, // 🔄 replace with your linen fabric image
    description:
      "Our linen fabrics are crafted from premium natural fibers, offering unmatched breathability, strength, and timeless elegance. Ideal for summer wear, luxury interiors, and eco-conscious fashion, linen brings a classic yet modern appeal.",
    rate: "₹280 – ₹400 / meter",
    features: [
      "100% Natural Linen",
      "Highly breathable & moisture-wicking",
      "Durable with a soft texture",
      "Eco-friendly and sustainable",
      "Available in solid shades & woven patterns",
    ],
  };

  return <CategoryLayout {...data} />;
}
