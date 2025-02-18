"use client";
import { useEffect, useState } from "react";
import { getCommentsPage } from "@/sanity/sanity-utils";
import Image from "next/image";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
  subscriber: boolean;
}

function SubmitComments() {
  interface CommentsPage {
    title: string;
    description: string;
    formSubtitle: string;
    formFields: FormFields;
    mainImage: {
      asset: {
        url: string;
      };
      alt: string;
    };
  }

  const [commentsPage, setCommentsPage] = useState<CommentsPage | null>(null);
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
    subscriber: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch the comments page data client-side when the component mounts
    const fetchCommentsPage = async () => {
      const data = await getCommentsPage();
      setCommentsPage(data);
    };

    fetchCommentsPage();
  }, []);

  // skeleton loading state
  if (!commentsPage) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skeleton for Comment Form */}
          <div className="flex flex-col space-y-4">
            <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-300 rounded"></div>
              <div className="h-8 bg-gray-300 rounded"></div>
              <div className="h-8 bg-gray-300 rounded"></div>
              <div className="h-8 bg-gray-300 rounded"></div>
              <div className="h-8 bg-gray-300 rounded"></div>
            </div>
            <div className="h-10 bg-gray-300 rounded w-1/4"></div>
          </div>

          {/* Skeleton for Image */}
          <div className="flex items-center justify-center">
            <div className="w-72 h-36 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const formFields: FormFields = commentsPage.formFields || {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    subscriber: false,
  };

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
    <div className="container mx-auto px-4 py-8">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold">{commentsPage.title}</h1>
        <p className="text-lg text-gray-700">{commentsPage.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Comment Form */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold">
            {commentsPage.formSubtitle}
          </h2>
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
              />
            </div>
            <div>
              <label htmlFor="subscriber" className="block">
                {formFields.subscriber || "Keep me updated on this project!"}
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
        </div>

        {/* Image */}
        <div className="flex items-center justify-center">
          <Image
            src={commentsPage.mainImage.asset.url}
            alt={commentsPage.mainImage.alt || "Default alt text"}
            priority
            width={400}
            height={200}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SubmitComments;
