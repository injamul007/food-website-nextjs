"use client"

import { useRouter } from 'next/navigation';

const FeedbackForm = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    
    const res = await fetch('http://localhost:3000/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    if(data.result.insertedId){
      alert('Feedback submitted successfully!');
      e.target.reset();
      router.push('/feedbacks');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
        <h2 className="text-2xl font-bold mb-5">Add Your Feedback</h2>
        <textarea required name="message" id="" cols={'30'} rows={'10'}className="w-full p-2 border border-gray-300 rounded-md mb-4"></textarea>
        <hr />
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-center max-w-xl mx-auto">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;