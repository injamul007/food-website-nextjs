const FoodDetailsSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden animate-pulse">
        
        {/* Image Skeleton */}
        <div className="w-full h-72 md:h-96 bg-gray-300"></div>

        {/* Content Skeleton */}
        <div className="p-6 space-y-4">
          
          {/* Category & Area */}
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-gray-300 rounded"></div>
            <div className="h-6 w-20 bg-gray-300 rounded"></div>
          </div>

          {/* Title */}
          <div className="h-8 w-3/4 bg-gray-300 rounded"></div>

          {/* Price */}
          <div className="h-6 w-32 bg-gray-300 rounded"></div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="h-12 w-full sm:w-40 bg-gray-300 rounded-lg"></div>
            <div className="h-12 w-full sm:w-56 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
