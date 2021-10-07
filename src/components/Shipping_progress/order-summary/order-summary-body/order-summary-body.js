import React, { useState } from "react";
import OrderSummaryCard from "../order-summary-card/order-summary-card";
import "./order-summary-body.css";
import { useStateValue } from "../../../Stateprovider";

export default function OrderSummaryBody(props) {
  const [{ basket }, dispatch] = useStateValue();

  // const order = [
  //   {
  //     id: "1",
  //     name: "Robotics Starter Kit",
  //     quantity: 1,
  //     price: 345,
  //     delivery_date: "aug 12 ,2021",
  //     img: "https://images.squarespace-cdn.com/content/v1/56bbb72c859fd08cc740d113/1537291972160-0R4A2VXKLYWP44GYIRYR/CiGen-RPA-Australia-5-Reasons-Why-Robotic-Process-Automation-is-Your-Competitive-Advantage.jpg",
  //   },
  //   {
  //     id: "2",
  //     name: "IOT ADVANCED KIT",
  //     quantity: 1,
  //     price: 345,
  //     delivery_date: "aug 12 ,2021",
  //     img: "https://images.squarespace-cdn.com/content/v1/56bbb72c859fd08cc740d113/1537291972160-0R4A2VXKLYWP44GYIRYR/CiGen-RPA-Australia-5-Reasons-Why-Robotic-Process-Automation-is-Your-Competitive-Advantage.jpg",
  //   },
  //   {
  //     id: "3",
  //     name: "Vedic Mathematics",
  //     quantity: 1,
  //     price: 345,
  //     delivery_date: "aug 12 ,2021",
  //     img: "https://images.squarespace-cdn.com/content/v1/56bbb72c859fd08cc740d113/1537291972160-0R4A2VXKLYWP44GYIRYR/CiGen-RPA-Australia-5-Reasons-Why-Robotic-Process-Automation-is-Your-Competitive-Advantage.jpg",
  //   },
  // ];
  const [Orders, setOrders] = useState(basket);
  const [quantity, setquantity] = useState(1);

  return (
    // <div className="summary-body">
    <div className="order-summary-body">
      {/* inside body upper part  */}
      {/* <h1 className="order-summary-heading">REVIEW YOUR ORDER</h1> */}
      <OrderSummaryCard
        quantity={quantity}
        setquantity={setquantity}
        order={Orders}
        setOrders={setOrders}
      />
      <div className="form_buttons buttons">
        {Orders.length ? (
          <button
            className="save_button"
            onClick={() => props.setchange(false)}
          >
            SAVE ORDER
          </button>
        ) : null}
        <button
          className="cancel_button"
          onClick={() => props.setchange(false)}
        >
          CANCEL
        </button>
      </div>
    </div>
    // </div>
  );
}
