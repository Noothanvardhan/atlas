import React from "react";
import CategoryLayout from "../components/Layout";
import ecoblend from '../images/ecoblend.png'; // replace with your actual image path

export default function Ecoblend() {
  const data = {
    title: "EcoBlend Fabrics",
    image: ecoblend,
    description:
      "Our EcoBlend fabrics combine sustainability and performance, crafted from recycled and natural fibers. Soft, durable, and environmentally friendly, ideal for fashion and home textiles.",
    rate: "$32 per meter",
    features: [
      "Made from recycled and natural fibers",
      "Soft and durable",
      "Environmentally friendly production",
      "Available in multiple textures and colors",
      "Suitable for apparel and home textiles",
    ],
  };

  return <CategoryLayout {...data} />;
}
