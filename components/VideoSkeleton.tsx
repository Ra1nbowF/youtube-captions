export default function VideoSkeleton() {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="relative aspect-video bg-gray-200 rounded-xl mb-3"></div>
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="w-9 h-9 bg-gray-200 rounded-full"></div>
        </div>
        <div className="flex-grow">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-1"></div>
          <div className="h-3 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
} 