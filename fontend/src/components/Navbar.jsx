import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SidebarIcon from "../assets/icons/sidebar.png";
import ProfileImage from "../assets/Avatar/Profile.png";
import { logOut } from "../redux/actions/userAction";

const Navbar = ({ setShowSidebar, showSidebar }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <>
      {isAuthenticated && (
        <div className="bg-blue2 flex justify-between items-center py-3 px-3 sm:px-12 shadow-input fixed w-full z-50">
          <img
            className="h-7 sm:h-7 md:h-9 cursor-pointer"
            src={SidebarIcon}
            onClick={() => setShowSidebar(!showSidebar)}
          />
          <div className="flex items-center relative">
            <div className="flex items-center h-full cursor-pointer">
              {/* {user.avatar.url ? (
                <img src={user.avatar.url} />
              ) : (
                <img src={ProfileImage} />
              )} */}
              <img className=" mr-2 h-8 sm:h-8 lg:h-10 " src={ProfileImage} />

              <p className="font-poppins text-white text-xs sm:text-md lg:text-base">
                {user.name && user.name ? user.name : `${user.role} Name`}
              </p>
            </div>
            <button
              className="text-white text-xs  ml-4 border-2 font-poppins font-light border-border1  rounded-md py-1 px-3 lg:px-6 "
              onClick={() => dispatch(logOut())}
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
