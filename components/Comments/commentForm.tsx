"use client";

import { useState } from "react";
// import { Comment } from "@/types/Comment";

const commentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    subscriber: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const commentsPage = {
    formFields: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      subscriber: "Subscribe to newsletter",
    },
  };

  // Handle form input
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;

    // Check if the element is a checkbox
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value, // If it's a checkbox, use `checked`, otherwise `value`
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Make your API request here, sending formData
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Response", response);

      // Reset form data after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        subscriber: false,
      });
      alert("Thank you for your submission!");
    } catch {
      alert("There was an error submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
    console.log("Form submitted", formData);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block">
          {commentsPage.formFields.name || "Name"}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block">
          {commentsPage.formFields.email || "Email"}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="subject" className="block">
          {commentsPage.formFields.subject || "Subject"}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="message" className="block">
          {commentsPage.formFields.message || "Message"}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="subscriber" className="block">
          {}
        </label>
        <input
          type="checkbox"
          id="subscriber"
          name="subscriber"
          checked={formData.subscriber}
          onChange={handleChange}
          className="w-4 h-4 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="btn" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default commentForm;
