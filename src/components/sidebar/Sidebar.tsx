import Image from "next/image";
import React from "react";
import FirstList from "./FirstList";
import SecondList from "./SecondList";
import Thoughts from "./Thoughts";

const list1 = [
  {
    id: 1,
    icon: "/sidebar/category.svg",
    title: "Home",
  },
  {
    id: 2,
    icon: "/sidebar/message.svg",
    title: "Messages",
  },
  {
    id: 3,
    icon: "/sidebar/task-square.svg",
    title: "Tasks",
  },
  {
    id: 4,
    icon: "/sidebar/profile-2user.svg",
    title: "Members",
  },
  {
    id: 5,
    icon: "/sidebar/setting-2.svg",
    title: "Settings",
  },
];

const list2 = [
  {
    id: 1,
    src: "/sidebar/bulletgreen.svg",
    title: "Mobile App",
  },
  {
    id: 2,
    src: "/sidebar/bulletorange.svg",
    title: "Website Redesign",
  },
  {
    id: 3,
    src: "/sidebar/bulletpurple.svg",
    title: "Design System",
  },
  {
    id: 4,
    src: "/sidebar/bulletblue.svg",
    title: "Wireframes",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[260px] h-[932px] flex flex-col border-[#DBDBDB] border-r">
      <div className="flex justify-between items-center w-full mt-4 text-xl mb-5 font-semibold">
        <div className="flex justify-start items-center space-x-1 w-9/12 px-4">
          <Image src="/sidebar/colorfilter.svg" alt="" width={24} height={24} />
          <span className="text-[#0D062D]">Project M.</span>
        </div>
        <div className="flex justify-end pr-3 items-center space-x-3 w-3/12 cursor-pointer">
          <Image src="/sidebar/leftarrow.svg" alt="" width={24} height={24} />
        </div>
      </div>
      <hr />
      <FirstList list={list1} />
      <hr />
      <div className="my-6 w-full text-base">
        <div className="text-[#787486] flex justify-between items-center px-6 w-full">
          <span className="uppercase text-xs font-bold">My Projects</span>
          <Image src="/sidebar/add-square.svg" alt="" width={14} height={14} />
        </div>
        <SecondList list={list2} />
      </div>
      <div className="my-12 w-full mx-auto ">
        <Thoughts />
      </div>
    </div>
  );
};

export default Sidebar;
