import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ 
      textAlign: "center", 
      marginTop: "50px", 
      padding: "20px" 
    }}>
      <h1 style={{ fontSize: "2rem", color: "#ff4d4d" }}>404 - Page Not Found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link 
        to="/" 
        style={{ 
          display: "inline-block",
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px"
        }}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
