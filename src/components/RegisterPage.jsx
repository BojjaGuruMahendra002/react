import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errUsername, setErrUsername] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');
  const [errAgreeTerms, setErrAgreeTerms] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [submitted, setSubmitted] = useState('');

  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrUsername('');
    setErrEmail('');
    setErrPassword('');
    setErrAgreeTerms('');

    let valid = true;

    if (!username) {
      setErrUsername('Username is required');
      valid = false;
    }

    if (!emailRegex.test(email)) {
      setErrEmail('Enter a valid email');
      valid = false;
    }

    if (!passwordRegex.test(password)) {
      setErrPassword('Password must be 8–16 chars, include upper, lower, number & special');
      valid = false;
    }

    if (!isChecked) {
      setErrAgreeTerms('You must agree to the terms and conditions');
      valid = false;
    }

    if (!valid) return;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    setSubmitted({ username, email });

    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-2">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errUsername && <p className="text-red-600 text-sm mt-1">{errUsername}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errEmail && <p className="text-red-600 text-sm mt-1">{errEmail}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errPassword && <p className="text-red-600 text-sm mt-1">{errPassword}</p>}
          </div>

          <div className="mb-6">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="form-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-sm">
              I agree to the terms and conditions
            </label>
            {errAgreeTerms && <p className="text-red-600 text-sm mt-1">{errAgreeTerms}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>

        {submitted && (
          <div className="mt-6 bg-green-100 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Submitted Data:</h3>
            <p><strong>Username:</strong> {submitted.username}</p>
            <p><strong>Email:</strong> {submitted.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};
