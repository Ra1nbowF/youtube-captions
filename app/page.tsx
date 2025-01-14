'use client';

import { useState, useEffect } from 'react';
import VideoSkeleton from '@/components/VideoSkeleton';

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
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bg-gray-200 rounded-lg aspect-video">
            <img src="/placeholder.svg" alt="Placeholder" className="w-full h-full object-cover" />
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

