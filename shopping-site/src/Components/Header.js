// src/components/Header.js
import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = ({ user }) => {
  const [showUserInfo, setShowUserInfo] = useState(false);

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  return (
    <header className={styles.header}>
      <div>
        <h1>Infy Shopping POC </h1>
        <p>Find Your Fashion!</p>
      </div>
      <div className={styles.navButtons}>
        <button className={styles.button}>Home</button>
        <button className={styles.button}>Cart</button>
      </div>
      <div className={styles.userSection}>
        <span className={styles.userName} onClick={toggleUserInfo}>
          {/* {user.name} */}Profile
        </span>
        {showUserInfo && (
          <div className={styles.userInfo}>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
