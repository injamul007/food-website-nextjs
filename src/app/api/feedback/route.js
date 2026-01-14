import { feedback } from "../route";

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "Feedback GET API successful",
    feedback,
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
    id: `f${feedback.length + 1}`,
    message,
  }

  feedback.push(newFeedback);
  
  return Response.json({
    acknowledge: true,
    insertedId: newFeedback.id,
  })
}