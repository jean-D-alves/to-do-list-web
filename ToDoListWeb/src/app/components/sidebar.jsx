import React from "react";
import "../css/Sidebar.css";

export default function Sidebar({ items }) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul className="sidebar-list">
        {items.map((item, index) => (
          <li key={index} className="sidebar-item">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
