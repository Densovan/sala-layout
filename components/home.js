import React from "react";
import Image from "next/image";
import course from "../components/data/course.json";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div
        className="
        mt-2
        bg-no-repeat bg-center 
        h-[500px] w-auto rounded"
        style={{
          backgroundImage: `url(${"/images/banner.jpg"})`,
        }}
      ></div>

      <h1 className="text-5xl text-center font-bold mt-12 mb-12">Courses</h1>

      <div className="grid grid-cols-4 mt-3 gap-4">
        {course.map((res) => {
          return (
            <div className="px-4 py-4 bg-base-200 rounded-md h-full cursor-pointer">
              <div
                className="bg-no-repeat bg-center h-40 w-auto rounded"
                style={{
                  backgroundImage: `url(${"/images/pytho.png"})`,
                }}
              ></div>
              <div className="mt-5">
                <h1 className="text-xl font-semibold">{res.title}</h1>
                <p className="mt-2">
                  Learn A-Z everything about Python, from the basics, to
                  advanced...
                </p>
              </div>
              <div className="mt-7 space-x-3">
                {res.tags.slice(0, 3).map((res) => {
                  return (
                    <span className="bg-base-300 text-sm font-bold p-1 px-2 rounded-xl">
                      {res}
                    </span>
                  );
                })}
              </div>
              <div className="mt-4 bg-base-100  p-1 px-2 rounded w-32">
                <h1 className="font-bold text-md">
                  Price : {res.price === 0 ? "Free" : <span>${res.price}</span>}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
