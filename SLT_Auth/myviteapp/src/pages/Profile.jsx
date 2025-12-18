import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../component/Layout';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ name: '', email: '' });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/user/profile", { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
        setForm({
          name: res.data.user.name,
          email: res.data.user.email
        });
      })
      .catch((e) => {
        console.error("Error while getting data", e);
        navigate('/login');
      });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:4000/api/user/update", form, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setEditMode(false);
      })
      .catch((err) => {
        console.error("Error updating profile:", err);
      });
  };

  return (
    <Layout>
      <div className='sm:py-40 px-4 sm:px-10 lg:px-20'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
            Your account
          </h2>
        </div>

    
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
          </svg>
        </div>

        {user ? (
          <div className='bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col items-center justify-center w-full max-w-md mx-auto p-6 mt-10'>
            <img
                    alt="User"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-20 w-20 rounded-full"
                  
                  />
            {!editMode ? (
              <div className="text-center mt-2">
                <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
                <p className="text-sm text-teal-700 mt-1">{user.email}</p>
                <button
                  onClick={() => setEditMode(true)}
                  className='mt-6 w-full rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'
                >
                  Edit
                </button>
              </div>
            ) : (
              <form onSubmit={handleUpdate} className="w-full space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <button
                  type="submit"
                  className='w-full rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600'
                >
                  Save
                </button>
              </form>
            )}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-base mt-10">No user found.</p>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
