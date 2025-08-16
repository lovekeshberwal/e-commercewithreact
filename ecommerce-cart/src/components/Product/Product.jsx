import { useDispatch } from 'react-redux';
import { cartActions } from '../../features/cart/cartSlice';
import { motion } from 'framer-motion';
import './Product.css';

const Product = ({ id, name, price, description, image }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      name,
      price,
      image,
    }));
  };

  return (
    <motion.div 
      className="product-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <div className="product-footer">
          <span className="price">${price.toFixed(2)}</span>
          <motion.button 
            className="add-to-cart"
            onClick={addToCartHandler}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;