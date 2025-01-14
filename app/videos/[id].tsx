'use client';

import { useRouter } from 'next/router';

const fakeVideos = {
  1: { title: 'Amazing Nature', description: 'Explore the beauty of nature with this amazing video.' },
  2: { title: 'Tech Innovations', description: 'Discover the latest in technology and innovation.' },
  3: { title: 'Cooking Tips', description: 'Learn some great cooking tips and tricks.' },
  4: { title: 'Travel Vlogs', description: 'Join us on a journey to exciting travel destinations.' },
};

export default function VideoPage() {
  const router = useRouter();
  const { id } = router.query;

  const video = fakeVideos[id as keyof typeof fakeVideos];

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{video.title}</h1>
      <p className="mt-2">{video.description}</p>
      <img src="/placeholder.svg" alt={video.title} className="w-full h-auto mt-4" />
    </div>
  );
} 