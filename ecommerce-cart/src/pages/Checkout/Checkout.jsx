import { useSelector } from 'react-redux';
import { selectCartItems, selectTotalAmount } from '../../features/cart/cartSelectors';
import { motion } from 'framer-motion';
import './Checkout.css';

const Checkout = () => {
  const items = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <motion.div 
      className="checkout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Checkout</h1>
      
      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="checkout-items">
            {items.map(item => (
              <div key={item.id} className="checkout-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Total: ${item.totalPrice.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="checkout-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>$5.99</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${(totalAmount + 5.99).toFixed(2)}</span>
            </div>
            
            <motion.button 
              className="place-order-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Place Order
            </motion.button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Checkout;