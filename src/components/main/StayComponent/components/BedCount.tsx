import React from "react";

interface BedCountProps {
  bedCount: number | null;
}

const BedCount: React.FC<BedCountProps> = ({ bedCount }) =>
  bedCount !== null ? (
    <span className="text-xs text-gray-400 md:text-sm font-montserrat">
      .{bedCount} {bedCount > 1 ? "beds" : "bed"}
    </span>
  ) : null;

export default BedCount;
