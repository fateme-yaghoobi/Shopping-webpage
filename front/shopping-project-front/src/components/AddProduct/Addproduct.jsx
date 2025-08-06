import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [productName, setproductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <form
        onSubmit={(event) => {
          alert(
          "کالای موردنظر با موفقیت به لیست محصولات افزوده شد."
          );
          event.preventDefault();
          axios
            .post("http://localhost:3000/", {
              name: productName,
              price,
              description,
            })
            .then((res) => console.log(res.data)) //if successful
            .catch((err) => console.error(err)); // if failed
        }}
      >
        <>
          <label htmlFor="productName">
            نام محصول
          </label>
          <input
            type="text"
            id="productName"
            onChange={(event) => {
              setproductName(event.target.value);
            }}
          />
        </>
        <div>
          <label htmlFor="price">
            قیمت محصول
          </label>
          <input
            type="text"
            id="price"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="description">
           توضیحات محصول
          </label>
          <input
            type="text"
            id="description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <div>
          <input type="submit" value={"submit"} />
        </div>
      </form>
    </>
  );
}

export default AddProduct;
