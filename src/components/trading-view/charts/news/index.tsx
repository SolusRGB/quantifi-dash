import React from "react";
import Link from "next/link"; // Make sure to import Link
import EconomicCalendar from "./EconomicCalendar";
import TopStories from "./TopStories";

// parent component that combines the two widgets
const News: React.FC = () => {
  return (
    <>
      <div className="flex w-full flex-wrap px-8 pb-0 sm:items-center">
        <div className="my-6 mr-auto space-y-4">
          <h1 className="text-2xl font-medium text-white/70">
            Upcoming Events & Top Stories
          </h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div style={{ width: "calc(50% - 10px)", marginRight: "20px" }}>
          <EconomicCalendar />
        </div>
        <div style={{ width: "calc(80% - 10px)" }}>
          <TopStories />
        </div>
      </div>
    </>
  );
};

export default News;
export { EconomicCalendar, TopStories };
