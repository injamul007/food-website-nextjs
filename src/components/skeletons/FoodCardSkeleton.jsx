const FoodCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm bg-gray-200 rounded-xl border border-gray-400 shadow-sm animate-pulse">
      
      {/* Image Skeleton */}
      <div className="h-48 bg-gray-400 rounded-t-xl"></div>

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-4 w-20 bg-gray-400 rounded"></div>
        <div className="h-5 w-3/4 bg-gray-400 rounded"></div>
        <div className="h-5 w-24 bg-gray-400 rounded"></div>

        <div className="flex gap-3 pt-3">
          <div className="flex-1 h-10 bg-gray-400 rounded-lg"></div>
          <div className="flex-1 h-10 bg-gray-400 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
