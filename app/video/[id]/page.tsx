import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, Share2 } from 'lucide-react'
import { Header } from "@/components/Header"
import { CommentList } from "@/components/CommentList"
import { RelatedVideos } from "@/components/RelatedVideos"
import { getVideoById, getCommentsByVideoId, getRelatedVideos, getUserById, getCategoryById } from "@/lib/api"
import { formatViews, formatDate } from "@/utils/formatters"

export default async function VideoPage({ params }: { params: { id: string } }) {
  const [video, comments, relatedVideos] = await Promise.all([
    getVideoById(params.id),
    getCommentsByVideoId(params.id),
    getRelatedVideos(params.id),
  ]);

  if (!video) {
    return <div>Video not found</div>;
  }

  const [user, category] = await Promise.all([
    getUserById(video.user_id),
    video.category_id ? getCategoryById(video.category_id) : null,
  ]);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="aspect-video mb-4">
              <iframe
                width="100%"
                height="100%"
                src={video.video_url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">
                {formatViews(video.views)} views • {formatDate(video.upload_date)}
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" /> {formatViews(video.likes)}
                </Button>
                <Button variant="outline" size="sm">
                  <ThumbsDown className="mr-2 h-4 w-4" /> Dislike
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
            </div>
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex items-center mb-4">
                  <Image
                    src={user?.profile_picture_url || "/placeholder.svg?height=48&width=48"}
                    alt={user?.username || "User"}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h2 className="font-semibold">{user?.username || "Unknown User"}</h2>
                    <p className="text-sm text-gray-600">User ID: {video.user_id}</p>
                  </div>
                </div>
                <p className="text-sm mb-4">{video.description}</p>
                {video.tldr && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">TL;DR</h3>
                    <p className="text-sm">{video.tldr}</p>
                  </div>
                )}
                {category && (
                  <p className="text-sm text-gray-600">Category: {category.category_name}</p>
                )}
              </CardContent>
            </Card>
            <CommentList comments={comments} />
          </div>
          <div className="lg:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Related Videos</h2>
            <RelatedVideos videos={relatedVideos} />
          </div>
        </div>
      </main>
    </>
  )
}

