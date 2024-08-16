import React from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import featuresData from "../data/features.json";
import { MdManageSearch } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { CiMobile3 } from "react-icons/ci";

function Feature() {
  const featureData = featuresData.features;
  const iconsMap = {
    AiOutlineAntDesign: <AiOutlineAntDesign size="2.5em" />,
    CiMobile3: <CiMobile3 size="2.5em" />,
    MdManageSearch: <MdManageSearch size="2.5em" />,
    GrSecure: <GrSecure size="2.5em" />,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-6 lg:px-8">
      {featureData.map((feature, index) => (
        <div
          className="flex flex-row mx-6 my-4 md:mx-4 md:my-4 lg:my-6 p-3 bg-warmCoral bg-opacity-10 rounded-xl border border-warmCoral border-opacity-100"
          key={index} data-aos="fade"
        >
          <div className="text-warmCoral m-1 mt-3 me-2">
            {iconsMap[feature.icon]}
          </div>
          <div>
            <h4 className="text-lg md:text-base font-semibold mt-2">
              {feature.title}
            </h4>
            <span className="font-light md:text-sm">{feature.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feature;
