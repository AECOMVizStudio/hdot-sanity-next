import { getCommentsPage } from "@/sanity/sanity-utils";
import Image from "next/image";
import { CommentsPage } from "@/types/CommentsPage";
import CommentForm from "@/components/Comments/commentForm";

async function SubmitComments() {
  try {
    const commentsPage: CommentsPage = await getCommentsPage();

    return (
      <div className="container mx-auto px-4 py-8">
        {/* Title and Description */}
        <div className="flex flex-col items-start md:items-center mb-8">
          <h1 className="text-3xl font-semibold text-hdotTeal">
            {commentsPage.title}
          </h1>
          <p className="text-lg text-hdotTeal">{commentsPage.description}</p>
          <hr className="border-t-2 border-hdotTeal my-4 w-1/2 md:w-1/4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Comment Form */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold">
              {commentsPage.formSubtitle}
            </h2>
            <CommentForm />
          </div>

          {/* Image - Centered within its grid cell */}
          <div className="flex justify-center items-center">
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
  } catch (error) {
    console.error("Failed to fetch comments page data:", error);
    return <div>Failed to load comments page data.</div>;
  }
}

export default SubmitComments;
