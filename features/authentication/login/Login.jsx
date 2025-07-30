"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, X } from "lucide-react";
import RegisterImage from "@/public/register-image.svg";
import Image from "next/image";
import decorStar from "@/public/decoratives/decor-star.svg";
import Header from "@/components/Header";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touchedFields, setTouchedFields] = useState(new Set());
  const [rememberMe, setRememberMe] = useState(false);

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
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBlur = (field) => {
    setTouchedFields((prev) => new Set(prev).add(field));

    // Validate on blur
    const newErrors = validateForm();
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = validateForm();
    setErrors(newErrors);
    setTouchedFields(new Set(["email", "password"]));

    if (Object.keys(newErrors).length === 0) {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Login submitted:", { ...formData, rememberMe });
      // Handle successful login
    }

    setIsSubmitting(false);
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Implement Google OAuth
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
        {/* Decorative stars */}
        <div className="absolute top-16 right-1/4 w-4 h-4 bg-white rounded-full opacity-80 animate-pulse" />
        <div className="absolute top-1/3 left-16 w-2 h-2 bg-white rounded-full opacity-60" />
        <div className="absolute bottom-1/4 right-16 w-3 h-3 bg-white rounded-full opacity-70 animate-pulse" />
        <Image
          src={decorStar}
          alt="Decorative star"
          className="absolute top-10 left-10 w-6 h-6 opacity-50 animate-spin"
        />
        <Image
          src={decorStar}
          alt="Decorative star"
          className="absolute bottom-10 right-10 w-8 h-8 opacity-50 animate-bounce"
        />
        <Image
          src={decorStar}
          alt="Decorative star"
          className="absolute top-1/4 left-1/4 w-5 h-5 opacity-50 animate-pulse"
        />

        {/* Main container */}
        <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
          {/* Modal Background */}
          <div className="w-full max-w-7xl bg-black/60 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl p-8 lg:p-12">
            <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left side - Illustration */}
              <div className="hidden lg:flex justify-center items-center">
                <div className="relative">
                  <Image
                    src={RegisterImage}
                    alt="Laptop with login interface"
                    width={600}
                    height={500}
                    className="w-full h-auto max-w-lg"
                  />
                </div>
              </div>

              {/* Right side - Form */}
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <div className="text-center mb-8">
                  <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    Welcome Back
                  </h1>
                  <p className="text-gray-300 text-lg">
                    Sign in to your account
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Google login button */}
                  <button
                    type="button"
                    className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 py-3 px-4 rounded-md text-base font-medium transition-colors flex items-center justify-center"
                    onClick={handleGoogleLogin}
                  >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Continue with Google
                  </button>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-purple-400/30"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-transparent text-gray-300 font-medium">
                        or
                      </span>
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-white text-sm font-medium"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        id="email"
                        type="email"
                        placeholder="hello@orbital.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        onBlur={() => handleBlur("email")}
                        className={`w-full bg-gray-800/50 border rounded-md px-3 py-3 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 focus:border-purple-400 ${
                          errors.email && touchedFields.has("email")
                            ? "border-red-400"
                            : "border-gray-600"
                        }`}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        aria-invalid={!!errors.email}
                      />
                    </div>
                    {errors.email && touchedFields.has("email") && (
                      <p
                        id="email-error"
                        className="text-red-400 text-sm flex items-center gap-1"
                      >
                        <X className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="password"
                      className="text-white text-sm font-medium"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        onBlur={() => handleBlur("password")}
                        className={`w-full bg-gray-800/50 border rounded-md px-3 py-3 pr-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 focus:border-purple-400 ${
                          errors.password && touchedFields.has("password")
                            ? "border-red-400"
                            : "border-gray-600"
                        }`}
                        aria-describedby={
                          errors.password ? "password-error" : undefined
                        }
                        aria-invalid={!!errors.password}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    {errors.password && touchedFields.has("password") && (
                      <p
                        id="password-error"
                        className="text-red-400 text-sm flex items-center gap-1"
                      >
                        <X className="w-4 h-4" />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Remember me and Forgot password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                      />
                      <span className="ml-2 text-sm text-gray-300">
                        Remember me
                      </span>
                    </label>
                    <a
                      href="/forgot-password"
                      className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Forgot password?
                    </a>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-md text-base font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Signing in...
                      </div>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                {/* Sign up link */}
                <div className="text-center mt-6 text-sm text-gray-300">
                  Don't have an account?{" "}
                  <Link
                    href="/register"
                    className="text-white underline hover:text-purple-300 transition-colors"
                  >
                    Create account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
