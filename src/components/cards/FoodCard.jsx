import Link from "next/link";
import CartButtons from "../buttons/CartButtons";
import Image from "next/image";
import style from "@/app/foods/food.module.css"

const FoodCard = ({ food }) => {
  const { title, foodImg, price, category, id } = food;

  return (
    <div className={`w-full max-w-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition ${style.bgRed}`}>
      {/* Image */}
      <div className="h-48 w-full overflow-hidden rounded-t-xl relative">
        <Image
          src={foodImg}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded">
          {category}
        </span>

        <h3 className="text-lg font-semibold text-gray-300 line-clamp-1">
          {title}
        </h3>

        <p className="text-gray-300 font-bold">৳ {price}</p>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <CartButtons food={food}></CartButtons>

          <Link
            href={`/foods/${id}`}
            className="flex-1 border border-gray-300 hover:bg-gray-300 hover:text-gray-600 text-sm font-medium text-center duration-200 py-2 rounded-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
