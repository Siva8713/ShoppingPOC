import { useState } from "react";
import CategoriesCard from "../../../Cards/CategoriesCard";
import styles from "../../MainContent.module.css";
import MenShirts from "./shirts";

export default function MenCatergory({ onBack }) {
  const menCatergories = [
    {
      id: "1",
      name: "Shirts",
      image:
        "https://img.freepik.com/premium-photo/strong-confident-young-hipster-looking-away-adjusting-his-jacket-while-standing-against-grey-background_425904-11115.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
      component: <MenShirts onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "2",
      name: "Jeans",
      image:
        "https://img.freepik.com/premium-photo/strong-confident-young-hipster-looking-away-adjusting-his-jacket-while-standing-against-grey-background_425904-11115.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
    },
    {
      id: "3",
      name: "T-Shirts",
      image:
        "https://img.freepik.com/premium-photo/strong-confident-young-hipster-looking-away-adjusting-his-jacket-while-standing-against-grey-background_425904-11115.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
    },
    {
      id: "4",
      name: "Tracks",
      image:
        "https://img.freepik.com/premium-photo/strong-confident-young-hipster-looking-away-adjusting-his-jacket-while-standing-against-grey-background_425904-11115.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main className={styles.mainContent}>
      {selectedCategory ? (
        selectedCategory
      ) : (
        <>
          <button className={styles.backButton} onClick={onBack}>
            Back
          </button>
          <div className={styles.product_list}>
            {menCatergories.map((item) => (
              <CategoriesCard
                key={item.id}
                name={item.name}
                image={item.image}
                onClick={() => handleCategoryClick(item.component)}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
