"use client";
import React, { useState } from "react";
import CustomButton from "../../Components/Button/CustomButton";
const SERVICE_ID = "service_s9wpqvn"; // Replace with your Email.js service ID
const TEMPLATE_ID = "template_ipr71ss"; // Replace with your Email.js template ID
const USER_ID = "GWEzP5bR-SsX1yl3r"; // Replace with your Email.js user ID
import emailjs from "@emailjs/browser";

const page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    tutorReason: "",
    gradeLevel: "",
    selectedSubjects: [],
  });

  const handleChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  const handleSubjectChange = (subject) => {
    setFormData((prevData) => {
      const selectedSubjects = [...prevData.selectedSubjects];
      if (selectedSubjects.includes(subject)) {
        selectedSubjects.splice(selectedSubjects.indexOf(subject), 1);
      } else {
        selectedSubjects.push(subject);
      }

      return {
        ...prevData,
        selectedSubjects,
      };
    });
  };

  const handleSubmit = (e) => {
    event.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      tutorReason: "",
      gradeLevel: "",
      selectedSubjects: [],
    });

    const formDataParagraph = `
  Greeting!
      Myself ${formData.firstName} ${formData.lastName}. My Email is ${
      formData.email
    } and my Phone Number is ${formData.phoneNumber}. I want tuition for ${
      formData.tutorReason
    } for Grade Level ${formData.gradeLevel} for the Following Subjects:
      Selected Subjects: ${formData.selectedSubjects.join(", ")}
    `;
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          message: formDataParagraph,
          from_name: formData.firstName,
          reply_to: formData.email,
        },
        USER_ID
      )
      .then((response) => {
        alert("SUCCESS! ,Thankyou for your messege");
      })
      .catch((error) => {
        alert("Fail! ,Error in message");
      });
  };
  return (
    <div className="p-6 pt-32  bg-yellowNew flex flex-col lg:flex-row ">
      <div className="w-[75r%]">
        <form noValidate onSubmit={(e) => handleSubmit(e)}>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-bold text-xl">Personal Inormation</p>
              <p className="text-lg">
                Please Fill out this form about Your Basic Information
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-sm">
              <div className="col-span-full sm:col-span-3">
                <label for="firstname" className="text-lg">
                  First name
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full h-10 rounded-md "
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="lastname" className="text-lg">
                  Last name
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="last name"
                  className="w-full h-10 rounded-md "
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-lg">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="email"
                  className="w-full h-10 rounded-md "
                  autoComplete="true"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="phoneNumber" className="text-lg">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  type="text"
                  placeholder="phoneNumber"
                  className="w-full h-10 rounded-md "
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-1 justify-center items-center gap-6 p-6 rounded-md shadow-sm">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className=" font-bold text-xl">Why Need Tutor</p>
              <p className="text-lg">
                Fill the following Form to tell us Why You want to have an
                Tutor!
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-gray-900 ">
                Why You Need a tutor ?
              </h3>
              <ul className=" w-full flex justify-center font-semibold  text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
                <li className="w-full text-lg border-b border-gray-200 sm:border-b-0 sm:border-r">
                  <div className="flex items-center justify-center ps-3">
                    <input
                      id="for-myself"
                      type="radio"
                      checked={formData.tutorReason === "For MySelf"}
                      onChange={() => handleChange("tutorReason", "For MySelf")}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      for="for-myself"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 whitespace-nowrap"
                    >
                      For MySelf
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                  <div className="flex items-center ps-3">
                    <input
                      id="for-mySon"
                      type="radio"
                      checked={formData.tutorReason === "For MySon"}
                      onChange={() => handleChange("tutorReason", "For MySon")}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      for="for-mySon"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 whitespace-nowrap "
                    >
                      For MySon
                    </label>
                  </div>
                </li>
                <li className="  border-b border-gray-200 sm:border-b-0 sm:border-r">
                  <div className="flex items-center ps-3">
                    <input
                      id="for-SomeOneElse"
                      type="radio"
                      checked={formData.tutorReason === "For SomeOneElse"}
                      onChange={() =>
                        handleChange("tutorReason", "For SomeOneElse")
                      }
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      for="for-SomeOneElse"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 whitespace-nowrap "
                    >
                      For SomeOneElse
                    </label>
                  </div>
                </li>
              </ul>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                What grade level?
              </h3>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="Elementary School"
                      type="radio"
                      checked={formData.gradeLevel === "Elementary School"}
                      onChange={() =>
                        handleChange("gradeLevel", "Elementary School")
                      }
                    />
                    <label
                      for="Elementary School"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap"
                    >
                      Elementary School
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="Middle School"
                      type="radio"
                      checked={formData.gradeLevel === "Middle School"}
                      onChange={() =>
                        handleChange("gradeLevel", "Middle School")
                      }
                    />
                    <label
                      for="Middle School"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap"
                    >
                      Middle School
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="High School"
                      type="radio"
                      checked={formData.gradeLevel === "High School"}
                      onChange={() => handleChange("gradeLevel", "High School")}
                    />
                    <label
                      for="High School"
                      className=" py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap"
                    >
                      High School
                    </label>
                  </div>
                </li>
              </ul>
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Select Subject
              </h3>
              <ul className=" items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="Quran"
                      type="checkbox"
                      checked={formData.selectedSubjects.includes("Quran")}
                      onChange={() => handleSubjectChange("Quran")}
                    />
                    <label
                      For="Quran"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                    >
                      Quran
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                  <div className="flex items-center ps-3">
                    <input
                      id="Arabic"
                      type="checkbox"
                      checked={formData.selectedSubjects.includes("Arabic")}
                      onChange={() => handleSubjectChange("Arabic")}
                    />
                    <label
                      for="Arabic"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                    >
                      Arabic
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                  <div className="flex items-center ps-3">
                    <input
                      id="Urdu"
                      type="checkbox"
                      checked={formData.selectedSubjects.includes("Urdu")}
                      onChange={() => handleSubjectChange("Urdu")}
                    />
                    <label
                      for="Urdu"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 whitespace-nowrap "
                    >
                      Urdu
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                  <div className="flex items-center ps-3">
                    <input
                      id="English"
                      type="checkbox"
                      checked={formData.selectedSubjects.includes("English")}
                      onChange={() => handleSubjectChange("English")}
                    />
                    <label
                      for="English"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 whitespace-nowrap "
                    >
                      English
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                  <div className="flex items-center ps-3">
                    <input
                      id="Physics"
                      type="checkbox"
                      checked={formData.selectedSubjects.includes("Physics")}
                      onChange={() => handleSubjectChange("Physics")}
                    />
                    <label
                      for="Physics"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 whitespace-nowrap "
                    >
                      Physics
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                  <div className="flex items-center ps-3">
                    <input
                      id="Chemistory"
                      type="checkbox"
                      checked={formData.selectedSubjects.includes("Chemistory")}
                      onChange={() => handleSubjectChange("Chemistory")}
                    />
                    <label
                      for="Chemistory"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 whitespace-nowrap "
                    >
                      Chemistory
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                  <div className="flex items-center ps-3">
                    <input
                      id="Math"
                      type="checkbox"
                      checked={formData.selectedSubjects.includes("Math")}
                      onChange={() => handleSubjectChange("Math")}
                    />
                    <label
                      for="Math"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 whitespace-nowrap "
                    >
                      Math
                    </label>
                  </div>
                </li>
              </ul>
              <div className="flex flex-row mt-10 justify-center item">
                <CustomButton name="cancel" refrence="/" />

                <button onClick={() => handleSubmit()}>
                  <CustomButton name="Submit" refrence="#" />
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <div className=" lg:pt-52 xl:pt-36">
        <img
          src="/Assets/fill Foam.jpg"
          alt="images"
          height="300"
          width="500"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default page;
