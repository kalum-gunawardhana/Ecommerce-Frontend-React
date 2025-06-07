import React, { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../services/productService";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    getAllProducts().then(res => setProducts(res.data));
  };

  const handleDelete = (id) => {
    deleteProduct(id).then(() => fetchData());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <Link to="/add">Add New Product</Link>
      {products.map(p => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>${p.price}</p>
          <Link to={`/view/${p.id}`}>View</Link> | 
          <Link to={`/edit/${p.id}`}>Edit</Link> | 
          <button onClick={() => handleDelete(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;