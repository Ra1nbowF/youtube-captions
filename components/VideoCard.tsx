import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Video } from "@/types"
import { formatViews, formatDate } from "@/utils/formatters"

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={`/video/${video.video_id}`}>
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0">
          <Image
            src={video.thumbnail_url}
            alt={video.title}
            width={320}
            height={180}
            className="w-full h-auto"
          />
          <div className="p-4">
            <h2 className="font-semibold text-lg mb-1 line-clamp-2">{video.title}</h2>
            <p className="text-sm text-gray-600">User ID: {video.user_id}</p>
            <p className="text-sm text-gray-500">
              {formatViews(video.views)} views • {formatDate(video.upload_date)}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

