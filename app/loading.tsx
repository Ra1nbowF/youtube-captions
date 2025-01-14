export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-300 rounded-lg aspect-video"></div>
          <div className="flex gap-2 mt-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 