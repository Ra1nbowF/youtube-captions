'use client';

import { useRouter } from 'next/router';

const fakeVideos = {
  '1': {
    title: 'Introduction to MongoDB',
    description: 'A detailed guide to MongoDB.',
    author: 'Tech Channel',
    authorAvatar: '/placeholder-avatar.svg',
    uploadDate: '3 days ago',
    views: '100K views',
    likes: '10K',
    thumbnailUrl: '/placeholder.svg',
  },
  // ... other videos
};

export default function VideoPage() {
  const router = useRouter();
  const videoId = router.query.id as string;
  const video = fakeVideos[videoId as keyof typeof fakeVideos];

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="max-w-[1280px] mx-auto p-4">
      <div className="aspect-video bg-black rounded-xl mb-4">
        <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover" />
      </div>
      <h1 className="text-xl font-bold mb-2">{video.title}</h1>
      <div className="flex items-center gap-4 mb-4">
        <img src={video.authorAvatar} alt="" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-medium">{video.author}</p>
          <p className="text-sm text-gray-600">{video.views} • {video.uploadDate}</p>
        </div>
      </div>
      <p className="text-sm text-gray-800">{video.description}</p>
    </div>
  );
} 