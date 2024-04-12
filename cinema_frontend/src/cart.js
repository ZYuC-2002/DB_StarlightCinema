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
  const [orderData, setOrderData] = useState([]);
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
  const payFromCart = (orderId) => {
    // Find the selected order
    const selectedOrder = orderData.find((order) => order.order_id === orderId);

    // Check if the selected order exists
    if (selectedOrder && selectedOrder.order_paid === 0) {
      // Save the details of the selected order into cookies
      cookies.set('selectedOrder', JSON.stringify(selectedOrder), { path: '/' });
      console.log(cookies.get('selectedOrder'));
      // Navigate to the PaymentPage
      navigate('/PaymentPageAfter');
    } else {
      console.error('Selected order not found.');
    }
  };

  const calculateTotal = () => {
    if (Array.isArray(orderData) && orderData.length > 0) {
      return orderData.reduce((total, order) => total + order.Total_price, 0);
    }
    return 0;
  };
  useEffect(()=>{
    const fetchData =async()=>{
    try {
      // Make a POST request
      const response = await fetch("http://192.168.10.101:5000/list_order_items", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: cookies.get('userloginemail')
        }),
      });
  
      const data = await response.json();
  
      // Check if data is successfully fetched
      if (response.ok) {
        console.log(data);
        setOrderData(data);
      } else {
        console.error('Error fetching data:', data);
      }
    } catch (error) {
      // Handle general error, if needed
      console.error('Error during fetch:', error);
    }
  }
  fetchData();
  },[])
  
  return (
    <div className="shopping-cart">
      <Navbar setSearch={setSearch} />
      <div className="blank" />
      <div className='cart-table'>
      {Array.isArray(orderData) && orderData.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Cinema</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order,i) => (
                <tr key={order.order_id}>
                  <td>{order.cinema_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Movie</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order,i) => (
                <tr key={order.order_id}>
                  <td>{order.movie_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Version</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order,i) => (
                <tr key={order.order_id}>
                  <td>{order.auditorium_play_version}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Auditorium</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order,i) => (
                <tr key={order.order_id}>
                  <td>{order.auditorium_name}</td>
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
              {orderData.map((order,i) => (
                <tr key={order.order_id}>
                  <td>${order.Total_price}</td>
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
              {orderData.map((order,i) => (
                <tr key={order.order_id}>
                  <td>{order.order_seats.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <table>
            <thead>
              <tr>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order,i) => (
                <tr key={order.order_id}>
                  <td>
                    {order.order_paid === 0 && (
                        <button className='button-remove' onClick={() => removeFromCart(order.order_id)}>Remove</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
          <table>
            <thead>
              <tr>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order,i) => (
                <tr key={order.order_id}>
                  <td>
                    {order.order_paid === 0 && (
                      <button className='button-remove' onClick={() => payFromCart(order.order_id)}>Edit</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ):(
        <p>NO Order</p>
      )}
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