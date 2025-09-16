import React from "react";
import CategoryLayout from "../components/Layout";
import tech from '../images/technical.jpg'

export default function TechnicalTextiles() {
  const data = {
    title: "Technical Textiles",
    image: tech, // 🔄 replace with your technical textiles image
    description:
      "Our Technical Textiles are engineered for performance, safety, and innovation. From industrial applications to healthcare and automotive, we deliver fabrics that go beyond aesthetics to provide strength, durability, and functionality.",
    rate: "₹600 – ₹1500 / meter",
    features: [
      "High-performance functional fabrics",
      "Applications in healthcare, defense & automotive",
      "Fire-retardant, water-resistant & UV-protective",
      "Durable and innovative materials",
      "Global standards in safety & quality",
    ],
  };

  return <CategoryLayout {...data} />;
}
