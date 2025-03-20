import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
  <div className="flex justify-center mt-[120px] text-white px-4 md:px-0"> {/* added px-4 for padding on small screens */}
    <div className="w-full max-w-4xl">
      <h1
        id="sayitloud-header"
        className="text-[36px] md:text-[50px] text-center mb-[20px]" // already good, text size responsive
      >
        Say it loud.
      </h1>

      <div
        id="express-container"
        className="flex flex-col md:flex-row justify-center items-center text-white gap-10" // added flex-col md:flex-row and gap-10 for spacing and responsiveness
      >
        <div
          id="express-container"
          className="flex flex-col justify-center items-center mb-10 md:mb-0" // added mb-10 for spacing on mobile
        >
          <Link to={"/express"}>
            <button
              id="express-btn"
              className="p-[10px] w-[120px] mt-[40px] cursor-pointer mb-[20px] rounded-md hover:bg-red-500 transition-all" // increased width, added hover and transition
            >
              Express
            </button>
          </Link>
          <p
            id="express-p"
            className="text-center w-[90%] md:w-[300px] text-base" // responsive width and text-base
          >
            Feel free to open up, what you share might just spark inspiration in
            someone else.
          </p>
        </div>

        <div
          id="explore-container"
          className="flex flex-col justify-center items-center text-center"
        >
          <Link to={"/explore"}>
            <button
              className="p-[10px] w-[120px] mt-[40px] cursor-pointer mb-[20px] rounded-md hover:bg-red-500 transition-all" // same adjustments for consistency
            >
              Explore
            </button>
          </Link>
          <p className="text-center w-[90%] md:w-[300px] text-base"> {/* responsive paragraph */}
            See what others have shared, their words might inspire you or make
            you think in a new way.
          </p>
        </div>
      </div>
    </div>
  </div>
)};

export default Homepage;
