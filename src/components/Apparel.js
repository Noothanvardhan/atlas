import React from "react";
import CategoryLayout from "../components/Layout";
import apparel from '../images/apparel.avif'

export default function ApparelFabrics() {
  const data = {
    title: "Apparel Fabrics",
    image: apparel, // 🔄 replace with your apparel fabrics image
    description:
      "Our Apparel Fabrics are designed to inspire fashion and comfort. From everyday wear to designer collections, we provide high-quality fabrics that balance style, durability, and versatility across global trends.",
    rate: "₹250 – ₹800 / meter",
    features: [
      "Wide variety of weaves & finishes",
      "Lightweight to heavy fabric options",
      "Perfect for shirts, dresses, and suits",
      "Trendy colors & seasonal collections",
      "Durable and skin-friendly materials",
    ],
  };

  return <CategoryLayout {...data} />;
}
