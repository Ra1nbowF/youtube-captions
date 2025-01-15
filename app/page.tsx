'use client';

import { useState, useEffect } from 'react';
import VideoSkeleton from '@/components/VideoSkeleton';

const fakeVideos = {
  '1': {
    title: 'Introduction to MongoDB',
    description: 'A detailed guide to MongoDB.',
    tldr: 'MongoDB guide',
    author: 'Tech Channel',
    authorAvatar: '/placeholder-avatar.svg',
    uploadDate: '3 days ago',
    views: '100K views',
    thumbnailUrl: '/placeholder.svg',
  },
  '2': {
    title: 'Gaming Tips & Tricks',
    description: 'Pro tips for gamers.',
    tldr: 'Gaming tips',
    author: 'Gaming Pro',
    authorAvatar: '/placeholder-avatar.svg',
    uploadDate: '1 week ago',
    views: '200K views',
    thumbnailUrl: '/placeholder.svg',
  },
};

export default function VideoPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {[...Array(12)].map((_, i) => (
          <VideoSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {Object.entries(fakeVideos).map(([id, video]) => (
          <div key={id} className="flex flex-col">
            <a href={`/videos/${id}`} className="group">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <img src={video.authorAvatar} alt="" className="w-9 h-9 rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold line-clamp-2 mb-1">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.author}</p>
                  <p className="text-sm text-gray-600">{video.views} • {video.uploadDate}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error loading videos</div>;
  }

  return null;
}

