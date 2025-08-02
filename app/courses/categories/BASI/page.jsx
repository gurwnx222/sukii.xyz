import React from "react";
import BASI from "@/features/courses/pages/BASI";
import SideBar from "@/features/courses/components/SideBar";
export default function BASIPage() {
  return (
    <div className="flex">
      <SideBar />
      <BASI />
    </div>
  );
}
