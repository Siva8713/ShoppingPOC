// src/components/MenShirts.js
import React, { useContext } from "react";
import styles from "./dresses.module.css";
import { CartContext } from "../../../CartContext";

const Shirts = ({ onBack }) => {
  const { addToCart } = useContext(CartContext);
  const shirtsData = [
    {
      id: 1,
      description: "Classic White Cotton Shirt",
      price: 799,
      image_url:
        "https://img.freepik.com/premium-photo/strong-confident-young-hipster-looking-away-adjusting-his-jacket-while-standing-against-grey-background_425904-11115.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
    },
    {
      id: 2,
      description: "Blue Striped Formal Shirt",
      price: 999,
      image_url:
        "https://img.freepik.com/premium-photo/strong-confident-young-hipster-looking-away-adjusting-his-jacket-while-standing-against-grey-background_425904-11115.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
    },
    {
      id: 3,
      description: "Slim Fit Black Dress Shirt",
      price: 1299,
      image_url:
        "https://img.freepik.com/premium-photo/strong-confident-young-hipster-looking-away-adjusting-his-jacket-while-standing-against-grey-background_425904-11115.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
    },
    {
      id: 4,
      description: "Casual Plaid Button-Down Shirt",
      price: 899,
      image_url:
        "https://img.freepik.com/premium-photo/strong-confident-young-hipster-looking-away-adjusting-his-jacket-while-standing-against-grey-background_425904-11115.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
    },
    {
      id: 5,
      description: "Denim Chambray Shirt",
      price: 1499,
      image_url:
        "https://img.freepik.com/premium-photo/strong-confident-young-hipster-looking-away-adjusting-his-jacket-while-standing-against-grey-background_425904-11115.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
    },
  ];

  return (
    <main className={styles.mainContent}>
      <button className={styles.backButton} onClick={onBack}>
        Back
      </button>
      <h1>Men's Shirts Collection</h1>
      <div className={styles.product_list}>
        {shirtsData.map((shirt) => (
          <div key={shirt.id} className={styles.product_item}>
            <img src={shirt.image_url} alt={shirt.description} />
            <h2>{shirt.description}</h2>
            <p>Price: ₹{shirt.price}</p>
            <button onClick={() => addToCart(shirt)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Shirts;
