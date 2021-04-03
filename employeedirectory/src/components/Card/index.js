import React from "react";
import "./style.css";

function Card({ name, image, dept, email, phone }) {
  return (
    <div className="card">
      <img
        variant="top"
        className="image"
        src={image}
        alt="Employee Pic"
      />
      <h1 className="name">{name}</h1>
      <h3 className="department">{dept}</h3>
      <p className="email">{email}</p>
      <p className="phone">{phone}</p>
    </div>
  );
}

export default Card;
