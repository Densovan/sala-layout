import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlayIcon } from "@heroicons/react/solid";

const videos = [
  {
    id: "1",
    url: "https://youtu.be/cF2lQ_gZeA8",
    title: "React Hooks Tutorial - 1",
    sub_title: "Introduction",
  },
  {
    id: "2",
    url: "https://youtu.be/lAW1Jmmr9hc",
    title: "React Hooks Tutorial - 2",
    sub_title: "useState Hook",
  },
  {
    id: "3",
    url: "https://youtu.be/d0plTCQgsXs",
    title: "React Hooks Tutorial - 3",
    sub_title: "useState with previous state",
  },
  {
    id: "4",
    url: "https://youtu.be/-3lL8oyev9w",
    title: "React Hooks Tutorial - 4 ",
    sub_title: "useState with object",
  },
];

const Player = () => {
  const [mounted, setMounted] = useState(false);
  const [video, setVideo] = useState(videos[0].url);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="container mx-auto mt-6">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <div className="player-wrapper">
            <ReactPlayer
              controls
              onSeek={true}
              className="react-player"
              url={video}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="font-bold text-2xl">Contents</h1>
          <div className="w-full pt-10">
            <div className="w-full rounded-2xl bg-base-200 p-2">
              {videos.map((res, index) => {
                return (
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full mt-2 mb-2 justify-between rounded-lg bg-base-100 px-4 py-4 text-left text-sm font-medium   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                          <span className="text-lg">{res.title}</span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pb-2 text-md text-gray-500">
                          <div
                            onClick={() => setVideo(videos[index].url)}
                            className="text-md font-bold cursor-pointer flex space-x-2 items-center"
                          >
                            <PlayIcon
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5 `}
                            />
                            <p>{res.sub_title}</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
