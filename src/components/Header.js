import React from "react";
import logo from '../logo.png'
const Header = () => {
  return (
    <>
      <header className="text-purple-800 body-font bg-purple-200  border-2 border-purple-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
        
         
            <img className="h-10 rounded w-1/4 object-cover object-center my-4" src={logo} alt="logo"/>
           
        
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-purple-600" href="/">
              Home
            </a>
            <a className="mr-5 hover:text-purple-600" href="/cat">
              Categories
            </a>
            <a className="mr-5 hover:text-purple-600" href="/aboutus">
              About Us
            </a>
            <a className="mr-5 hover:text-purple-600" href="/contactus">
              Contact Us
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
