import { useEffect, useState } from "react";

export default function Card({ props, size = 200, isSelected, onClick }) {
  return (
    <div className="card-wrapper">
      <img
        className="card"
        src={props.image}
        alt={props.name}
        width={size}
        onClick={onClick}
      />
    </div>
  );
}
