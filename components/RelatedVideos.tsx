import Image from "next/image"
import Link from "next/link"
import { Video } from "@/types"
import { formatViews, formatDate } from "@/utils/formatters"

interface RelatedVideosProps {
  videos: Video[];
}

export function RelatedVideos({ videos }: RelatedVideosProps) {
  return (
    <div className="space-y-4">
      {videos.map((video) => (
        <Link href={`/video/${video._id}`} key={video._id} className="flex gap-4">
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            width={168}
            height={94}
            className="w-42 h-auto"
          />
          <div>
            <h3 className="font-semibold text-sm mb-1 line-clamp-2">{video.title}</h3>
            <p className="text-xs text-gray-600">{video.channel}</p>
            <p className="text-xs text-gray-500">
              {formatViews(video.views)} views • {formatDate(video.timestamp)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

