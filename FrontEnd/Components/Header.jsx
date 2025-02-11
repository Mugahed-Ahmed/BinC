// import { useSelector } from "react-redux";
export default function Header() {
    // const cartItems = useSelector((state) => state.cart.items.length);
    return(
        <header className="bg-blue-900 text-white py-4 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <h1 className="text-xl font-semibold">Best On Click</h1>
        </div>
        <nav className="flex space-x-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/shop" className="hover:underline">Shop</a>
          <a href="/about" className="hover:underline">About</a>
        </nav>
        <div className="flex items-center space-x-6">
          <a href="/account" className="flex items-center space-x-2">
            <span className="material-icons">account_circle</span>
            <span>Account</span>
          </a>
          <a href="/cart" className="relative flex items-center space-x-2">
            <span className="material-icons">shopping_cart</span>
            {/* {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                {cartItems}
              </span>
            )} */}
            <span>Cart</span>
          </a>
        </div>
      </header>
    );  
}

