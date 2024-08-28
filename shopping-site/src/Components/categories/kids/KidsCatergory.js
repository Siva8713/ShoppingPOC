import { useState } from "react";
import CategoriesCard from "../../../Cards/CategoriesCard";
import styles from "../../MainContent.module.css";
export default function KidsCatergory({ onBack }) {
  const KidsCatergories = [
    {
      id: "1",
      name: "Boys",
      image:
        "https://img.freepik.com/premium-photo/strong-confident-young-hipster-looking-away-adjusting-his-jacket-while-standing-against-grey-background_425904-11115.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
    },
    {
      id: "2",
      name: "Girls",
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
            {KidsCatergories.map((item) => (
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
