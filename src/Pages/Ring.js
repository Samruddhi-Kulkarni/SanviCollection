import React from "react";

import RingCard from "../components/RingCard";
import RingData from "../CardData/RingData";
const Ring = (props) => {
  return (
    <>
      <div className="cardData">
        {RingData.map((value, key) => {
          return (
            <RingCard
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

export default Ring;