import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import dots from "../../assets/Vector (6).png";
import magnify from "../../assets/mdi_magnify.png";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Course() {
  return (
    <>
      <div className="w-[full] px-10 m-auto flex flex-col h-[100vh] gap-10 relative">
        <div className="top text-[28px] text-[#83858B]">
          <span>Courses</span>
        </div>
        <div className="course-data flex flex-col gap-10">
          <div className="heading flex flex-row justify-between">
            <div className="heading text-[28px] text-[#83858B]">
              <span>Course List</span>
            </div>
            <div className="inp w-[237px] relative">
              <Input
                className="px-8 text-sm text-[#83858B]"
                type="email"
                placeholder="Search"
              />
              <img className="absolute top-3.5 left-2" src={magnify} alt="" />
            </div>
          </div>
          <div
            className="tabledata shadow-2xl"
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
          >
            <Table>
              <TableHeader>
                <TableRow className="text-sm">
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Instrument</TableHead>
                  <TableHead>Day of Week</TableHead>
                  <TableHead># of Students</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-center text-black font-[600]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="osama border-b-[ #E5E7EB] text-sm p-0 ">
                  <TableCell className="py-0 ">Course</TableCell>
                  <TableCell className="py-0 ">Instructor</TableCell>
                  <TableCell className="py-0 ">Instructor</TableCell>
                  <TableCell className="py-0 ">Instructor</TableCell>
                  <TableCell className="py-0 ">Instructor</TableCell>
                  <TableCell className="py-0 ">Instructor</TableCell>
                  <TableCell className="py-0 ">Instructor</TableCell>
                  <TableCell className="py-0 ">
                    <span className="bg-[#CFF9DF] px-4 rounded-md text-[#83858B] py-1">
                      Active
                    </span>
                  </TableCell>
                  <TableCell className="flex flex-row justify-center">
                    <img className="oso cursor-pointer" src={dots} alt="" />
                  </TableCell>
                </TableRow>
                <TableRow className="osama border-b-[ #E5E7EB] text-sm p-0 ">
                  <TableCell className="py-0 text-[#212529] ">Course</TableCell>
                  <TableCell className="py-0 ">Instructor</TableCell>
                  <TableCell className="py-0 ">Instructor</TableCell>
                  <TableCell className="py-0 ">Instructor</TableCell>
                  <TableCell className="py-0 ">Instructor</TableCell>
                  <TableCell className="py-0 ">Instructor</TableCell>
                  <TableCell className="py-0 ">Instructor</TableCell>
                  <TableCell className="py-0 ">
                    <span className="bg-[#CFF9DF] px-4 rounded-md text-[#83858B] py-1">
                      Active
                    </span>
                  </TableCell>
                  <TableCell className="flex flex-row justify-center">
                    <img className="oso cursor-pointer" src={dots} alt="" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="add-btn absolute right-10 bottom-10 ">
          <Button className="bg-[#fec0ca] p-6 rounded-lg flex flex-row gap-3 text-black hover:text-white">
            <span className="text-2xl">+</span>Add Course
          </Button>
        </div>
      </div>
    </>
  );
}

export default Course;
