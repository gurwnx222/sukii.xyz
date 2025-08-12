"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe; // Cleanup on unmount
  }, []);

  // Email verification configuration
  const actionCodeSettings = {
    url: "https://www.sukii.xyz/email-verified", // Change this to a verification page
    handleCodeInApp: true,
  };

  // Email verification function
  const sendVerificationEmail = async (user) => {
    try {
      await sendEmailVerification(user, actionCodeSettings);
      console.log("Verification email sent!");
      return {
        success: true,
        message: "Please check your email and click the verification link!",
      };
    } catch (error) {
      console.error("Error sending verification email:", error);
      return {
        success: false,
        message: "Error sending verification email. Please try again.",
      };
    }
  };

  // Handle email verification link (call this on your verification page)
  const handleEmailVerification = async () => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = localStorage.getItem("emailForSignIn");

      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }

      if (!email) {
        return {
          success: false,
          message: "Email address required for verification.",
        };
      }

      try {
        const result = await signInWithEmailLink(
          auth,
          email,
          window.location.href
        );
        localStorage.removeItem("emailForSignIn");

        return {
          success: true,
          message: "Email verified successfully!",
          user: result.user,
        };
      } catch (error) {
        console.error("Error verifying email:", error);
        return {
          success: false,
          message: `Error verifying email: ${error.message}`,
        };
      }
    }

    return { success: false, message: "Invalid verification link." };
  };

  // Sign up with email and password
  const signupWithEmail = async (email, password, displayName) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Send email verification
      const verificationResult = await sendVerificationEmail(result.user);

      // Save email for verification process
      localStorage.setItem("emailForSignIn", email);

      console.log("Email verification sent:", verificationResult);

      return {
        ...result,
        verificationSent: verificationResult.success,
        verificationMessage: verificationResult.message,
      };
    } catch (error) {
      console.error("Email signup error:", error);
      throw error;
    }
  };

  // Sign in with email and password
  const loginWithEmail = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      console.error("Email login error:", error);
      throw error;
    }
  };

  // Sign in with Google
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result;
    } catch (error) {
      console.error("Google sign-in error:", error);
      throw error;
    }
  };

  // Sign out
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign out error:", error);
      throw error;
    }
  };

  // Reset password
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true, message: "Password reset email sent!" };
    } catch (error) {
      console.error("Password reset error:", error);
      throw error;
    }
  };

  // Resend email verification
  const resendEmailVerification = async () => {
    try {
      if (auth.currentUser && !auth.currentUser.emailVerified) {
        const result = await sendVerificationEmail(auth.currentUser);
        return result;
      } else if (auth.currentUser?.emailVerified) {
        return { success: false, message: "Email is already verified!" };
      } else {
        return { success: false, message: "No user is currently signed in." };
      }
    } catch (error) {
      console.error("Email verification error:", error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signupWithEmail,
    loginWithEmail,
    resetPassword,
    resendEmailVerification,
    loginWithGoogle,
    logout,
    handleEmailVerification, // Add this for handling verification links
    isAuthenticated: !!user,
    isEmailVerified: user?.emailVerified || false, // Add verification status
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
