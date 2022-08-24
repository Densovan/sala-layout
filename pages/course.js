import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const Course = () => {
  return (
    <div className="container mx-auto mt-12 px-32">
      <div className="grid grid-cols-2 gap-5 ">
        <div
          className="p-3"
          // className="bg-base-200 rounded-lg p-5 h-1/2 overflow-hidden"
        >
          <h1 className="font-bold text-3xl">
            Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)
          </h1>
          <p className="text-xl mt-6">
            Updated! Become a Senior React Developer. Build a massive E-commerce
            app with Redux, Hooks, GraphQL, Stripe, Firebase Updated! Become a
            Senior React Developer.
          </p>
          <div className="space-x-3">
            <div className="flex p-1 px-3 bg-base-200 w-1/2 mt-3 rounded-lg space-x-3">
              <div>Last updated: 08/2022</div>
            </div>
          </div>
          <br />
          <br />
          <div>
            <h1 className="font-bold text-2xl">What you'll learn</h1>
            <br />
            <ul className="list-disc text-[17px]">
              <li>
                Build enterprise level React applications and deploy to
                production (using React 18!)
              </li>
              <li>
                Learn the latest features in React including Hooks, Context API,
                Suspense, React Lazy + more
              </li>
              <li>Become the top 10% ReactJS Developer</li>
              <li>
                Use Redux, Redux Thunk and Redux Saga in your applications
              </li>
              <li>Set up authentication and user accounts</li>
            </ul>
          </div>
          <br />
          <br />
          <h1 className="font-bold text-2xl">Requirements</h1>
          <br />
          <ul className="list-disc text-[17px]">
            <li>Basic HTML, CSS and JavaScript knowledge</li>
            <li>
              You do not need any experience with React or any other JS
              framework!
            </li>
          </ul>
        </div>
        <div>
          <div className="bg-base-200 rounded-lg p-3 mb-4 border-base-300">
            {/* <div
                  className="bg-no-repeat bg-center h-24 w-auto rounded"
                  style={{
                    backgroundImage: `url(${"/images/sun.jpg"})`,
                  }}
                ></div> */}
            <img className="w-full bg-center h-full" src="/images/pytho.png" />
            <div className="mt-3">
              <span className="font-semibold text-2xl"> Price: $29.99</span>
            </div>
            <button className="w-full py-2 text-center font-bold bg-base-100 mt-3 rounded-lg text-xl">
              Buy This Course
            </button>
          </div>
          <h1 className="font-bold text-2xl mt-12">Course content</h1>
          <div className="w-full pt-10">
            <div className="w-full rounded-2xl bg-base-200 p-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-base-100 px-4 py-4 text-left text-sm font-medium   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span className="text-lg">What is React js 18.0 ?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-500">
                      If you're unhappy with your purchase for any reason, email
                      us within 90 days and we'll refund you in full, no
                      questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full mt-2 justify-between rounded-lg bg-base-100 px-4 py-4 text-left text-sm font-medium   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span className="text-lg">
                        What is differnce between Hooks and Class ?
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-500">
                      If you're unhappy with your purchase for any reason, email
                      us within 90 days and we'll refund you in full, no
                      questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
