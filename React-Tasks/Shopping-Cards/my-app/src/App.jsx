import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-center  my-2">Showing Our Product!!</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div class="card">
              <img src="https://cdn.kobo.com/book-images/121bee95-cb12-452d-8197-641880b47945/1200/1200/False/coding-3-manuscripts-in-1-book-python-for-beginners-python-3-guide-learn-java.jpg" />
              <div class="card-body">
                <h5 class="card-title">CODING-3</h5>
                <p class="card-text">No Cost Emi</p>
                <p class="card-text">Free Delivery</p>
                <p class="card-text">10 Days Replacement</p>
                <a href="#" class="btn">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div class="card">
              <img src="https://m.media-amazon.com/images/I/51i-PRni7yL.jpg" />
              <div class="card-body">
                <h5 class="card-title">PYTHON AND SQL PROGRAMMING</h5>
                <p class="card-text">No Cost Emi</p>
                <p class="card-text">Free Delivery</p>
                <p class="card-text">10 Days Replacement</p>
                <a href="#" class="btn">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div class="card">
              <img src="https://images-na.ssl-images-amazon.com/images/I/51fRKyqPWDL.jpg" />
              <div class="card-body">
                <h5 class="card-title">JAVASCRIPT FOR BEGINNERS</h5>
                <p class="card-text">No Cost Emi</p>
                <p class="card-text">Free Delivery</p>
                <p class="card-text">10 Days Replacement</p>
                <a href="#" class="btn">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
