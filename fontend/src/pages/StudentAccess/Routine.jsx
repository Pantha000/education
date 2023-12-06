import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoutines } from "../../redux/actions/studentAction";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";

const Routine = () => {
  const dispatch = useDispatch();
  const { loading, routines } = useSelector((state) => state.getStudentTeacher);

  const [section, setSection] = useState();
  const [dept, setDept] = useState();
  //   console.log(routines && routines);

  let sat = routines && routines.filter((val) => val.day === "Sat");
  let sun = routines && routines.filter((val) => val.day === "Sun");
  let mon = routines && routines.filter((val) => val.day === "Mon");
  let tue = routines && routines.filter((val) => val.day === "Tue");
  let wed = routines && routines.filter((val) => val.day === "Wed");
  let thu = routines && routines.filter((val) => val.day === "Thu");

  let array = [
    {
      cap: sat,
      type: "sat",
    },
    {
      cap: sun,
      type: "sun",
    },
    {
      cap: mon,
      type: "mon",
    },
    {
      cap: tue,
      type: "tue",
    },
    {
      cap: wed,
      type: "wed",
    },
    {
      cap: thu,
      type: "thu",
    },
  ];
  console.log(array);

  const deptArrayData = ["CSE", "SWE"];
  const sectionArrayData = ["55_S", "55_A"];

  const handleSubmit = () => {
    if (dept) {
      if (section) {
        dispatch(getRoutines(section, dept));
      } else {
        toast("Please Select A Section");
      }
    } else {
      toast("Please Select A Department");
    }
  };
  //   useEffect(() => {}, []);
  return (
    <div className="px-12 pt-20 flex justify-center">
      <div className="w-6/12 rounded-2xl">
        <div className="px-5 py-3 bg-slate-500">
          <p className="mt-2 font-medium text-white mb-1">
            Select A Department
          </p>
          <select
            onChange={(e) => setDept(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option>Choose A Department</option>
            {deptArrayData.map((val, ind) => {
              return (
                <option value={val} key={ind}>
                  {val}
                </option>
              );
            })}
          </select>
          <p className="mt-5 font-medium text-white mb-1">Select A Section</p>
          <select
            onChange={(e) => setSection(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option>Choose A Section</option>
            {sectionArrayData.map((val, ind) => {
              return (
                <option value={val} key={ind}>
                  {val}
                </option>
              );
            })}
          </select>
          <button
            onClick={handleSubmit}
            className="w-full px-3 py-2 bg-orange-900 text-white  mt-4"
          >
            {loading ? <Loading /> : "Find your routine"}
          </button>
        </div>
        {routines && (
          <div className="mt-5">
            <div className="flex justify-evenly">
              {array.map((val, ind) => {
                return (
                  <div key={ind}>
                    {val.cap && val.cap.length > 0 && (
                      <button className=" bg-slate-400 mr-2 px-5 py-2 rounded-lg text-white font-medium">
                        {val.type}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            <div>
              {routines &&
                routines.map((val, ind) => {
                  return <div></div>;
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Routine;
