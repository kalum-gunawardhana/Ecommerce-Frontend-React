import React, { useState, useEffect } from "react";
import { createProduct, getProduct, updateProduct } from "../services/productService";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
  const [product, setProduct] = useState({ title: "", price: "", description: "", category: "", image: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getProduct(id).then(res => setProduct(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (id) {
      updateProduct(id, product).then(() => navigate("/"));
    } else {
      createProduct(product).then(() => navigate("/"));
    }
  };

  return (
    <div>
      <h2>{id ? "Edit" : "Add"} Product</h2>
      <input name="title" placeholder="Title" value={product.title} onChange={handleChange} />
      <input name="price" placeholder="Price" type="number" value={product.price} onChange={handleChange} />
      <input name="description" placeholder="Description" value={product.description} onChange={handleChange} />
      <input name="category" placeholder="Category" value={product.category} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={product.image} onChange={handleChange} />
      <button onClick={handleSubmit}>{id ? "Update" : "Add"}</button>
    </div>
  );
};

export default ProductForm;