import React from "react";
import AdminSidebar from "./AdminSidebar";
import TeacherSidebar from "./TeacherSidebar";
import StudentSidebar from "./StudentSidebar";
import { useSelector } from "react-redux";

const Sidebar = ({ showSidebar }) => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  if (isAuthenticated) {
    if (user.role === "Admin") {
      return <AdminSidebar showSidebar={showSidebar} />;
    } else if (user.role === "Teacher") {
      return <TeacherSidebar showSidebar={showSidebar} />;
    } else if (user.role === "Student") {
      return <StudentSidebar showSidebar={showSidebar} />;
    }
  }
};

export default Sidebar;
