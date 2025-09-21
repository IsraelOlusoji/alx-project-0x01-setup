import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      if (parent === 'address' && child === 'geo') {
        const geoField = e.target.name.split('.')[2];
        setUser(prevUser => ({
          ...prevUser,
          address: {
            ...prevUser.address,
            geo: {
              ...prevUser.address.geo,
              [geoField]: value
            }
          }
        }));
      } else {
        setUser(prevUser => ({
          ...prevUser,
          [parent]: {
            ...(prevUser[parent as keyof UserData] as any),
            [child]: value
          }
        }));
      }
    } else {
      setUser(prevUser => ({ ...prevUser, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New User</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={user.website}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter website URL"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Address Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="address.street" className="block text-gray-700 font-medium mb-2">Street</label>
                  <input
                    type="text"
                    id="address.street"
                    name="address.street"
                    value={user.address.street}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter street address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address.suite" className="block text-gray-700 font-medium mb-2">Suite</label>
                  <input
                    type="text"
                    id="address.suite"
                    name="address.suite"
                    value={user.address.suite}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter suite/apartment"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address.city" className="block text-gray-700 font-medium mb-2">City</label>
                  <input
                    type="text"
                    id="address.city"
                    name="address.city"
                    value={user.address.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter city"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address.zipcode" className="block text-gray-700 font-medium mb-2">Zip Code</label>
                  <input
                    type="text"
                    id="address.zipcode"
                    name="address.zipcode"
                    value={user.address.zipcode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter zip code"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address.geo.lat" className="block text-gray-700 font-medium mb-2">Latitude</label>
                  <input
                    type="text"
                    id="address.geo.lat"
                    name="address.geo.lat"
                    value={user.address.geo.lat}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter latitude"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address.geo.lng" className="block text-gray-700 font-medium mb-2">Longitude</label>
                  <input
                    type="text"
                    id="address.geo.lng"
                    name="address.geo.lng"
                    value={user.address.geo.lng}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter longitude"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company.name" className="block text-gray-700 font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company.name"
                    name="company.name"
                    value={user.company.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter company name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company.catchPhrase" className="block text-gray-700 font-medium mb-2">Catch Phrase</label>
                  <input
                    type="text"
                    id="company.catchPhrase"
                    name="company.catchPhrase"
                    value={user.company.catchPhrase}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter catch phrase"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="company.bs" className="block text-gray-700 font-medium mb-2">Business Strategy</label>
                  <textarea
                    id="company.bs"
                    name="company.bs"
                    value={user.company.bs}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter business strategy"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-between items-center pt-4 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 focus:outline-none font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
