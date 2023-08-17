import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="heading-main">JIO FIBER PLANS</h1>
      <div className="body-container">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card-header py-2">
                <h1 className="my-0 fw-normal">FREE</h1>
                <h2 className="my-0 heading-center">$0/month</h2>
                <div className="card-body">
                  <ul className="center">
                    <li>Single User</li>
                    <li>50GB Storage</li>
                    <li>Unlimited Public Projects</li>
                    <li>Community Access</li>
                  </ul>
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-primary"
                  >
                    Sign up for Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card-header py-2">
                <h1 className="my-0 fw-normal">PLUS</h1>
                <h2 className="my-0 heading-center">$9/month</h2>
                <div className="card-body">
                  <ul className="center">
                    <li>5 Users</li>
                    <li>50GB Storage</li>
                    <li>Unlimited Public Projects</li>
                    <li>Community Access</li>
                  </ul>
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-primary"
                  >
                    Sign up for Plus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card-header py-2">
                <h1 className="my-0 fw-normal">PRO</h1>
                <h2 className="my-0 heading-center">$49/month</h2>
                <div className="card-body">
                  <ul className="center">
                    <li>Unlimited Users</li>
                    <li>50GB Storage</li>
                    <li>Unlimited Public Projects</li>
                    <li>Community Access</li>
                  </ul>
                  <button
                    type="button"
                    class="w-100 btn btn-lg btn-outline-primary"
                  >
                    Sign up for Pro
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
