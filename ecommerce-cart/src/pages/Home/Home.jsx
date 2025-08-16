import { useSelector } from 'react-redux';
import { selectIsCartVisible } from '../../features/cart/cartSelectors';
import Product from '../../components/Product/Product';
import Cart from '../../components/Cart/Cart';
import './Home.css';

// Sample product data (in a real app, this would come from an API)
const products = [
  {
    id: 'p1',
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'Premium noise-canceling wireless headphones with 30-hour battery life.',
    image: '/images/headphones.png',
  },
  {
    id: 'p2',
    name: 'Smart Watch',
    price: 199.99,
    description: 'Fitness tracker with heart rate monitor and GPS.',
    image: '/images/smart-watch.png',
  },
  {
    id: 'p3',
    name: 'Bluetooth Speaker',
    price: 79.99,
    description: 'Portable waterproof speaker with 20-hour playtime.',
    image: '/images/speaker.png',
  },
  {
    id: 'p4',
    name: 'Laptop Backpack',
    price: 49.99,
    description: 'Ergonomic backpack with USB charging port and anti-theft design.',
    image: '/images/bagpack.png',
  },
  {
    id: 'p5',
    name: 'Wireless Earbuds',
    price: 129.99,
    description: 'True wireless earbuds with active noise cancellation.',
    image: '/images/earbuds.png',
  },
  {
    id: 'p6',
    name: 'Portable Charger',
    price: 29.99,
    description: '10000mAh power bank with fast charging technology.',
    image: '/images/charger.png',
  },
  {
    id: 'p7',
    name: '4K Action Camera',
    price: 249.99,
    description: 'Waterproof action camera with 4K video and image stabilization.',
    image: '/images/camera.png',
  },
  {
    id: 'p8',
    name: 'Mechanical Keyboard',
    price: 89.99,
    description: 'RGB backlit mechanical keyboard with customizable keys.',
    image: '/images/keyboard.png',
  },
];

const Home = () => {
  const isCartVisible = useSelector(selectIsCartVisible);

  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to ShopEase</h1>
        <p>Discover amazing products at unbeatable prices</p>
      </div>
      
      <div className="products-container">
        {products.map(product => (
          <Product 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
      
      {isCartVisible && <Cart />}
    </div>
  );
};

export default Home;