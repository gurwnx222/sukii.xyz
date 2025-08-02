import React from "react";
import PASI from "@/features/courses/pages/PASI";
import SideBar from "@/features/courses/components/SideBar";
export default function PASIPage() {
  return (
    <div className="flex">
      <SideBar />
      <PASI />
    </div>
  );
}
