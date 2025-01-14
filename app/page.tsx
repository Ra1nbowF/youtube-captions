'use client';

import { useState, useEffect } from 'react';
import VideoSkeleton from '@/components/VideoSkeleton';

const fakeVideos = [
  { id: 1, title: 'Amazing Nature', thumbnail: '/placeholder.svg' },
  { id: 2, title: 'Tech Innovations', thumbnail: '/placeholder.svg' },
  { id: 3, title: 'Cooking Tips', thumbnail: '/placeholder.svg' },
  { id: 4, title: 'Travel Vlogs', thumbnail: '/placeholder.svg' },
];

export default function VideoPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch('/api/videos');
        if (response.status === 404) {
          setNotFound(true);
          return;
        }
        if (!response.ok) throw new Error('Failed to load videos');
        const data = await response.json();
        setVideos(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 px-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(12)].map((_, i) => (
          <VideoSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="grid grid-cols-1 gap-4 px-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {fakeVideos.map((video) => (
          <div key={video.id} className="bg-gray-200 rounded-lg aspect-video">
            <a href={`/videos/${video.id}`} className="block">
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
              <div className="mt-2 text-center">{video.title}</div>
            </a>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error loading videos</div>;
  }

  return (
    <div>
      {/* Render your videos here */}
    </div>
  );
}

