import ReviewCardSkeleton from '@/components/skeletons/ReviewCardSkeleton';
import React from 'react';

const ReviewLoading = () => {
  return (
    <div className='grid grid-cols-3 gap-4 my-5 w-11/12 mx-auto'>
      {
        [...Array(12)].map((_,index) => <ReviewCardSkeleton key={index}></ReviewCardSkeleton>)
      }
    </div>
  );
};

export default ReviewLoading;