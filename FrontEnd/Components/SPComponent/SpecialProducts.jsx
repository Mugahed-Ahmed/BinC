import ProductCard from "./ProductCard.jsx";
const SpecialProducts = () => {
    const products = [
      { image: "src/assets/1.jpeg", title: "Laptop HP v6", rating: 4.6, price: 900, sold: 200 },
      { image: "src/assets/1.jpeg", title: "Laptop HP v6", rating: 4.6, price: 900, sold: 200 },
      { image: "src/assets/1.jpeg", title: "Laptop HP v6", rating: 4.6, price: 900, sold: 200 },
      { image: "src/assets/1.jpeg", title: "Laptop HP v6", rating: 4.6, price: 900, sold: 200 },


    ];
  
    return (
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Today&#39;s Specials</h2>
        <div className="flex gap-6 overflow-x-scroll p-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>
    );
  };

  export default SpecialProducts;