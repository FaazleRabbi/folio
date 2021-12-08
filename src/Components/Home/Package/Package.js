import React, { useEffect } from "react";
import { useState } from "react";
import Underline from "../../underline/Underline";
import PackageCard from "./PackageCard/PackageCard";

const Package = (props) => {
  const [homeProgress, setHomeProgress] = props.homeProgress;
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    setHomeProgress(true);
    fetch("https://polar-hollows-69401.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => {
        setHomeProgress(false);
        setPackages(data);
      });
  }, []);
  return (
    <div style={{backgroundColor:'lightGray'}} className="">
      <h2 className="font-weight-bold text-center text-dark pt-5">Design Packages</h2>
      <Underline/>
      <h6 className="text-center">We have some affordable design packages for your graphic design needs!</h6>
      <div className="d-md-flex">
      {packages.map((info) => (
        <PackageCard info={info}></PackageCard>
      ))}
      </div>
    </div>
  );
};

export default Package;
