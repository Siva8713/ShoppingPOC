// src/pages/HomePage.js
import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import MainContent from "../Components/MainContent";

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <Header user={user} />
      <div style={styles.content}>
        <Sidebar />
        <MainContent user={user} />
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
