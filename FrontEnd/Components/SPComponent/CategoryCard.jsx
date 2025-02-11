// import React from "react";
import PropTypes from 'prop-types';

const CategoryCard = ({ icon, title, isActive, onClick }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-4 rounded-2xl cursor-pointer transition-colors duration-300 w-32 h-32 ${
        isActive ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
      }`}
      onClick={onClick}
    >
      <div className="text-3xl">{icon}</div>
      <span className="mt-2 text-lg font-medium">{title}</span>
    </div>
  );
};

CategoryCard.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
  };

export default CategoryCard;