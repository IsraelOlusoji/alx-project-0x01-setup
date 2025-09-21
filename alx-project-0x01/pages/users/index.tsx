import React, { useState, useEffect } from "react";
import Button from "../../components/common/Button";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleViewUser = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading users...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p className="font-bold">Error:</p>
              <p>{error}</p>
            </div>
            <Button onClick={fetchUsers} variant="primary">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Users</h1>
              <p className="mt-2 text-gray-600">
                Manage and view user information
              </p>
            </div>
            <Button onClick={fetchUsers} variant="outline">
              Refresh
            </Button>
          </div>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {user.name}
                </h3>
                <p className="text-gray-600 text-sm mb-1">
                  <span className="font-medium">Username:</span> {user.username}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  <span className="font-medium">Email:</span> {user.email}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  <span className="font-medium">Phone:</span> {user.phone}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  <span className="font-medium">Website:</span> {user.website}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Company:</span> {user.company.name}
                </p>
              </div>
              
              <div className="flex justify-end">
                <Button
                  onClick={() => handleViewUser(user)}
                  variant="outline"
                  size="sm"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* User Details Modal */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedUser.name}
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Contact Information</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm mb-1"><span className="font-medium">Email:</span> {selectedUser.email}</p>
                      <p className="text-sm mb-1"><span className="font-medium">Phone:</span> {selectedUser.phone}</p>
                      <p className="text-sm"><span className="font-medium">Website:</span> {selectedUser.website}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm">
                        {selectedUser.address.street}, {selectedUser.address.suite}<br />
                        {selectedUser.address.city}, {selectedUser.address.zipcode}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Company</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm mb-1"><span className="font-medium">Name:</span> {selectedUser.company.name}</p>
                      <p className="text-sm mb-1"><span className="font-medium">Catchphrase:</span> {selectedUser.company.catchPhrase}</p>
                      <p className="text-sm"><span className="font-medium">Business:</span> {selectedUser.company.bs}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <Button onClick={handleCloseModal} variant="primary">
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
