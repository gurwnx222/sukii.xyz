import React from "react";
import CCSA from "@/features/courses/pages/CCSA";
import SideBar from "@/features/courses/components/SideBar";
export default function CCSAPage() {
  return (
    <div className="flex">
      <SideBar />
      <CCSA />
    </div>
  );
}
