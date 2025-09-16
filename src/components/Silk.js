import React from "react";
import CategoryLayout from "../components/Layout";
import silk from '../images/silk.jpg'

export default function SilkAndSatin() {
  const data = {
    title: "Silk & Satin Fabrics",
    image: silk,
    description:
      "Our Silk & Satin collection blends timeless elegance with modern craftsmanship. Known for their luxurious texture, smooth finish, and natural sheen, these fabrics are ideal for fashion, bridal wear, and high-end décor.",
    rate: "₹400 – ₹550 / meter",
    features: [
      "Premium silk-satin blend",
      "Soft drape with glossy finish",
      "Durable yet lightweight",
      "Wide range of shades & patterns",
      "Custom weaving & bulk orders available",
    ],
  };

  return <CategoryLayout {...data} />;
}
