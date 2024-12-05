import { useParams } from "react-router-dom";
import productsData from "../data/products";
import React, { useState,createContext,useContext } from "react";
import { FaShoppingCart, FaHeart} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

    const ProductGrid = () => {
        const [quantity, setQuantity] = useState(1);
        
        const handleIncrease = () => setQuantity(quantity + 1);

          const handleDecrease = () => {
                if (quantity > 1) setQuantity(quantity - 1);
            };

        const { id } = useParams();
        const product = productsData.find((p) => p.id === parseInt(id));
      
        if (!product) {
          return <h2>Product not found</h2>;
        }
  return (
    <div style={{ padding: "20px" , display: "flex", alignItems: "center", justifyContent: "space-between"}}>
     <div>
     <img
         src={(`/src/assets/${product.pictures[0]}`)} 
         alt="NA" width="500" 
         height="500" 
      />
     </div>

     <div style={{ marginLeft: "30px" }}>
      <h1>{product.name}</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "30px", marginTop:"20px", marginBottom:"20px"}}>
            <p style={{ textDecoration: "line-through", margin: 0, fontSize: "16px", fontWeight: "bold" }}>Price: ₹{product.price}</p>
            <p style={{ margin: 0 , fontSize: "16px", fontWeight: "bold"}}> ₹{product.discount}</p>
      </div>
      <p>
            {" "}
            <span style={{ color: "green" }}>
                {"⭐".repeat(product.rating)}
            </span>
     </p>
      <p style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>Availability: {product.stock}</p>
      <p style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>Category: {product.category}</p>
      <p>{product.description}</p>
      <div style={{ display: "flex", alignItems: "center", gap: "30px", marginTop:"20px", marginBottom:"20px"}}>
      <div>
      <p style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>
        Sizes:{" "}
      </p>
        <select style={{ width: "250px", height:"38px", marginRight:"25px", borderRadius:"7px"}}>
          {["XS", "S", "M", "Y", "L", "XL"].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
     
      </div>
<div>
  <p style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>Colors:</p>
  <div style={{ display: "flex", gap: "10px" }}>
    {product.colors.map((color, index) => (
      <div
        key={index}
        style={{
          width: "45px",
          height: "45px",
          backgroundColor: color.toLowerCase(),
          border: "1px solid #000",
          borderRadius: "4px",
        }}
      ></div>
    ))}
  </div>
 </div>
</div>

<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  <p style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>Quantity:</p>
  <button
    onClick={handleDecrease}
    style={{
      padding: "5px 10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      backgroundColor: "#f5f5f5",
      borderRadius: "4px",
      cursor: "pointer",
    }}
  >
    -
  </button>
  <span
    style={{
      fontSize: "16px",
      fontWeight: "bold",
      width: "30px",
      textAlign: "center",
      border: "1px solid #ccc",
      borderRadius: "4px",
      padding: "5px",
      backgroundColor: "#fff",
    }}
  >
    {quantity}
  </span>
  <button
    onClick={handleIncrease}
    style={{
      padding: "5px 10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      backgroundColor: "#f5f5f5",
      borderRadius: "4px",
      cursor: "pointer",
    }}
  >
    +
  </button>
</div>


<div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transition: "background-color 0.3s ease",
        }}
        // onClick={addToCart}
      >
        <FaShoppingCart /> {/* Cart icon */}
        Add to Cart
      </button>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#ff6f61",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transition: "background-color 0.3s ease",
        }}
        // onClick={addToWishlist}
      >
        <FaHeart /> {/* Heart icon */}
        Add to Wishlist
      </button>
    </div>
 </div>
</div>
  );
};


export default ProductGrid;
