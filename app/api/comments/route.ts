import { NextResponse, NextRequest } from "next/server";
import { client } from "@/sanity/sanity-utils"; // Import the Sanity client
import { z } from "zod"; // For validation

// Define the comment schema with zod for validation
const CommentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  subject: z.string().optional(),
  message: z.string().optional(),
  subscriber: z.boolean().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming JSON request body
    const body = await request.json();

    // Validate the incoming data with the Zod schema
    const parsedData = CommentSchema.parse(body);

    // Save the comment to Sanity
    const newComment = await client.create({
      _type: "comments", // Name of the schema
      name: parsedData.name,
      email: parsedData.email,
      subject: parsedData.subject || "", // Default to an empty string if not provided
      message: parsedData.message || "", // Default to an empty string if not provided
      subscriber: parsedData.subscriber || false, // Default to false if not provided
    });

    // Return a success response
    return NextResponse.json(
      { message: "Comment submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while submitting comment:", error);
    return NextResponse.json(
      { message: "Error submitting comment" },
      { status: 500 }
    );
  }
}
