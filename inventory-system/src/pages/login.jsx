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
<div className="flex justify-center items-center h-screen bg-indigo-600 px-4">
  <div className="max-w-md p-8 shadow-lg bg-white rounded-xl">
    <div className="bg-red-500 text-white p-4">Tailwind Test</div>
    <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">MDP Login</h1>
    <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
      {/* Username */}
      <div>
        <input
  type="text"
  id="username"
  placeholder="Enter username"
  {...register('username', { required: 'Username is required' })}
  className={`w-full px-4 py-3 text-lg border rounded-xl bg-gray-50 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
    errors.username
      ? 'border-red-500 focus:ring-red-400'
      : 'border-gray-300 focus:ring-blue-500'
  }`}
/>
        {errors.username && (
          <p className="text-base text-red-500 mt-1">{errors.username.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          {...register('password', { required: 'Password is required' })}
          className={`w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 ${
            errors.password ? 'border-red-500 focus:ring-red-400' : 'focus:ring-blue-400'
          }`}
        />
        {errors.password && (
          <p className="text-base text-red-500 mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 text-lg rounded-lg hover:bg-indigo-700"
      >
        Log In
      </button>
    </form>
  </div>
</div>


  );
};

export default Login;
