import React from "react";

const getSingleFoods = async (id) => {
  const res = await fetch(
    ` https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve,1000))
  return data.details || {};
};

const FoodDetails = async ({ params }) => {
  const { id } = await params;
  const foodDetails = await getSingleFoods(id);
  if (!foodDetails) {
    return <h2>Food Details Not Found</h2>
  }
  const {foodImg, title, category, area, price, video} = foodDetails || {}
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className=" border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        {/* Image Section */}
        <div className="w-full h-full md:h-96 overflow-hidden">
          <img
            src={foodImg}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Category & Area */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded">
              {category}
            </span>
            <span className="text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded">
              {area}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-500">
            {title}
          </h1>

          {/* Price */}
          <p className="text-xl font-semibold text-gray-500">
            Price: ৳ {price}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg">
              Add to Cart
            </button>

            <a
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center border border-gray-300 hover:bg-gray-400 font-medium px-6 py-3 rounded-lg"
            >
              Watch Recipe Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
