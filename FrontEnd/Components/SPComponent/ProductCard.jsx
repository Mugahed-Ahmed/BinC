
// import { useSelector } from "react-redux";
import PropTypes from "prop-types"; // 📌 إضافة PropTypes للتحقق من البيانات

const ProductCard = ({ image, title, rating, price, sold }) => {
    return (
        <div>
            <div className="bg-white rounded-2xl shadow-lg m-2.5 p-4 w-70">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
        <h3 className="text-lg font-semibold mt-3">{title}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500">⭐ {rating}</span>
          <span className="text-gray-600">💲{price}</span>
          <span className="text-gray-600">🛍 {sold}</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-3">Details</button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg m-2.5 p-4   w-70">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
        <h3 className="text-lg font-semibold mt-3">{title}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500">⭐ {rating}</span>
          <span className="text-gray-600">💲{price}</span>
          <span className="text-gray-600">🛍 {sold}</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-3">Details</button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg m-2.5 p-4 w-70">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
        <h3 className="text-lg font-semibold mt-3">{title}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500">⭐ {rating}</span>
          <span className="text-gray-600">💲{price}</span>
          <span className="text-gray-600">🛍 {sold}</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-3">Details</button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg m-2.5 p-4 w-70">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
        <h3 className="text-lg font-semibold mt-3">{title}</h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-500">⭐ {rating}</span>
          <span className="text-gray-600">💲{price}</span>
          <span className="text-gray-600">🛍 {sold}</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full mt-3">Details</button>
      </div>
        </div>
      
    );
  };
  
// 📌 تحديد أنواع البيانات المطلوبة لـ props
ProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    sold: PropTypes.number.isRequired,
  };
  

  export default ProductCard