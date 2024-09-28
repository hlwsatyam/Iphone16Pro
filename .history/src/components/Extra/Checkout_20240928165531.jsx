import React, { useState } from "react";
import TopLine from "./checkOutComp/TopLine";
import LargeArea from "./checkOutComp/LargeArea";

function Checkout() {
  const [isSubmited, setIsSubmited]=useState(false)
  return (
    <div className="container" >
     {
      !isSubmited $$ 
     }
      <LargeArea setIsSubmited={setIsSubmited}   />
    </div>
  );
}

export default Checkout;
