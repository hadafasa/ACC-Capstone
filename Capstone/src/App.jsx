import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchProducts } from './components/apiServices';
import ProductDetail from './components/ProductDetails';
import { Navbar } from "./components/navbar/navbar";

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
      <Navbar />
      <h1 className="shopTitle">Products</h1>
        <Routes>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/" element={
              <div className="products">
                  <div className="products">
                      {products.map(product => (
                          <div className="product" key={product.id}>
                              <h2>{product.title}</h2>
                              <p>{product.description}</p>
                              <p>Price: ${product.price}</p>
                              <img src={product.image} alt={product.title} width="100" />
                          </div>
                      ))}
                  </div>
              </div>
            } />
        </Routes>
    </div>
</Router>
  );
}

export default App