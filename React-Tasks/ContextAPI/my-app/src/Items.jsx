import React, { useContext } from "react";
import { cartContext } from "./Card";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(cartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="image/"></img>
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled></input>
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>
        <div className="price">
          <h3>{price}</h3>
        </div>
        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}
          ></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;

// <div className="items-info">
// <div className="product-img">
// <img
//   src="https://i.dummyjson.com/data/products/2/1.jpg"
//   alt="image/"
// ></img>
// </div>
// <div className="tittle">
// <h2>iPhone X</h2>
// <p>
//   SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED
//   technology A12 Bionic chip with ...
// </p>
// </div>
// <div className="add-minus-quantity">
// <i className="fas fa-minus minus"></i>
// <input type="text" placeholder="1"></input>
// <i className="fas fa-plus add"></i>
// </div>
// <div className="price">
// <h3>899rs</h3>
// </div>
// <div className="remove-item">
// <i className="fas fa-trash-alt remove"></i>
// </div>
// </div>

// <hr />
// <div className="items-info">
// <div className="product-img">
// <img
//   src="https://i.dummyjson.com/data/products/3/1.jpg"
//   alt="image/"
// ></img>
// </div>
// <div className="tittle">
// <h2>Samsung Universe 9</h2>
// <p>Samsung's new variant which goes beyond Galaxy to the Universe</p>
// </div>
// <div className="add-minus-quantity">
// <i className="fas fa-minus minus"></i>
// <input type="text" placeholder="1"></input>
// <i className="fas fa-plus add"></i>
// </div>
// <div className="price">
// <h3>1249rs</h3>
// </div>
// <div className="remove-item">
// <i className="fas fa-trash-alt remove"></i>
// </div>
// </div>

// <hr />
// <div className="items-info">
// <div className="product-img">
// <img
//   src="https://i.dummyjson.com/data/products/4/1.jpg"
//   alt="image/"
// ></img>
// </div>
// <div className="tittle">
// <h2>OPPOF19</h2>
// <p>OPPO F19 is officially announced on April 2021.</p>
// </div>
// <div className="add-minus-quantity">
// <i className="fas fa-minus minus"></i>
// <input type="text" placeholder="1"></input>
// <i className="fas fa-plus add"></i>
// </div>
// <div className="price">
// <h3>280rs</h3>
// </div>
// <div className="remove-item">
// <i className="fas fa-trash-alt remove"></i>
// </div>
// </div>
// <hr />
