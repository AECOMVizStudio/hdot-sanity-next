// CommentForm.tsx
import React, { useState } from "react";

interface CommentFormProps {
  formFields: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}

const CommentForm: React.FC<CommentFormProps> = ({ formFields }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Comment submitted successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("There was an error submitting your comment.");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block">
          {formFields.name || "Name"}
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
          {formFields.email || "Email"}
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
          {formFields.subject || "Subject"}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block">
          {formFields.message || "Message"}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
