import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../features/cart/cartSlice';
import { selectTotalQuantity, selectIsCartVisible } from '../../features/cart/cartSelectors';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const totalQuantity = useSelector(selectTotalQuantity);
  const isCartVisible = useSelector(selectIsCartVisible);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <div className="navbar-container">
        <h1 className="logo">ShopEase</h1>
        <motion.button 
          className="cart-button"
          onClick={toggleCartHandler}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Cart</span>
          <span className="badge">{totalQuantity}</span>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;