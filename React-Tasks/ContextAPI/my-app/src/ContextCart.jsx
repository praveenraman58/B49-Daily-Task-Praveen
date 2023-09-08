import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { cartContext } from "./Card";

const ContextCart = () => {
  const { item, totalAmount, totalItem } = useContext(cartContext);

  return (
    <>
      <header className="continue-shopping">
        <h3>Continue shopping</h3>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem}</span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
              ;
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total: <span>{totalAmount}$</span>
          </h3>
          <button>Checkout</button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
