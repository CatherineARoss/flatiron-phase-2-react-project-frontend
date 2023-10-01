import React from "react";

const CustomOrderDisplay = ({ title, description, materials, }) => {
    return (
      <div className="card-content">
        <h4>{title}</h4>
        <p>Description: {description}</p>
        <p>Materials: {materials}</p>
        <p>Price: $10 + item price</p>
      </div>
    );
  };
  
  export default CustomOrderDisplay;