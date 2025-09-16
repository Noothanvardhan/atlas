import React from "react";
import CategoryLayout from "../components/Layout";
import accessories from '../images/accessories.jpg'

export default function Accessories() {
  const data = {
    title: "Accessories",
    image: accessories, // 🔄 replace with your accessories image
    description:
      "Our Accessories collection adds the finishing touch to fashion and lifestyle. From scarves and stoles to bags and embellishments, we craft accessories that combine style, durability, and cultural heritage.",
    rate: "₹150 – ₹1500 / piece",
    features: [
      "Scarves, stoles & shawls",
      "Bags & pouches in premium fabrics",
      "Textile-based embellishments",
      "Trendy, traditional & modern designs",
      "Durable and fashion-forward",
    ],
  };

  return <CategoryLayout {...data} />;
}
