import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import user from "../../assets/ic_baseline-people.svg";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, getEnroll } from "../../Redux/CourseRedux/action";

function Overview() {
  const dispatch = useDispatch();
  const overview = useSelector((store) => store.courses.enrollment);

  useEffect(() => {
    dispatch(getEnroll(overview));
  }, []);

  return (
    <>
      <div className="w-[full] px-10 m-auto flex flex-col h-[100vh] overflow-auto gap-10 relative">
        <div className="top text-[28px] text-[#83858B]">
          <span>Overview</span>
        </div>
        <div className="card flex flex-row gap-3">
          <div
            className="card-child  px-5 py-3  w-[19%] flex flex-col  gap-2  rounded-lg"
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
          >
            <div className="flex flex-row items-center gap-4">
              <div>
                <img src={user} alt="" />
              </div>

              <div className="flex flex-col">
                <span className="text-[22px] font-normal">
                  {overview.length}
                </span>
                <span className="text-[12px] text-[#83858B]">
                  from $4400 last month
                </span>
              </div>
            </div>
            <div className="text-right flex justify-end">
              <span className="text-[#B33086] text-[9px]">View</span>
            </div>
          </div>
          <div
            className="card-child  px-5 py-3  w-[19%] flex flex-col  gap-2  rounded-lg"
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
          >
            <div className="flex flex-row items-center gap-4">
              <div>
                <img src={user} alt="" />
              </div>

              <div className="flex flex-col">
                <span className="text-[22px] font-normal">12</span>
                <span className="text-[12px] text-[#83858B]">
                  total number of courses
                </span>
              </div>
            </div>
            <div className="text-right flex justify-end">
              <span className="text-[#B33086] text-[9px]">View</span>
            </div>
          </div>

          <div
            className="card-child  px-5 py-3  w-[19%] flex flex-col  gap-2  rounded-lg"
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
          >
            <div className="flex flex-row items-center gap-4">
              <div>
                <img src={user} alt="" />
              </div>

              <div className="flex flex-col">
                <span className="text-[22px] font-normal">$2000</span>
                <span className="text-[12px] text-[#83858B]">
                  total amount earned
                </span>
              </div>
            </div>
            <div className="text-right flex justify-end">
              <span className="text-[#B33086] text-[9px]">View</span>
            </div>
          </div>

          <div
            className="card-child  px-5 py-3  w-[19%] flex flex-col  gap-2  rounded-lg"
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
          >
            <div className="flex flex-row items-center gap-4">
              <div>
                <img src={user} alt="" />
              </div>

              <div className="flex flex-col">
                <span className="text-[22px] font-normal">Guitar</span>
                <span className="text-[12px] text-[#83858B]">
                  best performing course
                </span>
              </div>
            </div>
            <div className="text-right flex justify-end">
              <span className="text-[#B33086] text-[9px]">View</span>
            </div>
          </div>
          <div
            className="card-child  px-5 py-3  w-[19%] flex flex-col  gap-2  rounded-lg"
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
          >
            <div className="flex flex-row items-center gap-4">
              <div>
                <img src={user} alt="" />
              </div>

              <div className="flex flex-col">
                <span className="text-[22px] font-normal">Flute</span>
                <span className="text-[12px] text-[#83858B]">
                  worst performing course
                </span>
              </div>
            </div>
            <div className="text-right flex justify-end">
              <span className="text-[#B33086] text-[9px]">View</span>
            </div>
          </div>
        </div>
        <div className="first">
          <div className="course-data flex flex-col gap-2">
            <div className="heading flex flex-row justify-between">
              <div className="heading text-[16px] text-[#83858B]">
                <span>Latest Enrolments</span>
              </div>
              <div className="text-[#901E75]">
                <span>View All Courses</span>
              </div>
            </div>
            <div
              className="tabledata p-5 rounded-xl"
              style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
            >
              <Table>
                <TableHeader>
                  <TableRow className="text-sm">
                    <TableHead
                      className="font-bold text-black"
                      style={{ width: "10%" }}
                    >
                      Enr. No
                    </TableHead>
                    <TableHead
                      className="font-bold text-black"
                      style={{ width: "20%" }}
                    >
                      S. Name
                    </TableHead>
                    <TableHead
                      className="font-bold text-black"
                      style={{ width: "20%" }}
                    >
                      C. Name
                    </TableHead>
                    <TableHead
                      className="font-bold text-black"
                      style={{ width: "15%" }}
                    >
                      Fees
                    </TableHead>
                    <TableHead
                      className="font-bold text-black text-right"
                      style={{ width: "15%" }}
                    >
                      Enr. Date
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {overview.slice(0, 5).map((item) => (
                    <TableRow className="osama border-b-[ #E5E7EB] text-sm p-0">
                      <TableCell className="py-2" style={{ width: "20%" }}>
                        {item.enrno}
                      </TableCell>
                      <TableCell className="py-2" style={{ width: "20%" }}>
                        {item.First_Name + " " + item.last_name}
                      </TableCell>
                      <TableCell className="py-2" style={{ width: "20%" }}>
                        {item.name}
                      </TableCell>
                      <TableCell className="py-2" style={{ width: "20%" }}>
                        $123
                      </TableCell>
                      <TableCell
                        className="text-right py-1"
                        style={{ width: "20%" }}
                      >
                        {item.EnrDate}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        <div className="second">
          <div className="course-data flex flex-col gap-2">
            <div className="heading flex flex-row justify-between">
              <div className="heading text-[16px] text-[#83858B]">
                <span>Best Students</span>
              </div>
              <div className="text-right text-[#901E75]">
                <span>View All Students</span>
              </div>
            </div>
            <div
              className="tabledata  p-5 rounded-xl"
              style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
            >
              <Table>
                <TableHeader>
                  <TableRow className="text-sm">
                    <TableHead
                      className="font-bold text-black"
                      style={{ width: "16.66%" }}
                    >
                      Reg. No
                    </TableHead>
                    <TableHead
                      className="font-bold text-black"
                      style={{ width: "16.66%" }}
                    >
                      F. Name
                    </TableHead>
                    <TableHead
                      className="font-bold text-black"
                      style={{ width: "16.66%" }}
                    >
                      L. Name
                    </TableHead>
                    <TableHead
                      className="font-bold text-black"
                      style={{ width: "16.66%" }}
                    >
                      Course #
                    </TableHead>
                    <TableHead
                      className="font-bold text-black"
                      style={{ width: "16.66%" }}
                    >
                      Total Fees
                    </TableHead>
                    <TableHead
                      className="font-bold text-black text-right"
                      style={{ width: "16.66%" }}
                    >
                      Reg. Date
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {overview.slice(0, 5).map((item) => (
                    <TableRow className="osama border-b-[ #E5E7EB] text-sm p-0">
                      <TableCell className="py-2" style={{ width: "16.66%" }}>
                        {item.regno}
                      </TableCell>
                      <TableCell className="py-2" style={{ width: "16.66%" }}>
                        {item.First_Name}
                      </TableCell>
                      <TableCell className="py-2" style={{ width: "16.66%" }}>
                        {item.last_name}
                      </TableCell>
                      <TableCell className="py-2" style={{ width: "16.66%" }}>
                        3
                      </TableCell>
                      <TableCell className="py-2" style={{ width: "16.66%" }}>
                        $300
                      </TableCell>
                      <TableCell
                        className="text-right py-1"
                        style={{ width: "16.66%" }}
                      >
                        {item.reddate}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
