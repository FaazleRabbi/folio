import React from "react";
import { Link } from "react-router-dom";
import "./PackageCard.css";
const PackageCard = ({ info }) => {
  const { name, price, description } = info.data;
  return (
    <div  className="col-md-4">
      <div className="p-4 mt-5 mb-5  border packageCard d-flex flex-column justify-content-between">
        <img
          className="img-fluid packageImg  m-auto"
          style={{ borderRadius: "50%" }}
          src={info.imageUrl}
          alt=""
        />
        <h3 className="text-dark text-center mt-3 font-weight-bold">
          {name}{" "}Plan
        </h3>
        <h3 className="text-danger text-center m-4 font-weight-bold">$ {price}</h3>
        <Link to="/dashboard#/order">
          <span className="order_btn">Get Start To Day</span>
        </Link>
        <h6 className="text-secondary mt-4 mb-4 "> {description}</h6>
        
      </div>
    </div>
  );
};

export default PackageCard;
