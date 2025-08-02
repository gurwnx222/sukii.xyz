import React from "react";
import CCSA from "@/features/courses/pages/CCSA";
import SideBar from "@/features/courses/components/SideBar";
export default function CCSA() {
  return (
    <div className="flex">
      <SideBar />
      <CCSA />
    </div>
  );
}
