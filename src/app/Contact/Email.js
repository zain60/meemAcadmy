"use client";
import React, { useState } from "react";
import CustomButton from "../../Components/Button/CustomButton";
const SERVICE_ID = "service_s9wpqvn"; // Replace with your Email.js service ID
const TEMPLATE_ID = "template_ipr71ss"; // Replace with your Email.js template ID
const USER_ID = "GWEzP5bR-SsX1yl3r"; // Replace with your Email.js user ID
import emailjs from "@emailjs/browser";

const Email = () => {
  const [emailData, setEmailData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setEmailData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSendEmail = () => {
    event.preventDefault();
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          message: emailData.message,
          from_name: emailData.subject,
          reply_to: emailData.email,
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
    <div>
      <form className="p-6 bg-gray-50 dark:bg-gray-900">
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400"
          >
            Email
          </label>
          <input
            type="text"
            placeholder="abc@gmail.com"
            required
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded"
            value={emailData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            for="subject"
            className="block mb-2 font-bold text-gray-700 uppercase"
          >
            Subject
          </label>
          <input
            type="text"
            placeholder="I'm asking information for..."
            required
            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded"
            value={emailData.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            for="message"
            className="block mb-2 font-bold text-gray-700 uppercase"
          >
            Message
          </label>
          <textarea
            type="message"
            placeholder="Describe your problem"
            required
            className="block w-full px-4 leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded dark:placeholder-gray-500 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800"
            value={emailData.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
        </div>
        <button onClick={() => handleSendEmail()}>
          <CustomButton name={"Send"} refrence="#" />
        </button>
      </form>
    </div>
  );
};

export default Email;
