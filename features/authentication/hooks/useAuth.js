import { useAuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const { user, loading, loginWithGoogle, logout, isAuthenticated } =
    useAuthContext();

  return {
    user,
    loading,
    loginWithGoogle,
    logout,
    isAuthenticated,
    // Derived user properties for easy access
    displayName: user?.displayName || "",
    email: user?.email || "",
    photoURL: user?.photoURL || "",
    uid: user?.uid || null,
  };
};
