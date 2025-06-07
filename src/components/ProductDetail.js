import React, { useEffect, useState } from "react";
import { getProduct } from "../services/productService";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then(res => setProduct(res.data));
  }, [id]);

  return product ? (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="150" />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
    </div>
  ) : <p>Loading...</p>;
};

export default ProductDetail;