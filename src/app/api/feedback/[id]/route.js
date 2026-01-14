import { feedback } from "../../route";

export async function GET(request, { params }) {
  const {id} = await params;

  const singleFeedback = feedback.find(fd => fd.id === id) || {};
  
  return Response.json({
    status: 200,
    message: `Feedback GET API for ID: ${id} successful`,
    singleFeedback,
  })
}