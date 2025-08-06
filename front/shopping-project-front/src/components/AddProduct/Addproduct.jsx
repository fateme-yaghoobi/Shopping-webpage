import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css"

function AddProduct() {
  const [productName, setproductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <form
        onSubmit={(event) => {
            event.preventDefault();
            axios
                .post("http://localhost:3000/", {
                    name: productName,
                    price,
                    description,
                })
                .then((res) => {
                    alert("کالای موردنظر با موفقیت به لیست محصولات افزوده شد.");
                    console.log(res.data); // if successful
                })
                .catch((err) => {
                    if (err.response && err.response.data && err.response.data.error) {
                        alert(err.response.data.error); // Display server error message
                    } else {
                        alert("An unexpected error occurred."); // General error message
                    }
                    console.error(err); // Log the error for debugging
                });
        }}
      >

        <div className="container">
          <label htmlFor="productName">
            نام محصول
          </label>
          <input
            type="text"
            id="productName"
            required
            onChange={(event) => {
              setproductName(event.target.value);
            }}
          />
        </div>

        <div className="container">
          <label htmlFor="price">
            قیمت محصول
          </label>
          <input
            type="number"
            id="price"
            required
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>

        <div className="container">
          <label htmlFor="description" id="textArea">
           توضیحات محصول
          </label>
          <textarea
            id="description"
            required
            rows={5}
            cols={200}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>

        <div>
          <input type="submit" id="submit" value={"اضافه کردن محصول"}/>
        </div>
      </form>
    </>
  );
}

export default AddProduct;
