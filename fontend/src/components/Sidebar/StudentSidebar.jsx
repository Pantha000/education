import React from "react";
import { Link } from "react-router-dom";

const StudentSidebar = ({ showSidebar }) => {
  return (
    <>
      {showSidebar && (
        <div className="h-screen fixed bg-black text-white w-2/12  flex flex-col py-20 px-1  top-0">
          <Link className="hover:bg-slate-400 py-2 px-3" to="/">
            Home
          </Link>
          <Link className="hover:bg-slate-400 py-2 px-3" to="/all/question">
            Question Bank
          </Link>
          <Link className="hover:bg-slate-400 py-2 px-3" to="/student/routine">
            Routine
          </Link>
          <Link className="hover:bg-slate-400 py-2 px-3" to="/me/profile">
            Profile
          </Link>

          <Link className="hover:bg-slate-400 py-2 px-3" to="/student/routine">
            Update Avatar
          </Link>
          <Link className="hover:bg-slate-400 py-2 px-3" to="/student/routine">
            Update Profile
          </Link>
          <Link className="hover:bg-slate-400 py-2 px-3" to="/student/routine">
            Update Password
          </Link>
          <div className="absolute flex flex-col bottom-4">
            <Link
              className="px-3"
              target="_blank"
              to="https://elearn.daffodilvarsity.edu.bd"
            >
              Blc Link
            </Link>
            <Link
              className=" py-2 px-3"
              target="_blank"
              to="http://studentportal.diu.edu.bd"
            >
              Student Portal
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentSidebar;
