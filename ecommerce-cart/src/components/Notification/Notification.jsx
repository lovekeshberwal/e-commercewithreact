import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../features/cart/cartSlice';
import { selectNotification } from '../../features/cart/cartSelectors';
import { motion, AnimatePresence } from 'framer-motion';
import './Notification.css';

const Notification = () => {
  const notification = useSelector(selectNotification);
  const dispatch = useDispatch();

  const clearNotification = () => {
    dispatch(cartActions.clearNotification());
  };

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          className={`notification ${notification.status}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <div className="notification-header">
            <h3>{notification.title}</h3>
            <button 
              className="notification-close"
              onClick={clearNotification}
              aria-label="Close notification"
            >
              &times;
            </button>
          </div>
          <p>{notification.message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;