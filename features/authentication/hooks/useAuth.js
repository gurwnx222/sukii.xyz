import { useAuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const {
    user,
    loading,
    loginWithGoogle,
    logout,
    isAuthenticated,
    // Add new methods
    signupWithEmail,
    loginWithEmail,
    resetPassword,
    resendEmailVerification,
  } = useAuthContext();

  return {
    user,
    loading,
    // Existing
    loginWithGoogle,
    logout,
    isAuthenticated,
    // NEW methods
    signupWithEmail,
    loginWithEmail,
    resetPassword,
    resendEmailVerification,
    // Derived user properties
    displayName: user?.displayName || "",
    email: user?.email || "",
    photoURL: user?.photoURL || "",
    uid: user?.uid || null,
    emailVerified: user?.emailVerified || false,
  };
};
