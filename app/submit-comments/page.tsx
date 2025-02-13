import { getCommentsPage } from "@/sanity/sanity-utils";
import Image from "next/image";

async function SubmitComments() {
  const commentsPage = await getCommentsPage();

  const formFields = commentsPage.formFields || {};

  if (!commentsPage) {
    return (
      <div className="animate-pulse">
        <div className="h-6 bg-gray-300 rounded mb-4"></div>
        <div className="h-6 bg-gray-300 rounded mb-4"></div>
        <div className="h-6 bg-gray-300 rounded mb-4"></div>
        <div className="h-6 bg-gray-300 rounded mb-4"></div>
      </div>
    );
  }

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
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block">
                {formFields.name || "Name"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
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
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>

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
