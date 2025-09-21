import React from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostCardProps {
  post: Post;
  onEdit?: (post: Post) => void;
  onDelete?: (postId: number) => void;
  showActions?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  onEdit,
  onDelete,
  showActions = true,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {post.body}
        </p>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          User ID: {post.userId}
        </span>
        
        {showActions && (
          <div className="flex space-x-2">
            {onEdit && (
              <button
                onClick={() => onEdit(post)}
                className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors duration-200"
              >
                Edit
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(post.id)}
                className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors duration-200"
              >
                Delete
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
