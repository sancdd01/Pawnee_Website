import React, { useState } from "react";
import { getQuote } from "../utilities";

//https://i.kym-cdn.com/entries/icons/facebook/000/023/463/6360103332924270401274957217_Ron.jpg"

export default function Department() {
  const [quote, setQuote] = useState("");

  const handleClick = async () => {
    const response = await getQuote();
    setQuote(response.data[0]);
  };

  return (
    <div>
      <h1>Parks & Rec Department Page</h1>
      {/* This guy should be on the top */}
      <div className="swanson-quote">
        <img
          id="swanson-profile"
          src="https://i.kym-cdn.com/entries/icons/facebook/000/023/463/6360103332924270401274957217_Ron.jpg"
          alt="photo-swanson"
          onClick={handleClick}
        />
        <span>{quote}</span>
      </div>
      <div className="department-info">
        {/* These guys should be side by side */}
        <div>Open work orders?</div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit in
          porro, cum perferendis, quisquam atque molestias consequatur quam
          itaque neque incidunt? Provident explicabo nobis asperiores
          dignissimos ea, voluptatem laudantium quos.
        </div>
      </div>
    </div>
  );
}
