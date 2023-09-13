import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function CourseForm({ onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({
    name: "",
    description: "",
    instructor: "",
    instrument: "",
    dayOfWeek: "",
    price: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };
  const submitCourseData = () => {
    // addCourse(courseData);

    // onClose();
    console.log(courseData)
  };



  return (
    <div className="coursecol fixed top-0 w-full h-[100vh] p-20">
      <div className="bg-white border p-3 flex flex-col gap-4 w-[40%] m-auto rounded-2xl">
        <h2 className=" text-[22px] text-[#212529]">Add Course</h2>
        <div className="flex flex-col gap-2">
            <form >

          <Input
            className="text[12px] text-[#83858B]"
            type="text"
            placeholder="Course Name"
            name="name"
            value={courseData.name}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Description"
            name="description"
            value={courseData.description}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Instructor"
            name="instructor"
            value={courseData.instructor}
            onChange={handleChange}
          />
          <Select>
            <SelectTrigger className="">
              <SelectValue
                placeholder="Instrument"
                name="instrument"
                value={courseData.instrument}
                onChange={handleChange}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="guitar">Guitar</SelectItem>
              <SelectItem value="flute">Flute</SelectItem>
              <SelectItem value="piano">Piano</SelectItem>
              <SelectItem value="violin">Violin</SelectItem>
              <SelectItem value="drums">Drums</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="">
              <SelectValue
                placeholder="Day of the week"
                name="dayOfWeek"
                value={courseData.dayOfWeek}
                onChange={handleChange}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Sunday">Sunday</SelectItem>
              <SelectItem value="Monday">Monday</SelectItem>
              <SelectItem value="Tuesday">Tuesday</SelectItem>
              <SelectItem value="Wednesday">Wednesday</SelectItem>
              <SelectItem value="Thursday">Thursday</SelectItem>
              <SelectItem value="Friday">Friday</SelectItem>
              <SelectItem value="Saturday">Saturday</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="text"
            placeholder="Price"
            name="price"
            value={courseData.price}
            onChange={handleChange}
          />
            </form>

        </div>
        <div className="flex gap-2 justify-end items-center">
          <span
            className="text-[14px] text-[#212529] cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </span>
          <Button
            className="bg-[#FEC0CA] text-[#212529] font-[400] hover:text-white px-4 py-2"
            onClick={submitCourseData}
          >
            Add Course
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CourseForm;
