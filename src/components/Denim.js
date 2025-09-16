import React from "react";
import CategoryLayout from "../components/Layout";
import denim from '../images/denim.jpg'

export default function Denim() {
  const data = {
    title: "Denim Fabrics",
    image: denim, // 🔄 replace with your denim fabric image
    description:
      "Our denim fabrics combine durability with style, making them the foundation of timeless fashion. Designed for jeans, jackets, and everyday wear, our denims are available in a variety of washes, weights, and finishes to suit every trend.",
    rate: "₹350 – ₹500 / meter",
    features: [
      "Premium quality denim",
      "Durable and long-lasting weave",
      "Available in light, medium & heavy weights",
      "Variety of washes and textures",
      "Perfect for jeans, jackets & casual wear",
    ],
  };

  return <CategoryLayout {...data} />;
}
