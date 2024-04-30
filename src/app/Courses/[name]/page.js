"use client";
import React from "react";
import CourseDetails from "../../../Components/Courses/CourseDeatils";
import courseDetailsData from "../../../Data/corseData.json";

const CoursePage = ({params}) => {
  console.log({params})

  const selectedCourseDetails = courseDetailsData.find(
    (course) =>
      course.courseTitle &&
      course.courseTitle.toLowerCase() === params.name
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
