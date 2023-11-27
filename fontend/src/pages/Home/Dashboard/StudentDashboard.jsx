import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../../../redux/actions/studentAction";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const { teachers, loading } = useSelector((state) => state.getStudentTeacher);

  const allDept = new Set(teachers && teachers.map((val) => val.dept));
  const finalDept = [...allDept];
  console.log(finalDept);
  useEffect(() => {
    dispatch(getTeachers());
  }, []);
  return (
    <div className="px-12 pt-20">
      <div className="w-5/12  m-auto flex items-center">
        <input
          type="text"
          placeholder="search your teacher"
          className="w-full bg-black p-2 text-white"
        />
        <p className="bg-black p-3 text-white cursor-pointer">
          <FaSearch />
        </p>
      </div>
      <div className="mt-6 flex items-start  ">
        <div className="w-2/12 bg-slate-500 p-4 rounded-md">
          <h4 className="text-white font-semibold text-xl">Dept</h4>
          <div className="ml-5 mt-1 ">
            {finalDept &&
              finalDept.map((val, ind) => {
                return (
                  <li key={ind} className="cursor-pointer font-semibold">
                    <button>{val}</button>
                  </li>
                );
              })}
          </div>
        </div>
        <div className="w-10/12 ml-1">
          {loading ? (
            <p>Please Wait.......</p>
          ) : (
            <div className="flex items-center">
              {teachers &&
                teachers.map((val, ind) => {
                  return (
                    <Link
                      key={ind}
                      to={`/teacher/${val._id}`}
                      className=" bg-slate-700 text-white ml-1 cursor-pointer rounded-md p-4 w-3/12"
                    >
                      <img
                        src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
                        className="h-40"
                      />
                      <div className="mt-2">
                        <p className="font-semibold">{val.name}</p>
                        <p>{val.dept ? val.dept : "Enter a Department"}</p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
