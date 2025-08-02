import React from "react";
import CASI from "@/features/courses/pages/CASI";
import SideBar from "@/features/courses/components/SideBar";
export default function CASI() {
  return (
    <div className="flex">
      <SideBar />
      <CASI />
    </div>
  );
}
