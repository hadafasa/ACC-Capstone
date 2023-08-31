// import ProductDetail from '../../components/ProductDetails';
// import "./shop.css";
// import { BrowserRouter as Route, Routes } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { fetchProducts } from '../../components/apiServices';

// export const Shop = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//       const loadProducts = async () => {
//         const fetchedProducts = await fetchProducts();
//         setProducts(fetchedProducts);
//       };
  
//       loadProducts();
//     }, []);

//   return (
//     <div className="shop">
//       <div className="shopTitle">
//         <h1>Product List</h1>
//       </div>

//       <div className="products">
//         <Routes>
//             <Route path="/product/:id" element={<ProductDetail />} />
//             <Route path="/" element={
//               <>
//                   <h1>Products</h1>
//                   <ul>
//                       {products.map(product => (
//                           <li key={product.id}>
//                               <h2>{product.title}</h2>
//                               <p>{product.description}</p>
//                               <p>Price: ${product.price}</p>
//                               <img src={product.image} alt={product.title} width="100" />
//                           </li>
//                       ))}
//                   </ul>
//               </>
//             } />
//         </Routes>
//         {ProductDetail.map((product) => (
//           <ProductDetail key={product.id} data={product} />
//         ))}
//       </div>
//     </div>
//   );
// };