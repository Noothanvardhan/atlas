import React from "react";
import CategoryLayout from "../components/Layout";
import aerowave from '../images/polyester.jpg'; // replace with your actual image path

export default function AerowavePolyester() {
  const data = {
    title: "Aerowave Polyester Fabrics",
    image: aerowave,
    description:
      "Explore our high-performance Aerowave polyester fabrics, engineered for durability, breathability, and moisture management. Perfect for activewear, sportswear, and technical apparel.",
    rate: "$28 per meter",
    features: [
      "Lightweight and durable",
      "Moisture-wicking technology",
      "Breathable and quick-dry",
      "Eco-friendly manufacturing",
      "Available in multiple patterns and colors",
    ],
  };

  return <CategoryLayout {...data} />;
}
