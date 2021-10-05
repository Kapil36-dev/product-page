import React from "react";
import "./Payment.css";
import master from "./payment-images/download.png";
import maestro from "./payment-images/images (1).png";
import visa from "./payment-images/1392046-1354900284.jpeg";
import american from "./payment-images/images.png";
import Rupay from "./payment-images/RuPay-Logo.png";

const Payment = () => {
  return (
    <div className="container px-1 py-1">
      <div
        className="card mt-3  text-center mx-auto box1 newchange"
        style={{ borderRadius: "5px", borderColor: "black" }}
      >
        <div
          className="container pay"
          style={{ color: "white", backgroundColor: "#092b63" }}
        >
          <div className="text-start mx-2 py-2" style={{ fontWeight: "500" }}>
            4. PAYMENT OPTIONS
          </div>
        </div>
        <div className="card-body text-start">
          <p style={{ fontWeight: "bold" }}>Select a Payment Method</p>
          <div
            className="card mt-3 text-start mx-auto w-75 new"
            style={{ borderRadius: "5px", borderColor: "black" }}
          >
            <div className="card-body text-start fontt">
              <p className="input-group">
                <p
                  className="input-group-prepend"
                  style={{ fontWeight: "500" }}
                >
                  <input type="Radio" name="payment" defaultValue="CC" /> Add
                  Debit/Credit/ATM Card
                </p>
                <span>
                  <img src={visa} alt="logo" height="30px" />
                  <img src={master} alt="logo" height="30px" />
                  <img src={Rupay} alt="logo" height="30px" />
                  <img src={american} alt="logo" height="40px" />
                  <img src={maestro} alt="logo" height="40px" />
                </span>
              </p>
              <p className="input-group">
                <p
                  className="input-group-prepend"
                  style={{ fontWeight: "500" }}
                >
                  <input type="Radio" name="payment" defaultValue="CC" /> Net
                  Banking
                  <br />
                  <select
                    name="net"
                    id="bank"
                    className="options mx-2 my-1"
                    style={{ fontWeight: "500px", color: "gray" }}
                  >
                    <option defaultValue="choose">Choose an option</option>
                    <option defaultValue="hdfc">HDFC</option>
                    <option defaultValue="icici">ICICI</option>
                    <option defaultValue="sbi">State Bank of India</option>
                  </select>
                </p>
              </p>
              <p className="input-group">
                <p
                  className="input-group-prepend"
                  style={{ fontWeight: "500" }}
                >
                  <input type="Radio" name="payment" defaultValue="CC" /> Other
                  UPI Apps
                </p>
              </p>
              <p className="input-group">
                <p
                  className="input-group-prepend"
                  style={{ fontWeight: "500" }}
                >
                  <input type="Radio" name="payment" defaultValue="CC" /> EMI
                </p>
              </p>
              <p className="input-group ">
                <p
                  className="input-group-prepend"
                  style={{ fontWeight: "500" }}
                >
                  <input type="Radio" name="payment" defaultValue="CC" /> Pay on
                  Delivery
                  <br />
                  <p
                    className="px-2 py-1 "
                    style={{
                      fontSize: "15px",
                      color: "gray",
                      fontWeight: "400",
                    }}
                  >
                    <p className="abou">
                      Pay digitally with SMS Pay Link. Cash may not be accepted
                      in COVID restricted Areas.
                      <a style={{ textDecoration: "none" }} href="/">
                        Know more
                      </a>
                    </p>
                  </p>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card mt-3  text-center mx-auto boxx new"
        style={{ borderRadius: "5px", borderColor: "black", fontWeight: "500" }}
      >
        <div className="card-body text-start ">
          <a style={{ color: "#092b63", textDecoration: "none" }} href="/">
            + Add to Gift Card
          </a>
        </div>
      </div>
      <div className="container text-center mt-3">
        <button
          type="button"
          className="btn btn-lg pos"
          style={{
            fontWeight: "500",
            backgroundColor: "#092b63",
            color: "white",
          }}
        >
          Place Your Order
        </button>
      </div>
    </div>
  );
};

export default Payment;
