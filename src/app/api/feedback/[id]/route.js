import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
const feedbackCollection = connect('feedback');

export async function GET(request, { params }) {
  const {id} = await params;

  if(!ObjectId.isValid(id)){
    return Response.json({
      status: 400,
      message: "please provide a valid id",
    })
  }

  const query = {_id: new ObjectId(id)};
  const singleFeedback = await feedbackCollection.findOne(query);

  return Response.json({
    status: 200,
    message: `Feedback GET API for ID: ${id} successful`,
    singleFeedback,
  })
}

export async function DELETE(request, { params }) {
  const {id} = await params;

  if(!ObjectId.isValid(id)) {
    return Response.json({
      status: 400,
      message: "please provide a valid id",
    })
  }
  const query = {_id: new ObjectId(id)};
  const result = await feedbackCollection.deleteOne(query);

  return Response.json({
    status: 200,
    message: `Feedback DELETE API for ID: ${id} successful`,
    result,
  })
}

export async function PATCH(request, { params }) {
  const {id} = await params;
  const {message} = await request.json();

  if(!ObjectId.isValid(id)) {
    return Response.json({
      status: 400,
      message: "please provide a valid id",
    })
  }

  if(!message || typeof message !== 'string') {
    return Response.json({
      status: 400,
      message: "please provide a valid message",
    })
  }
  
  const query = {_id: new ObjectId(id)};

  const newData = {
    $set : {message},
  }
  const result = await feedbackCollection.updateOne(query, newData);

  return Response.json({
    status: 200,
    message: `Feedback PATCH API for ID: ${id} successful`,
    result,
  })
}