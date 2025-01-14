export default function VideoSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 rounded-lg aspect-video"></div>
      <div className="flex gap-2 mt-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
        </div>
      </div>
    </div>
  );
} 