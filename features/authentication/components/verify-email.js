"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../index";
import { Mail, CheckCircle, X } from "lucide-react";
import Header from "@/components/Header";

export default function VerifyEmail() {
  const [isResending, setIsResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [error, setError] = useState("");
  const { user, resendEmailVerification, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (user.emailVerified) {
      router.push("/courses");
    }
  }, [user, router]);

  const handleResendVerification = async () => {
    try {
      setIsResending(true);
      setError("");
      await resendEmailVerification();
      setResendSuccess(true);
      setTimeout(() => setResendSuccess(false), 5000);
    } catch (error) {
      setError("Failed to resend verification email. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!user) return null;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-black/60 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl p-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <Mail className="w-16 h-16 text-purple-400" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Verify your email
              </h1>
              <p className="text-gray-300">We sent a verification link to</p>
              <p className="text-white font-semibold">{user.email}</p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                Check your email and click the verification link to activate
                your account.
              </p>

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-md p-3">
                  <p className="text-red-400 text-sm flex items-center gap-2">
                    <X className="w-4 h-4" />
                    {error}
                  </p>
                </div>
              )}

              {resendSuccess && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-md p-3">
                  <p className="text-green-400 text-sm flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Verification email sent successfully!
                  </p>
                </div>
              )}

              <button
                onClick={handleResendVerification}
                disabled={isResending}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-md text-base font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isResending ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Resending...
                  </div>
                ) : (
                  "Resend verification email"
                )}
              </button>

              <button
                onClick={handleLogout}
                className="w-full bg-transparent border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white py-3 px-4 rounded-md text-base font-medium transition-colors"
              >
                Use different account
              </button>
            </div>

            <p className="text-xs text-gray-400">
              Didn&apos;t receive the email? Check your spam folder or try
              resending.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
