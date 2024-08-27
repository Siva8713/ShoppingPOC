// src/components/MainContent.js
import React from "react";
import styles from "./MainContent.module.css";
const MainContent = ({ user }) => {
  const clothingData = [
    {
      id: 1,
      name: "Men's T-Shirt",
      category: "Men",
      price: 19.99,
      imageUrl:
        "https://img.freepik.com/free-psd/mens-short-sleeve-t-shirt-mockups_126278-122.jpg?w=740&t=st=1724772263~exp=1724772863~hmac=ffa9e7c52732dbf3d43533cf2b4fb0ea4f1ea2c813fa73868b3f04ed063f815c",
    },
    {
      id: 2,
      name: "Women's Dress",
      category: "Women",
      price: 39.99,
      imageUrl: "https://example.com/womens-dress.jpg",
    },
    {
      id: 3,
      name: "Men's Jeans",
      category: "Men",
      price: 49.99,
      imageUrl: "https://example.com/mens-jeans.jpg",
    },
    {
      id: 4,
      name: "Women's Jacket",
      category: "Women",
      price: 79.99,
      imageUrl: "https://example.com/womens-jacket.jpg",
    },
    {
      id: 5,
      name: "Unisex Sneakers",
      category: "Unisex",
      price: 59.99,
      imageUrl: "https://example.com/unisex-sneakers.jpg",
    },
  ];

  return (
    <main className={styles.mainContent}>
      <h1>Welcome {user.name} , what are you looking for? </h1>
      <div className={styles.product_list}>
        {clothingData.map((item) => (
          <div key={item.id} className={styles.product_item}>
            <img src={item.imageUrl} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
