"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import { Eye, EyeOff, Mail, X } from "lucide-react";

const EmailLogin = ({ onSuccess, className = "" }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { loginWithEmail } = useAuth();
  const router = useRouter();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await loginWithEmail(formData.email, formData.password);

        if (onSuccess) {
          onSuccess();
        } else {
          router.push("/courses");
        }
      } catch (error) {
        setErrors({ submit: getErrorMessage(error.code) });
      }
    }

    setLoading(false);
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/user-not-found":
        return "No account found with this email";
      case "auth/wrong-password":
        return "Incorrect password";
      case "auth/invalid-email":
        return "Invalid email address";
      case "auth/user-disabled":
        return "This account has been disabled";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later";
      case "auth/network-request-failed":
        return "Network error. Please check your connection";
      default:
        return "Login failed. Please check your credentials.";
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {/* Submit Error */}
      {errors.submit && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-md p-3">
          <p className="text-red-400 text-sm flex items-center gap-2">
            <X className="w-4 h-4" />
            {errors.submit}
          </p>
        </div>
      )}

      {/* Email field */}
      <div className="space-y-2">
        <label htmlFor="login-email" className="text-white text-sm font-medium">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            id="login-email"
            type="email"
            placeholder="hello@example.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            disabled={loading}
            className={`w-full bg-gray-800/50 border rounded-md px-3 py-3 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 focus:border-purple-400 disabled:opacity-50 ${
              errors.email ? "border-red-400" : "border-gray-600"
            }`}
          />
        </div>
        {errors.email && (
          <p className="text-red-400 text-sm flex items-center gap-1">
            <X className="w-4 h-4" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Password field */}
      <div className="space-y-2">
        <label
          htmlFor="login-password"
          className="text-white text-sm font-medium"
        >
          Password
        </label>
        <div className="relative">
          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            disabled={loading}
            className={`w-full bg-gray-800/50 border rounded-md px-3 py-3 pr-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 focus:border-purple-400 disabled:opacity-50 ${
              errors.password ? "border-red-400" : "border-gray-600"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
            disabled={loading}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-400 text-sm flex items-center gap-1">
            <X className="w-4 h-4" />
            {errors.password}
          </p>
        )}
      </div>

      {/* Forgot password link */}
      <div className="text-right">
        <Link
          href="/forgot-password"
          className="text-sm text-purple-300 hover:text-purple-200 transition-colors"
        >
          Forgot password?
        </Link>
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
            Signing in...
          </div>
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
};

export default EmailLogin;
