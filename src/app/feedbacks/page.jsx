import FeedbackCard from '@/components/FeedbackCard/FeedbackCard';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Feedbacks',
  description: 'User feedbacks for our food website',
}

export const dynamic = 'force-dynamic';

const getFeedbacks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/feedback`, {
    // cache: 'force-cache',
  next: {revalidate: 60}
  });
  const data = await res.json();
  return data;
}

const FeedbackPage = async () => {
  const feedback = await getFeedbacks();
  const {result} = feedback;
  return (
    <div>
      <h2 className='text-2xl font-bold text-center mt-10'>{result.length} Feedback Found</h2>

      <div className='w-11/12 mx-auto text-end mt-5'>
        <Link href="/feedbacks/add" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Add Feedback</Link>
      </div>

      <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
        {
        result.map(fd => <FeedbackCard key={fd._id} feedback={fd}></FeedbackCard>)
      }
      </div>
    </div>
  );
};

export default FeedbackPage;