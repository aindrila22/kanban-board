import Image from "next/image";
import React, { useState } from "react";
import Search from "./Search";
import Section from "../sidebar/SidebarSection";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const handleOpenMenu = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="w-full ">
      <div className="flex justify-between w-full px-7">
        <div
          onClick={handleOpenMenu}
          className="md:hidden block px-1 py-4 cursor-pointer"
        >
          {!showSidebar ? (
            <Image src="/sidebar/menu.svg" alt="menu" width={25} height={25} />
          ) : (
            <Image src="/navbar/cancel.svg" alt="menu" width={25} height={25} />
          )}
        </div>
        <div className="flex ml-2 md:hidden">
          <Image
            src="/navbar/Mask Group.svg"
            alt="calendar"
            className="cursor-pointer rounded-full"
            width={40}
            height={40}
          />
          <Image
            src="/navbar/arrow-down.svg"
            alt="calendar"
            className="cursor-pointer ml-2"
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className={`${showSidebar ? "block z-50 w-full" : "hidden"}`}>
        <Section />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:block hidden h-[56px] px-6 mt-2">
          <Search />
        </div>
        <div className="w-full md:h-[56px] flex justify-center items-center mt-2">
          <div className="md:flex hidden justify-center items-center space-x-5 w-full">
            <Image
              src="/navbar/calendar-2.svg"
              alt="calendar"
              className="cursor-pointer"
              width={20}
              height={20}
            />
            <Image
              src="/navbar/message-question.svg"
              alt="message"
              className="cursor-pointer"
              width={20}
              height={20}
            />
            <Image
              src="/navbar/notification.svg"
              alt="notification"
              className="cursor-pointer"
              width={20}
              height={20}
            />
          </div>
          <div className="md:flex hidden justify-center items-center w-full px-6">
            <div className="text-end mr-3 hidden xl:block">
              <span className="text-base">Anima Agrawal</span>
              <br />
              <span className="text-sm text-[#787486]">U.P, India</span>
            </div>
            <div className="flex ml-2">
              <Image
                src="/navbar/Mask Group.svg"
                alt="calendar"
                className="cursor-pointer rounded-full"
                width={40}
                height={40}
              />
              <Image
                src="/navbar/arrow-down.svg"
                alt="calendar"
                className="cursor-pointer ml-2"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:hidden block h-[56px] px-6 mt-2">
          <Search />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
