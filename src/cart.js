import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './upperlistuser';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const cookies = new Cookies();
  const [cart, setCart] = useState([]);
  const [content, setContent] = useState(cookies.get('cart'));
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    cookies.set('search', search, { path: '/' });
    console.log(cookies);
  }, [search]);

  useEffect(() => {
    const productsData = content || [];
    setCart(productsData);
  }, [content]);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    setContent(updatedCart);
  };

  const payFromCart = (productId) => {
    navigate('/PaymentPage');
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="shopping-cart">
      <Navbar setSearch={setSearch} />
      <div className="blank" />
      <div className='cart-table'>
        <table>
          <thead>
            <tr>
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item,i) => (
              <tr key={item.id}>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item,i) => (
              <tr key={item.id}>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item,i) => (
              <tr key={item.id}>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item,i) => (
              <tr key={item.id}>
                <td>
                  <button className='button-remove' onClick={() => removeFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Choose</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item,i) => (
              <tr key={item.id}>
                <td>
                  <button className='button-remove' onClick={() => payFromCart(item.id)}>Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
};

function Cart() {
  return (
    <div className="App">
      <main>
        <ShoppingCart />
      </main>
    </div>
  );
}
export default Cart;