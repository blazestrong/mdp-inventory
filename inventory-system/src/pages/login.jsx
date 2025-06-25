import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
    reset: resetRegisterForm,
  } = useForm();

  const onLogin = (data) => {
    console.log('Login:', data);
  };

  const onRegister = (data) => {
    console.log('Register:', data);
    resetRegisterForm();
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 relative">
        {!isModalOpen && (
  <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-lg">
      <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
          {/* Username Field */}
          <div className="flex items-center gap-4">
            <div className="w-2/3">
              <label htmlFor="username" className="block mb-1 text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                {...register('username', { required: 'Username is required' })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.username ? 'border-red-500 focus:ring-red-400' : 'focus:ring-blue-400'
                }`}
              />
            </div>
            <div className="w-1/3 h-full flex items-end pt-6">
              {errors.username && (
                <p className="text-sm text-red-500">{errors.username.message}</p>
              )}
            </div>
          </div>

          {/* Password Field */}
          <div className="flex items-center gap-4">
            <div className="w-2/3">
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Minimum 6 characters' },
                  })}
                  className={`w-full px-4 py-2 pr-12 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.password ? 'border-red-500 focus:ring-red-400' : 'focus:ring-blue-400'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            <div className="w-1/3 h-full flex items-end pt-6">
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-4 space-y-3">
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full py-2 font-semibold text-blue-600 border border-blue-600 hover:bg-blue-50 rounded-lg transition duration-200"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
  </div>
)}


      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-2xl relative">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Create Account</h3>
            <form onSubmit={handleRegisterSubmit(onRegister)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  {...registerRegister('username', { required: 'Username is required' })}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    registerErrors.username
                      ? 'border-red-500 focus:ring-red-400'
                      : 'focus:ring-blue-400'
                  }`}
                />
                {registerErrors.username && (
                  <p className="text-sm text-red-500">{registerErrors.username.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  {...registerRegister('password', {
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Minimum 6 characters' },
                  })}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    registerErrors.password
                      ? 'border-red-500 focus:ring-red-400'
                      : 'focus:ring-blue-400'
                  }`}
                />
                {registerErrors.password && (
                  <p className="text-sm text-red-500">{registerErrors.password.message}</p>
                )}
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
                >
                  Register
                </button>
                <button
                  type="button"
                  onClick={() => {
                    resetRegisterForm();
                    setIsModalOpen(false);
                  }}
                  className="px-4 py-2 border border-gray-400 text-gray-700 font-medium rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
