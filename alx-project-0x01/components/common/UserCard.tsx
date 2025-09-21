import { UserProps } from "@/interfaces";

const UserCard: React.FC<
  UserProps & { onViewDetails?: (user: UserProps) => void }
> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
  posts,
  onViewDetails,
}) => {
  return (
    <div className="max-w-sm mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* User Avatar Section */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0).toUpperCase()}
        </div>
        <div className="ml-3">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">@{username}</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-4 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <svg
            className="w-4 h-4 mr-2 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="truncate">{email}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <svg
            className="w-4 h-4 mr-2 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="truncate">{phone}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <svg
            className="w-4 h-4 mr-2 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
            />
          </svg>
          <span className="truncate">{website}</span>
        </div>
      </div>

      {/* Company Information */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center mb-2">
          <svg
            className="w-4 h-4 mr-2 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          <span className="font-medium text-gray-700">{company.name}</span>
        </div>
        <p className="text-xs text-gray-600 italic">"{company.catchPhrase}"</p>
      </div>

      {/* Location */}
      <div className="mb-4 flex items-center text-sm text-gray-600">
        <svg
          className="w-4 h-4 mr-2 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span>
          {address.city}, {address.zipcode}
        </span>
      </div>

      {/* Posts Section */}
      {posts && posts.length > 0 && (
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <svg
              className="w-4 h-4 mr-2 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="font-medium text-gray-700">Recent Posts</span>
            <span className="ml-2 px-2 py-1 bg-indigo-100 text-indigo-600 text-xs rounded-full">
              {posts.length}
            </span>
          </div>
          <div className="max-h-32 overflow-y-auto space-y-2">
            {posts.slice(0, 3).map((post) => (
              <div key={post.id} className="p-2 bg-gray-50 rounded text-xs">
                <p className="font-medium text-gray-800 truncate">
                  {post.title}
                </p>
                <p className="text-gray-600 line-clamp-2">{post.body}</p>
              </div>
            ))}
            {posts.length > 3 && (
              <p className="text-xs text-gray-500 text-center">
                +{posts.length - 3} more posts
              </p>
            )}
          </div>
        </div>
      )}

      {/* Action Button */}
      {onViewDetails && (
        <div className="flex justify-end">
          <button
            onClick={() =>
              onViewDetails({
                id,
                name,
                username,
                email,
                phone,
                website,
                company,
                address,
                posts,
              })
            }
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      )}

      {/* User ID Badge */}
      <div className="mt-3 flex justify-between items-center text-xs text-gray-400">
        <span>ID: {id}</span>
        <span className="px-2 py-1 bg-gray-100 rounded-full">User</span>
      </div>
    </div>
  );
};

export default UserCard;
