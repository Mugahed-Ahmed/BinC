
function Footer() {
    return(
      
      <footer className="bg-blue-900 text-white py-8 px-8 mt-10">
      <div className="grid grid-cols-5 gap-6">
        <div>
          <h3 className="text-lg font-semibold">Best on Click</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mt-2 rounded text-black"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <p>111 Bijoy sarani, Dhaka</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Download App</h3>
          <img src="/qrcode.png" alt="QR Code" className="h-16 w-16" />
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-400 pt-4">
        &copy; 2024 Rimel. All rights reserved.
      </div>
    </footer>
  
    ); 
    
}

export default Footer