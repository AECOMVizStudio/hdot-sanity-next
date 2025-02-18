import { NextApiRequest, NextApiResponse } from "next";
import { createComment } from "@/sanity/sanity-utils"; // import the createComment function
import { Comment } from "@/types/Comment"; // Import the Comment type

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const commentData: Comment = req.body;

      // Simple validation (you can add more checks as needed)
      if (!commentData.name || !commentData.email || !commentData.message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Call the createComment function to save the comment in Sanity
      const newComment = await createComment(commentData);

      // Respond with the created comment data
      res.status(200).json(newComment);
    } catch (error) {
      console.error("Error creating comment:", error);
      res.status(500).json({ message: "Error creating comment" });
    }
  } else {
    // Handle other HTTP methods if needed
    res.status(405).json({ message: "Method not allowed" });
  }
}
