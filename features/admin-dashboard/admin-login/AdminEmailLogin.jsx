"use client";
import { useEffect } from "react"; // Added useEffect import
import RegisterImage from "@/public/register-image.svg";
import Image from "next/image";
import decorStar from "@/public/decoratives/decor-star.svg";
import Header from "@/components/Header";
import { EmailLogin, useAuth } from "@/features/authentication";
import { useRouter } from "next/navigation";

export default function AdminEmailLogin() {
  // Auth hook and router
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/courses");
    }
  }, [isAuthenticated, router]);

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
                    Welcome Back Administrator!
                  </h1>
                  <p className="text-gray-300 text-lg">
                    Sign in to your account
                  </p>
                </div>
                {/* Email Login */}
                <EmailLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
