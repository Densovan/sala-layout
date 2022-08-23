import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-12">
        <div className="bg-base-200 rounded-lg p-3 mb-4 border-base-200">
          <div
            className="bg-no-repeat bg-center h-[500px] w-auto rounded"
            style={{
              backgroundImage: `url(${"/images/sun.jpg"})`,
            }}
          ></div>
          <div className="-mt-8 px-12">
            <div className="flex items-center space-x-4">
              <img
                className="h-44 w-h-44 rounded-full border-4 border-base-200"
                src="https://spidercenter.org/files/2020/05/RUPP_logo_v2.png"
              />
              <div>
                <h1 className="text-2xl font-bold">Success Acedemy School</h1>
                <span>5K Students</span>
                <div class="flex -mb-8 -space-x-4">
                  <img
                    class="w-10 h-10 mt-2 rounded-full border-2 border-base-200"
                    src="https://placeimg.com/192/192/people"
                    alt=""
                  />
                  <img
                    class="w-10 h-10 mt-2 rounded-full border-2 border-base-200"
                    src="https://placeimg.com/192/192/people"
                    alt=""
                  />
                  <img
                    class="w-10 h-10 mt-2 rounded-full border-2 border-base-200"
                    src="https://placeimg.com/192/192/people"
                    alt=""
                  />
                  <img
                    class="w-10 h-10 mt-2 rounded-full border-2 border-base-200"
                    src="https://placeimg.com/192/192/people"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
