import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return <div className="flex justify-center mt-[120px] text-white">
            <div>
                <h1 className="text-[50px] text-center mb-[20px]">
                    Say it loud.
                </h1>


                <div className="flex justify-center items-center text-white gap-10">
                    <div id="express-container" className="flex flex-col justify-center items-center">
                        <Link to={'/express'}>
                            <button className="p-[10px] w-[100px] mt-[80px] cursor-pointer mb-[20px] rounded-md">Express</button>
                        </Link>
                        <p className="text-center w-[300px]">Feel free to open up, what you share might just spark inspiration in someone else.</p>
                    </div>

                    <div id="explore-container" className="flex flex-col justify-center items-center text-center">
                        <Link to={'/explore'}>
                            <button className="p-[10px] w-[100px] mt-[80px] cursor-pointer mb-[20px] rounded-md">Explore</button>
                        </Link>
                        <p className="text-center w-[300px]">See what others have shared, their words might inspire you or make you think in a new way.</p>
                    </div>
                </div>
            </div>
        </div>;
};

export default Homepage;
