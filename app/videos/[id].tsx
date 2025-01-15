'use client';

import { useRouter } from 'next/router';

const fakeVideos = {
  1: {
    title: 'Introduction to MongoDB',
    description: 'A detailed guide to MongoDB.',
    tldr: 'MongoDB guide',
    captions: 'Some captions here',
    uploadDate: 'Jan 14, 2025',
    thumbnailUrl: 'http://example.com/video1.jpg',
    videoUrl: 'http://example.com/video1.mp4',
    views: '100 views',
    likes: '10 likes',
    comments: '5 comments',
  },
  2: {
    title: 'Gaming Tips',
    description: 'Pro tips for gamers.',
    tldr: 'Gaming tips',
    captions: 'Some captions here',
    uploadDate: 'Jan 14, 2025',
    thumbnailUrl: 'http://example.com/video2.jpg',
    videoUrl: 'http://example.com/video2.mp4',
    views: '200 views',
    likes: '20 likes',
    comments: '10 comments',
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
      <p className="text-sm text-gray-600">
        {video.views} • {video.likes} • {video.comments} • {video.uploadDate}
      </p>
      <img src={video.thumbnailUrl} alt={video.title} className="w-full h-auto mt-4" />
      <p className="mt-2">{video.tldr}</p>
      <p className="mt-2">{video.captions}</p>
    </div>
  );
} 