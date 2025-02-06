import React from "react";
import { JCTab } from "../Tabs";
import Schedules from "@/pages/schedules";

const LearnMorePage: React.FC = () => {
  const tabs = [
    {
      name: "Calender",
      view: "",
    },
    {
      name: "Cards",
      view: "",
    },
  ];

  return (
    <div className="flex space-x-4 mb-6">
      <div className="w-full h-full p-4">
        <JCTab tabs={tabs} />
      </div>
    </div>
  );
};

export default LearnMorePage;
