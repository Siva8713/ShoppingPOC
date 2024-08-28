// src/components/MainContent.js
import React, { useState } from "react";
import styles from "./MainContent.module.css";
import MenCatergory from "./categories/men/MenCatergory";
import WomenCatergory from "./categories/women/WomenCatergory";
import KidsCatergory from "./categories/kids/KidsCatergory";
import FootwearCatergory from "./categories/footwear/FootwearCatergory";
import WinterCatergory from "./categories/winter wear/WinterCatergory";
import AccessoriesCatergory from "./categories/accessories/AccessoriesCatergory";
import CategoriesCard from "../Cards/CategoriesCard";

const MainContent = ({ user }) => {
  const clothingData = [
    {
      id: "1",
      name: "Men",
      image:
        "https://img.freepik.com/premium-photo/strong-confident-young-hipster-looking-away-adjusting-his-jacket-while-standing-against-grey-background_425904-11115.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
      component: <MenCatergory onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "2",
      name: "Women",
      image:
        "https://img.freepik.com/free-photo/cuban-elegance-teenager-olive-fashion_1328-8.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
      component: <WomenCatergory onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "3",
      name: "Kids",
      image:
        "https://img.freepik.com/free-photo/children-playing-grass_1098-504.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
      component: <KidsCatergory onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "4",
      name: "Footwear",
      image:
        "https://img.freepik.com/premium-photo/women-legs-stylish-casual-shoes-modern-sneakers-with-white-laces-close-up-fashionable-teen-girl-clothes-style-photo_526934-706.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
      component: <FootwearCatergory onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "5",
      name: "Winter Collection",
      image:
        "https://img.freepik.com/premium-photo/top-view-set-warm-clothing_111863-323.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
      component: <WinterCatergory onBack={() => setSelectedCategory(null)} />,
    },
    {
      id: "6",
      name: "Accessories",
      image:
        "https://img.freepik.com/free-photo/view-women-bag-stuff-wooden-background_93675-134112.jpg?ga=GA1.1.1135502366.1724772254&semt=ais_hybrid",
      component: (
        <AccessoriesCatergory onBack={() => setSelectedCategory(null)} />
      ),
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
          <h1>Welcome {user.name} , what are you looking for? </h1>
          <div className={styles.product_list}>
            {clothingData.map((item) => (
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
};

export default MainContent;
