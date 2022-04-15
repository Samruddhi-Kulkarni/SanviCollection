import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NecklaceData from "../CardData/NecklaceData";
import NecklaceCard from "../components/NecklaceCard";
const Necklace = (props) => {
  return (
    <>
      <div className="cardData">
        {NecklaceData.map((value, key) => {
          return (
            <NecklaceCard
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

export default Necklace;
