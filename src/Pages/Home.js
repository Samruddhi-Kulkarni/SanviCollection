import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Homecard from "../components/HomeCard";
import HomeCardData from "../HomeCardData/HomeCardData";

const Home = () => {
  
  return (
    <>
      <Header />
      <div className="cardData">
        {HomeCardData.map((value, key) => {
          return (
            <>
              <Homecard
                link={value.link}
                imgsrc={value.imgsrc}
                category={value.category}
                description={value.description}
              />
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Home;
