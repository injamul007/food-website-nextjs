"use client";

const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
  const { message } = feedback;

  return (
    <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
      <p className="text-gray-800 text-sm leading-relaxed mb-3">{message}</p>

      <div className="flex gap-3">
        <button
          onClick={() => onUpdate(feedback)}
          className="px-4 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Update
        </button>

        <button
          onClick={() => onDelete(feedback._id)}
          className="px-4 py-1.5 text-sm rounded-md bg-red-600 text-white hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
