"use client";
import ReviewCard from "@/components/reviewCard/ReviewCard";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

const ReviewPage = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.reviews);
        setReview(data.reviews || []);
        setLoading(false)
      })
      .catch((err) => console.log(err.message));
  }, []);

  if(loading) return <ReviewLoading></ReviewLoading>
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-4xl font-bold text-center">
        Total <span className="text-yellow-500">{review.length}</span> Review
        found
      </h2>
      <div className="grid grid-cols-3 gap-4 my-5">
        {review.map((review) => (
          <ReviewCard key={review.id} reviewData={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
