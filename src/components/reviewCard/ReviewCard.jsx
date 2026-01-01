"use client"
const ReviewCard = ({ reviewData }) => {
  const { user, photo, rating, review, likes, date } = reviewData;

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex-1">
          <h4 className="text-base font-semibold text-gray-900">{user}</h4>
          <p className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-yellow-600">
            ⭐ {rating}
          </span>
        </div>
      </div>

      {/* Review Text */}
      <p className="mt-4 text-gray-700 leading-relaxed text-sm">{review}</p>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-gray-500">👍 {likes.length} likes</p>
      </div>
    </div>
  );
};

export default ReviewCard;
