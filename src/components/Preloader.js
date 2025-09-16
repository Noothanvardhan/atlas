import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Fake delay for smoother effect
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return (
      <div className="preloader">
      <div className="ball">
        <span></span>
        <span></span>
      </div>
    </div>
    );
  }

  return children;
}



