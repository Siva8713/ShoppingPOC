// src/pages/HomePage.js
import React, { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import MainContent from "../Components/MainContent";

const HomePage = ({ user }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div style={styles.container}>
      <Header user={user} setSelectedCategory={setSelectedCategory} />
      <div style={styles.content}>
        <Sidebar />
        <MainContent
          user={user}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  content: {
    display: "flex",
    flex: 1,
  },
};

export default HomePage;
