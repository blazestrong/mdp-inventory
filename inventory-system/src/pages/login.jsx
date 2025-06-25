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
    <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">MDP Login</h1>
    <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
      {/* Username */}
<div className="relative w-full">
  <input
    type="text"
    id="username"
    placeholder=" "
    {...register('username', { required: 'Username is required' })}
    className={`peer w-full px-4 pt-5 pb-2 text-lg text-black bg-white border rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
      errors.username
        ? 'border-red-500 focus:ring-red-400'
        : 'border-gray-300 focus:ring-blue-500'
    }`}
  />
  <label
    htmlFor="username"
    className="absolute left-4 top-3 text-black text-base transition-all duration-200 
      peer-placeholder-shown:top-4 
      peer-placeholder-shown:text-lg
      peer-[&:not(:placeholder-shown)]:top-1 
      peer-[&:not(:placeholder-shown)]:text-sm 
      peer-focus:top-1 
      peer-focus:text-sm
      peer-focus:text-gray-500"
  >
    Username
  </label>
  {errors.username && (
    <p className="text-base text-red-500 mt-1">{errors.username.message}</p>
  )}
</div>


<div className="relative w-full">
  <input
    type="password"
    id="password"
    placeholder=" "
    {...register('password', { required: 'Password is required' })}
    className={`peer w-full px-4 pt-5 pb-2 text-lg text-black bg-white border rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
      errors.password
        ? 'border-red-500 focus:ring-red-400'
        : 'border-gray-300 focus:ring-blue-500'
    }`}
  />
  <label
    htmlFor="password"
    className="absolute left-4 top-3 text-black text-base transition-all duration-200 
      peer-placeholder-shown:top-4 
      peer-placeholder-shown:text-lg
      peer-[&:not(:placeholder-shown)]:top-1 
      peer-[&:not(:placeholder-shown)]:text-sm 
      peer-focus:top-1 
      peer-focus:text-sm
      peer-focus:text-gray-500"
  >
    Password
  </label>
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
