// src/components/Sidebar.js
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState({
    men: false,
    women: false,
    kids: false,
    winter: false,
    accessories: false,
  });

  const toggleDropdown = (category) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <aside style={styles.sidebar}>
      <h2>Categories</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <button
            onClick={() => toggleDropdown("men")}
            style={styles.dropdownButton}
          >
            Men
          </button>
          {isOpen.men && (
            <ul style={styles.subList}>
              <li>Shirts</li>
              <li>Pants</li>
              <li>Shoes</li>
            </ul>
          )}
        </li>

        <li style={styles.listItem}>
          <button
            onClick={() => toggleDropdown("women")}
            style={styles.dropdownButton}
          >
            Women
          </button>
          {isOpen.women && (
            <ul style={styles.subList}>
              <li>Dresses</li>
              <li>Tops</li>
              <li>Handbags</li>
            </ul>
          )}
        </li>

        <li style={styles.listItem}>
          <button
            onClick={() => toggleDropdown("kids")}
            style={styles.dropdownButton}
          >
            Kids
          </button>
          {isOpen.kids && (
            <ul style={styles.subList}>
              <li>T-Shirts</li>
              <li>Shorts</li>
              <li>Shoes</li>
            </ul>
          )}
        </li>

        <li style={styles.listItem}>
          <button
            onClick={() => toggleDropdown("winter")}
            style={styles.dropdownButton}
          >
            Winter Collection
          </button>
          {isOpen.winter && (
            <ul style={styles.subList}>
              <li>Jackets</li>
              <li>Sweaters</li>
              <li>Scarves</li>
            </ul>
          )}
        </li>

        <li style={styles.listItem}>
          <button
            onClick={() => toggleDropdown("accessories")}
            style={styles.dropdownButton}
          >
            Accessories
          </button>
          {isOpen.accessories && (
            <ul style={styles.subList}>
              <li>Watches</li>
              <li>Bags</li>
              <li>Jewelry</li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: {
    width: "200px",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRight: "1px solid #ddd",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "10px",
  },
  dropdownButton: {
    background: "none",
    border: "none",
    padding: "10px 0",
    width: "100%",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  subList: {
    listStyleType: "none",
    paddingLeft: "20px",
    marginTop: "5px",
  },
};

export default Sidebar;
