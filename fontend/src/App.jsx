import { Route, Routes } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import { loadUser } from "./redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import RoleRoute from "./components/RoleRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPassword from "./pages/Authentication/ResetPassword";
import Navbar from "./components/Navbar";
import AdminLogin from "./pages/Authentication/AdminLogin";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateTeacher from "./pages/AdminAccess/CreateTeacher";
import CreateStudent from "./pages/AdminAccess/CreateStudent";
import AllStudent from "./pages/AdminAccess/AllStudent";
import AllTeacher from "./pages/AdminAccess/AllTeacher";
import Question from "./pages/StudentAccess/Question";

function App() {
  const dispatch = useDispatch();
  const { isAutenticated } = useSelector((state) => state.user);
  const [showSidebar, setShowSidebar] = useState(false);

  //Set Role Type for Forgot Authentication
  const [role, setRole] = useState("Student");
  const [roleType, setRoleType] = useState(true);

  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <div>
      <ToastContainer />
      <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <Sidebar showSidebar={showSidebar} />
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              role={role}
              setRole={setRole}
              roleType={roleType}
              setRoleType={setRoleType}
            />
          }
        />
        <Route
          path="/forgot-password"
          element={<ForgotPassword role={role} />}
        />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">Thats for testing</RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-teacher"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">
                <CreateTeacher />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-student"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">
                <CreateStudent />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/all-teacher"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">
                <AllTeacher />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/all-student"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">
                <AllStudent />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/questions"
          element={
            <ProtectedRoute>
              <RoleRoute role="Student">
                <Question />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
