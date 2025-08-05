import axios from "axios";
import React, { useEffect, useState } from "react";
import "/products.css";

function Products() {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  });

  return (
    <div>
      {products.map((product) => (
        
      ))}
    </div>
  );
}

export default Products;
