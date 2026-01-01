const ReviewCardSkeleton = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-5 shadow-sm animate-pulse">
      
      {/* User Info Skeleton */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

        <div className="flex-1 space-y-2">
          <div className="h-4 w-40 bg-gray-300 rounded"></div>
          <div className="h-3 w-24 bg-gray-300 rounded"></div>
        </div>

        <div className="h-4 w-12 bg-gray-300 rounded"></div>
      </div>

      {/* Review Text Skeleton */}
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full bg-gray-300 rounded"></div>
        <div className="h-3 w-full bg-gray-300 rounded"></div>
        <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
      </div>

      {/* Footer Skeleton */}
      <div className="mt-4">
        <div className="h-3 w-20 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
