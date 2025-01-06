"use client";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  let router = useRouter();

  let style: React.CSSProperties = {
    animation: `fadeIn ${0.5}s`,
    backgroundPosition: "center",
  };

  let bgstyle: React.CSSProperties = {
    backgroundColor: "#fafaff",
    backgroundImage: "radial-gradient(#d0d3ff 1.1px, #fafaff .5px)",
    backgroundSize: "22px 22px",
  };

  return (
    <div style={bgstyle}>
      <div className="container max-w-screen-xl mx-auto px-4 py-8 flex gap-4 h-screen w-full">
        <div className="grid justify-center items-center w-full">
          {/* <h1 className="text-4xl py-8 font-semibold">Baalavignesh Arunachalam</h1> */}

          <div className="grid grid-cols-2 gap-12">
            {" "}
            <div
              className=" h-96 w-96 cursor-pointer bg-gray-50 shadow-lg border-2 rounded-xl text-3xl flex flex-col item-center hover:scale-[101%] transition-all duration-150 "
              onClick={() => {
                router.push("/portfolio");
              }}
              style={style}
            >
              <p className="text-sm text-center w-full bg-purple-100 rounded-t-xl p-2">
                Most popular choice
              </p>
              <p className="text-center font-semibold py-6">Portfolio</p>
              <p className="text-base text-center text-gray-500">
                Ideal if you're new here
              </p>

              <div className="flex flex-col justify-center px-12  my-4">
                <p className="text-base">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-300 pr-1"
                    ></FontAwesomeIcon>
                  </span>{" "}
                  Straightforward, no fluff, all facts.
                </p>
              </div>
            </div>
            <div
              className="h-96 w-96 cursor-pointer bg-gray-50 shadow-lg border-2 rounded-xl text-3xl flex flex-col item-center hover:scale-[101%] transition-all duration-150"
              onClick={() => {
                router.push("/personal");
              }}
              style={style}
            >
              <p className="text-sm text-center w-full bg-purple-100 rounded-t-xl p-2 opacity-0">
                Most popular choice
              </p>

              <p className="text-center font-semibold py-6">Personal Website</p>

              <p className="text-base text-center text-gray-500">
                Indepth and hard to understand
              </p>

              <div className="flex flex-col justify-center px-12 my-4 gap-2">
                <p className="text-base">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-300 pr-1"
                    ></FontAwesomeIcon>
                  </span>{" "}
                  Detailed insights into the project
                </p>
                <p className="text-base">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-300 pr-1"
                    ></FontAwesomeIcon>
                  </span>{" "}
                  “cool” grid layout
                </p>
                <p className="text-base">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-300 pr-1"
                    ></FontAwesomeIcon>
                  </span>{" "}
                  confusing navigation
                </p>

                <p className="text-base">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-300 pr-1"
                    ></FontAwesomeIcon>
                  </span>{" "}
                  fancy animations
                </p>
                
                <p className="text-base">
                  <span>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-300 pr-1"
                    ></FontAwesomeIcon>
                  </span>{" "}
                  hobbies and interests 
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
