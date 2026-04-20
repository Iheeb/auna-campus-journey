import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./pages.css";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="notfound">
      <div className="notfound-inner">
        <h1 className="notfound-code">404</h1>
        <p className="notfound-msg">Oops! Page not found</p>
        <a href="/" className="notfound-link">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
