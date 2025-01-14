/// <reference types="react" />

import { useState, useEffect } from 'react';
import VideoSkeleton from '@/components/VideoSkeleton';

export default function VideoPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch('/api/videos');
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

  if (error) {
    return <div>Error loading videos</div>;
  }

  return (
    <div>
      {/* Render your videos here */}
    </div>
  );
}

