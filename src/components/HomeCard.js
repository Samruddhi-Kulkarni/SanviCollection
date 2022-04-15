import React from "react";

const HomeCard = (props) => {
  return (
    <>
      <div className="xl:w-1/4 md:w-1/2 p-4 ">
        <div className="rounded overflow-hidden shadow-lg w-full h-full">
          <img
            className="rounded w-full h-80 object-cover flex object-center my-6 "
            src={props.imgsrc}
            alt="jewellery"
          />
          <div className="px-6 py-4 mx-auto">
            <div className="text-lg  font-medium title-font mb-4 text-purple-800">
              {props.category}
            </div>
            <p className="leading-relaxed text-base text-purple-600">
              {props.description}
            </p>
          </div>
        </div> 
      </div>     
    </>
  );
};

export default HomeCard;
