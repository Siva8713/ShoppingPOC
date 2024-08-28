// src/components/MainContent.js
import React from "react";
import styles from "./MainContent.module.css";
const MainContent = ({ user }) => {
  const clothingData = [
    {
      id: "1",
      name: "Men",
      image:
        "https://img.freepik.com/premium-photo/strong-confident-young-hipster-looking-away-adjusting-his-jacket-while-standing-against-grey-background_425904-11115.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
    },
    {
      id: "2",
      name: "Women",
      image:
        "https://img.freepik.com/free-photo/cuban-elegance-teenager-olive-fashion_1328-8.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
    },
    {
      id: "3",
      name: "Kids",
      image:
        "https://img.freepik.com/free-photo/children-playing-grass_1098-504.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
    },
    {
      id: "4",
      name: "footwear",
      image:
        "https://img.freepik.com/premium-photo/women-legs-stylish-casual-shoes-modern-sneakers-with-white-laces-close-up-fashionable-teen-girl-clothes-style-photo_526934-706.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
    },
    {
      id: "5",
      name: "Winter Collection",
      image:
        "https://img.freepik.com/premium-photo/top-view-set-warm-clothing_111863-323.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
    },
    {
      id: "6",
      name: "Accessories",
      image:
        "https://img.freepik.com/free-photo/view-women-bag-stuff-wooden-background_93675-134112.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
    },
  ];

  return (
    <main className={styles.mainContent}>
      <h1>Welcome {user.name} , what are you looking for? </h1>
      <div className={styles.product_list} onClick={}>
        {clothingData.map((item) => (
          <div key={item.id} className={styles.product_item}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
