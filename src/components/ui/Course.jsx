import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCourses, getEnroll } from "../../Redux/CourseRedux/action";

function Course({ opencourse }) {
  const dispatch = useDispatch();
  const courses = useSelector((store) => store.courses.courses);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [openActions, setOpenActions] = useState({});
  const [isActionOpen, setIsActionOpen] = useState(false);
  const initialCourseStatuses = {};
  courses.forEach((course) => {
    initialCourseStatuses[course.id] = course.status;
  });
  const [courseStatuses, setCourseStatuses] = useState(initialCourseStatuses);

  useEffect(() => {
    dispatch(getCourses(courses));
  }, []);

  useEffect(() => {
    setDisplayedCourses(courses.slice(0, 10));
  }, [courses]);

  useEffect(() => {
    if (searchTriggered) {
      const filtered = courses.filter((course) =>
        Object.values(course).some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setDisplayedCourses(filtered);
    }
  }, [searchQuery, courses, searchTriggered]);

  const handleSearchIconClick = () => {
    setSearchTriggered(true);
  };
  const toggleActions = (courseId) => {
    setOpenActions((prevState) => ({
      ...prevState,
      [courseId]: !prevState[courseId],
    }));
    setIsActionOpen(!isActionOpen);
  };

  useEffect(() => {
    const storedStatuses = localStorage.getItem("courseStatuses");
    if (storedStatuses) {
      setCourseStatuses(JSON.parse(storedStatuses));
    }
  }, []);
  const handleCloseCourse = (courseId) => {
    const updatedStatuses = {
      ...courseStatuses,
      [courseId]: "Closed",
    };

    setCourseStatuses(updatedStatuses);

    localStorage.setItem("courseStatuses", JSON.stringify(updatedStatuses));
  };

  const handleArchiveCourse = (courseId) => {
    const updatedStatuses = {
      ...courseStatuses,
      [courseId]: "Archived",
    };

    setCourseStatuses(updatedStatuses);

    localStorage.setItem("courseStatuses", JSON.stringify(updatedStatuses));
  };

  const backgroundBlurClass = isActionOpen ? "abc" : "";
  return (
    <>
      <div
        onClick={() => {
          setOpenActions({});
          setIsActionOpen(false);
        }}
        className={`w-[full] px-10 m-auto flex flex-col overflow-auto h-[100vh]  gap-10 relative ${backgroundBlurClass}`}
      >
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <img
                onClick={handleSearchIconClick}
                className="absolute top-3.5 left-2"
                src={magnify}
                alt=""
              />
            </div>
          </div>
          <div
            className="tabledata shadow-2xl"
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
          >
            <Table>
              <TableHeader>
                <TableRow className="text-sm">
                  <TableHead className="">Name</TableHead>
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
                {displayedCourses.map((item) => (
                  <TableRow
                    className="osama border-b-[ #E5E7EB] text-sm p-0 "
                    key={item.id}
                  >
                    <TableCell className="py-0 ">{item.name}</TableCell>
                    <TableCell className="py-0 ">{item.name}</TableCell>
                    <TableCell className="py-0 ">{item.instructor}</TableCell>
                    <TableCell className="py-0 ">{item.instrument}</TableCell>
                    <TableCell className="py-0 ">Monday</TableCell>
                    <TableCell className="py-0 text-center ">3</TableCell>
                    <TableCell className="py-0 ">${item.price}</TableCell>
                    <TableCell className="py-0 ">
                      {item.status ? (
                        <span
                          className={`px-4 rounded-md py-1 ${
                            courseStatuses[item.id] === "Closed"
                              ? "text-blue bg-[#FEC0CA]"
                              : courseStatuses[item.id] === "Archived"
                              ? " bg-[#E5E7EB]"
                              : "text-[#83858B] bg-[#CFF9DF]"
                          }`}
                        >
                          {courseStatuses[item.id]}
                        </span>
                      ) : item.status === "Closed" ? (
                        <span className=" px-4 rounded-md text-blue py-1 bg-[#83858B]">
                          {courseStatuses[item.id]}
                        </span>
                      ) : (
                        <span className="bg-blue px-4 rounded-md text-white py-1">
                          {courseStatuses[item.id]}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="flex flex-row justify-center relative">
                      <img
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleActions(item.id);
                        }}
                        className="oso cursor-pointer"
                        src={dots}
                        alt=""
                      />
                      {openActions[item.id] && (
                        <div
                          className="action w-[167px] absolute rounded-lg -bottom-20 -left-28  p-2 flex flex-col gap-1 bg-white z-50"
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                          }}
                        >
                          <div className="z-50 flex flex-col gap-3 rounded-lg ">
                            <div className="">
                              <span className="sam cursor-pointer">
                                Edit Course
                              </span>
                            </div>
                            <div>
                              <span
                                onClick={() => handleCloseCourse(item.id)}
                                className="sam cursor-pointer"
                              >
                                Close Course
                              </span>
                            </div>
                            <div>
                              <span
                                onClick={() => handleArchiveCourse(item.id)}
                                className="sam cursor-pointer"
                              >
                                Archive Course
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="add-btn absolute right-10 -bottom-40 ">
          <Button className="bg-[#fec0ca] p-6 rounded-lg flex flex-row gap-3 text-black hover:text-white">
            <span onClick={opencourse} className="text-2xl">
              +
            </span>
            Add Course
          </Button>
        </div>
      </div>
    </>
  );
}

export default Course;
