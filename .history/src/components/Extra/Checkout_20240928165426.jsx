import React, { useState } from "react";
import TopLine from "./checkOutComp/TopLine";
import LargeArea from "./checkOutComp/LargeArea";

function Checkout() {
  const [isSubmited, setIsSubmited]=useState(true)
  return (
    <div className="container" >
      <TopLine />
      <LargeArea />
    </div>
  );
}

export default Checkout;
