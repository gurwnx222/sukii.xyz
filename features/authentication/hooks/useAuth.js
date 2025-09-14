import { useAuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const {
    user,
    loading,
    isAdmin,
    checkIsAdmin,
    loginWithGoogle,
    logout,
    isAuthenticated,
    signupWithEmail,
    loginWithEmail,
    resetPassword,
    resendEmailVerification,
  } = useAuthContext();

  return {
    user,
    loading,
    isAdmin,
    checkIsAdmin,
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
