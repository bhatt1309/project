import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'active' : ''}`}>
      <button className="sidebar-close" onClick={onClose}>
        ×
      </button>
      <ul className="sidebar-menu">
        <li>
          <Link to="/product-details/1" onClick={onClose}>Product Details</Link>
        </li>
        <li>
          <Link to="/compare-products" onClick={onClose}>Compare Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar; 