"use client";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Mail, X, CheckCircle } from "lucide-react";

const ForgotPassword = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { resetPassword } = useAuth();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email) {
      setError("Email is required");
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (error) {
      setError(getErrorMessage(error.code));
    }

    setLoading(false);
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/user-not-found":
        return "No account found with this email address";
      case "auth/invalid-email":
        return "Invalid email address";
      case "auth/network-request-failed":
        return "Network error. Please check your connection";
      default:
        return "An error occurred. Please try again.";
    }
  };

  if (success) {
    return (
      <div className={`text-center space-y-4 ${className}`}>
        <div className="flex justify-center">
          <CheckCircle className="w-16 h-16 text-green-400" />
        </div>
        <h3 className="text-white text-xl font-semibold">Check your email</h3>
        <p className="text-gray-300">
          We&rsquo;ve sent a password reset link to <strong>{email}</strong>
        </p>
        <p className="text-sm text-gray-400">
          Don&rsquo;t see the email? Check your spam folder.
        </p>
        <button
          onClick={() => {
            setSuccess(false);
            setEmail("");
          }}
          className="text-purple-300 hover:text-purple-200 transition-colors"
        >
          Try another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="text-center space-y-2 mb-6">
        <h3 className="text-white text-xl font-semibold">
          Reset your password
        </h3>
        <p className="text-gray-300 text-sm">
          Enter your email address and we&rsquo;ll send you a link to reset your
          password.
        </p>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-md p-3">
          <p className="text-red-400 text-sm flex items-center gap-2">
            <X className="w-4 h-4" />
            {error}
          </p>
        </div>
      )}

      {/* Email field */}
      <div className="space-y-2">
        <label htmlFor="reset-email" className="text-white text-sm font-medium">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            id="reset-email"
            type="email"
            placeholder="hello@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            disabled={loading}
            className={`w-full bg-gray-800/50 border rounded-md px-3 py-3 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 focus:border-purple-400 disabled:opacity-50 ${
              error ? "border-red-400" : "border-gray-600"
            }`}
          />
        </div>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-md text-base font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending reset link...
          </div>
        ) : (
          "Send Reset Link"
        )}
      </button>
    </form>
  );
};

export default ForgotPassword;
