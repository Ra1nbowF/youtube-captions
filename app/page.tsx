/// <reference types="react" />

import { getVideos } from "@/lib/api"
import { VideoCard } from "@/components/VideoCard"
import { Header } from "@/components/Header"

export const dynamic = 'force-dynamic'

export default async function Home() {
  let videos = []
  
  try {
    videos = await getVideos()
  } catch (error) {
    console.error('Failed to fetch videos:', error)
    // Return a simple UI when data fetching fails
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">Recommended Videos</h1>
          <p>Failed to load videos. Please try again later.</p>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Recommended Videos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.video_id} video={video} />
          ))}
        </div>
      </main>
    </>
  )
}

