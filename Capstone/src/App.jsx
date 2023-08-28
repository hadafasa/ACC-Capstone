import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchProducts } from './apiServices';
import ProductDetail from './components/ProductDetails';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    loadProducts();
  }, []);

  return (
<Router>
    <div className="App">
        <Routes>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/" element={
              <>
                  <h1>Products</h1>
                  <ul>
                      {products.map(product => (
                          <li key={product.id}>
                              <h2>{product.title}</h2>
                              <p>{product.description}</p>
                              <p>Price: ${product.price}</p>
                              <img src={product.image} alt={product.title} width="100" />
                          </li>
                      ))}
                  </ul>
              </>
            } />
        </Routes>
    </div>
</Router>
  );
}

export default App
