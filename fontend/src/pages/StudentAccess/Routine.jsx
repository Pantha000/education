import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoutines } from "../../redux/actions/studentAction";
import Loading from "../../components/Loading";

const Routine = () => {
  const dispatch = useDispatch();
  const { loading, routines } = useSelector((state) => state.getStudentTeacher);

  const [section, setSection] = useState();
  const [dept, setDept] = useState();
  console.log(routines && routines);

  const deptArrayData = ["CSE", "SWE"];
  const sectionArrayData = ["55-S", "55-A", "55-S", "55-A", "55-S", "55-A"];

  const handleSubmit = () => {
    dispatch(getRoutines(section, dept));
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
            {loading ? <Loading /> : "Find your section"}
          </button>
        </div>
        <div>Ok Thats it routine</div>
      </div>
    </div>
  );
};

export default Routine;
