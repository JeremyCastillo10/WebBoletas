import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Mi Tienda de Boletas</div>
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="/" className="hover:text-gray-300">Inicio</a>
          </li>
          <li>
            <a href="/eventos" className="hover:text-gray-300">Eventos</a>
          </li>
          <li>
            <a href="/carrito" className="flex items-center hover:text-gray-300">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
              <span className="cart-item-count">{cartItems}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
