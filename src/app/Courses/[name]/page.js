"use client";
// Pages/Courses/[name].js
import { usePathname } from "next/navigation";
import React from "react";
import CourseDetails from "../../../Components/Courses/CourseDeatils";
import courseDetailsData from "../../../Data/corseData.json";

const CoursePage = () => {
  const navigation = usePathname();
  const pathnameParts = navigation.split("/");
  const name = pathnameParts[pathnameParts.length - 1];

  const selectedCourseDetails = courseDetailsData.find(
    (course) =>
      course.courseTitle &&
      course.courseTitle.toLowerCase() === name.toLowerCase()
  );

  return (
    <div>
      {selectedCourseDetails ? (
        <CourseDetails courseDetails={selectedCourseDetails} />
      ) : (
        <p>Course details not found</p>
      )}
    </div>
  );
};

export default CoursePage;
