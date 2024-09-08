import React from 'react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <Link to="/menu">Home</Link>
    </footer>
  );
};

export default Footer;