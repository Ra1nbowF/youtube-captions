'use client';

import { useRouter } from 'next/router';

const fakeVideos = {
  1: {
    title: 'Amazing Nature',
    description: 'Explore the beauty of nature with this amazing video.',
    views: '1.2M views',
    likes: '120K likes',
    uploadDate: 'Jan 1, 2023',
  },
  2: {
    title: 'Tech Innovations',
    description: 'Discover the latest in technology and innovation.',
    views: '800K views',
    likes: '80K likes',
    uploadDate: 'Feb 15, 2023',
  },
  3: {
    title: 'Cooking Tips',
    description: 'Learn some great cooking tips and tricks.',
    views: '500K views',
    likes: '50K likes',
    uploadDate: 'Mar 10, 2023',
  },
  4: {
    title: 'Travel Vlogs',
    description: 'Join us on a journey to exciting travel destinations.',
    views: '2M views',
    likes: '200K likes',
    uploadDate: 'Apr 5, 2023',
  },
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
      <p className="text-sm text-gray-600">{video.views} • {video.likes} • {video.uploadDate}</p>
      <img src="/placeholder.svg" alt={video.title} className="w-full h-auto mt-4" />
    </div>
  );
} 