import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";
const feedbackCollection = connect('feedback');

export async function GET(request) {
  const result = await feedbackCollection.find().toArray();
  return Response.json({
    status: 200,
    message: "Feedback GET API successful",
    result,
  })
}

export async function POST(request) {
  const { message} = await request.json();

  if(!message || typeof message !== "string"){
    return Response.json({
      status: 400,
      message: "please provide a valid message",
    })
  }

  const newFeedback = {
    message,
    date: new Date().toISOString(),
  }

  const result = await feedbackCollection.insertOne(newFeedback);
  revalidatePath('/feedbacks');

  return Response.json({
    status: 201,
    message: "Feedback POST API successful",
    result,
  })
}