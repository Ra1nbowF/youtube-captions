import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Comment } from "@/types"
import { formatDate } from "@/utils/formatters"

interface CommentListProps {
  comments: Comment[];
}

export function CommentList({ comments }: CommentListProps) {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <h3 className="font-semibold mb-4">Comments</h3>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.comment_id} className="flex items-start space-x-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt={`User ${comment.user_id}`}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">User ID: {comment.user_id}</p>
                <p className="text-sm text-gray-600">{comment.comment_text}</p>
                <p className="text-xs text-gray-500">{formatDate(comment.timestamp)}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

