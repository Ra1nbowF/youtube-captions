import { VideoSkeleton } from "@/components/VideoSkeleton"
import { Header } from "@/components/Header"

export default function Loading() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Recommended Videos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <VideoSkeleton key={i} />
          ))}
        </div>
      </main>
    </>
  )
} 