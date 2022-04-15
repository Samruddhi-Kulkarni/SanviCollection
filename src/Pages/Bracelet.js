import React from "react";

import BraceletCard from "../components/BraceletCard";
import BraceletData from "../CardData/BraceletData";
const Bracelet = (props) => {
  return (
    <>
      <div className="cardData">
        {BraceletData.map((value, key) => {
          return (
            <BraceletCard
              imgsrc={value.imgsrc}
              id={value.id}
              description={value.description}
              price={value.price} 
            />
          );
        })}
      </div>
    </>
  );
};

export default Bracelet;