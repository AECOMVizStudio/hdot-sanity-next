import { getCommentsPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { CommentsPage } from "@/types/CommentsPage";

async function SubmitComments() {
  const commentsPage = await getCommentsPage();

  const formFields = commentsPage.formFields || {};
  return (
    <>
      {/* Page Title */}
      <h1>{commentsPage.title}</h1>

      {/* Page Description */}
      <p>{commentsPage.description}</p>

      {/* Main Image */}

      <Image
        src={commentsPage.mainImage.asset.url}
        alt="Main image"
        width={800}
        height={400}
      />

      {/* Form Subtitle */}
      <h2>{commentsPage.formSubtitle}</h2>

      {/* Comment Form */}
      <form>
        <div>
          <label htmlFor="name">{formFields.name || "Name"}</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">{formFields.email || "Email"}</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="subject">{formFields.subject || "Subject"}</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div>
          <label htmlFor="message">{formFields.message || "Message"}</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default SubmitComments;
