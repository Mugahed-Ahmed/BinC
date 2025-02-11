import  { useState } from "react";
import CategoryCard from "./CategoryCard";
import { FiSmartphone, FiMonitor, FiHeadphones, FiGamepad, FiWatch } from "react-icons/fi";

const categories = [
  { title: "Phones", icon: <FiSmartphone /> },
  { title: "Computers", icon: <FiMonitor /> },
  { title: "HeadPhones", icon: <FiHeadphones /> },
  { title: "Gaming", icon: <FiGamepad /> },
  { title: "SmartWatch", icon: <FiWatch /> },
];

const CategoryList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex gap-4 p-6">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          icon={category.icon}
          title={category.title}
          isActive={index === activeIndex}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default CategoryList;
