"use client";

import React, { useState } from "react";
import { Team } from "../types";

const TeamSectionComp: React.FC<Team> = ({ heading, paragraph, members }) => {
  const [isShowFullTeam, setIsShowFullTeam] = useState<boolean>(false);
  return (
    <section className="my-30">
      <div className="w-full flex max-sm:flex-col items-center mt-14 px-5 gap-x-5">
        <h1 className="text-black w-full text-center px-2 py-2 text-3xl font-bold rounded-md bg-[#9AE975]">
          {heading}
        </h1>
        <p className="text-center m-0 p-0 w-full text-base font-semibold py-8">
          {paragraph}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 items-stretch">
        {members.slice(0, 4).map((member, index) => (
          <div
            key={index}
            className="aspect-square border rounded-2xl p-4 w-full bg-white shadow-[0px_10px]"
          >
            <div className="flex flex-col">
              {/* Image Section */}
              <div className="relative aspect-square w-full bg-[#96ff69] rounded-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name}'s image`}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-[#b9ff69]/20 mix-blend-multiply" />
              </div>

              {/* Info Section */}
              <div className="flex-1 flex flex-col justify-between mt-4">
                <div>
                  <h1 className="font-bold text-lg">{member.name}</h1>
                  <h2 className="font-light text-[#454545] italic text-sm">
                    {member.designation}
                  </h2>
                </div>
                <div className="border-t-gray-700 border-t-1 mt-4 pt-2 text-sm text-gray-800 ">
                  {member.experience}
                </div>
              </div>
            </div>
          </div>
        ))}
        {isShowFullTeam &&
          members.slice(4).map((member, index) => (
            <div
              key={index}
              className="aspect-square border rounded-2xl p-4 w-full bg-white shadow-[0px_10px]"
            >
              <div className="flex flex-col">
                {/* Image Section */}
                <div className="relative aspect-square w-full bg-[#96ff69] rounded-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name}'s image`}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-[#b9ff69]/20 mix-blend-multiply" />
                </div>

                {/* Info Section */}
                <div className="flex-1 flex flex-col justify-between mt-4">
                  <div>
                    <h1 className="font-bold text-lg">{member.name}</h1>
                    <h2 className="font-light text-[#454545] italic text-sm">
                      {member.designation}
                    </h2>
                  </div>
                  <div className="border-t-gray-700 border-t-1 mt-4 pt-2 text-sm text-gray-800 ">
                    {member.experience}
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div
          className={
            "w-full flex justify-end col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4"
          }
        >
          <button
            onClick={() => {
              setIsShowFullTeam(!isShowFullTeam);
            }}
            className="bg-black text-white px-10 py-3 rounded-lg font-semibold"
          >
            {isShowFullTeam ? "Hide" : "See full team..."}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSectionComp;
