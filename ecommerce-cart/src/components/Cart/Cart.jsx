import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../features/cart/cartSlice';
import { 
  selectCartItems, 
  selectTotalQuantity, 
  selectTotalAmount, 
  selectIsCartVisible 
} from '../../features/cart/cartSelectors';
import { motion, AnimatePresence } from 'framer-motion';
import './Cart.css';

const Cart = () => {
  const items = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalAmount = useSelector(selectTotalAmount);
  const isCartVisible = useSelector(selectIsCartVisible);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <AnimatePresence>
      {isCartVisible && (
        <>
          <motion.div 
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCartHandler}
          />
          <motion.div 
            className="cart"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="cart-header">
              <h2>Your Shopping Cart</h2>
              <button onClick={toggleCartHandler} className="close-button">
                &times;
              </button>
            </div>
            
            {totalQuantity === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
              </div>
            ) : (
              <>
                <ul className="cart-items">
                  {items.map(item => (
                    <motion.li 
                      key={item.id}
                      className="cart-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <div className="item-price">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </div>
                        <div className="item-total">
                          ${item.totalPrice.toFixed(2)}
                        </div>
                      </div>
                      <button 
                        onClick={() => removeItemHandler(item.id)}
                        className="remove-button"
                      >
                        &minus;
                      </button>
                    </motion.li>
                  ))}
                </ul>
                <div className="cart-total">
                  <span>Total:</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <motion.button 
                  className="checkout-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Proceed to Checkout
                </motion.button>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;