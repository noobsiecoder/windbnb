import React from "react";

interface SuperHostProps {
  isSuperHostAvailable: boolean;
}

const SuperHost: React.FC<SuperHostProps> = ({ isSuperHostAvailable }) =>
  isSuperHostAvailable ? (
    <span className="px-3 py-1 text-gray-700 border border-gray-700 whitespace-nowrap font-montserrat text-xxs md:text-xs rounded-xl">
      SUPER HOST
    </span>
  ) : null;

export default SuperHost;
