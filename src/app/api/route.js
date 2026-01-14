export const feedback = [
  {
    id: "f1",
    message: "খাবার খুব মজার ছিল। ধন্যবাদ!",
  },
  {
    id: "f2",
    message: "ডেলিভারি সময়মতো এসেছে এবং খাবার গরম ছিল।",
  },
  {
    id: "f3",
    message: "কাস্টমার সার্ভিস খুবই ভালো। আবার অর্ডার করব।",
  },
]


export async function GET(request) {
  return Response.json({
    status: 200,
    message: "API is Created!",
  })
}