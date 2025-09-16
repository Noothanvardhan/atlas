import React from "react";
import CategoryLayout from "../components/Layout";
import hemp from '../images/hemp.webp'

export default function HempTextiles() {
  const data = {
    title: "Hemp Textiles",
    image: hemp, // 🔄 replace with your hemp fabrics image
    description:
      "Our Hemp Textiles are a step toward sustainable fashion and eco-conscious living. Naturally strong, breathable, and biodegradable, hemp fabrics are perfect for apparel, accessories, and home applications while promoting environmental responsibility.",
    rate: "₹350 – ₹700 / meter",
    features: [
      "100% natural & eco-friendly",
      "Durable with long-lasting fibers",
      "Breathable and lightweight",
      "Biodegradable and sustainable",
      "Ideal for apparel, bags & home textiles",
    ],
  };

  return <CategoryLayout {...data} />;
}
