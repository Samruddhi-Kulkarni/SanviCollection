import React from "react";

import EarringCard from "../components/EarringCard";
import EarringData from "../CardData/EarringData";
const Earring = (props) => {
  return (
    <>
      <div className="cardData">
        {EarringData.map((value, key) => {
          return (
            <EarringCard
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

export default Earring;
