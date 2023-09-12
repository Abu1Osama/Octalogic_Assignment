import React, { useState } from "react";
import Course from "./Course";
import dashboard from "../../assets/dashboard.svg";
import music from "../../assets/music.svg";
import logo from "../../assets/Logo.png";
import logootlogo from "../../assets/mdi_logout.svg";
import Overview from "./Overview";

function Sidebar() {
    const [sidebartabVisible, setSidebartabVisible] = useState(true);
  const [sidebardata, setSidebardata] = useState([
    {
      name: "Home",
      image: dashboard,
      active: "active",
    },
    {
      name: "Courses",
      image: music,
      active: "none",
    },
  ]);
  const [currentindex, setCurrentindex] = useState(0);

  const toggleSidebartab = () => {
    setSidebartabVisible(!sidebartabVisible);
  };
  return (
    <div className="flex flex-row h-[100vh] " id="page">
      <div
        className={`w-[96px] h-[100%] flex flex-col gap-8 py-3 items-center ${sidebartabVisible ? "block" : "hidden"}`}
        id="sidebar"
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
      >
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className={`grid gap-1 px-1 ${sidebartabVisible ? "block" : "hidden"}`}  >
          {sidebardata.map((item, index) => (
            <div
              onClick={() => {
                setCurrentindex(index);
                const updatedData = sidebardata.map((dataItem, dataIndex) => ({
                  ...dataItem,
                  active: dataIndex === index ? "active" : "none",
                }));
                setSidebardata(updatedData);
              }}
              className={`flex flex-col items-center p-2 cursor-pointer rounded-lg ${
                item.active === "active" ? "bg-[#FEDFE1] text-[#901E75]" : "bg-[#E5E7EB]"
              }`}
              key={index}
            >
              <img src={item.image} alt=""  />
              <span className={` ${item.active === "active" ? " text-[#901E75]" : "text-[ #83858B]"}`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className="flex-grow"></div>
        <div className="logout flex flex-col justify-items-end cursor-pointer ">
            <img src={logootlogo} alt="" />
        </div>
      </div>

      <div className="w-full">
        {currentindex === 0 ?  <Overview/>:<Course/> }
      </div>
    </div>
  );
}

export default Sidebar;
