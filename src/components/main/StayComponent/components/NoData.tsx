import React from "react";
import Image from "../../../../assets/svg/empty_street.svg";

const NoData: React.FC = () => (
  <div className="grid justify-center px-12 sm:grid-cols-2 gap-y-4 sm:gap-y-0 sm:gap-x-12">
    <img src={Image} alt="empty_street" />
    <div className="lg:w-11/12">
      <h1 className="font-semibold md:text-lg xl:text-xl font-mulish text-gray-750">
        Oops!
      </h1>
      <p className="text-sm font-mulish text-gray-750">
        We tried our best but unfortunately,
        we&nbsp;couldn't&nbsp;find&nbsp;the&nbsp;perfect&nbsp;stay.
        Please&nbsp;try&nbsp;again!
      </p>
    </div>
  </div>
);

export default NoData;
