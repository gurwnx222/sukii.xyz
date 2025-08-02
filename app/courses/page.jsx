import React from "react";
import SideBar from "@/features/courses/sidebar/SideBar";
function Courses() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 p-6">Courses</div>
    </div>
  );
}

export default Courses;
