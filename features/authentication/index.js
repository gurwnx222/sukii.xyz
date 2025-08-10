// Export all auth-related components and hooks
export { AuthProvider, useAuthContext } from "./context/AuthContext";
export { useAuth } from "./hooks/useAuth";
export { default as GoogleSignIn } from "./components/GoogleSignIn";
export { default as AuthButton } from "./components/AuthButton";
export { default as ProtectedRoute } from "./components/ProtectedRoute";

// NEW: Export email auth components
export { default as EmailSignup } from "./components/EmailSignup";
export { default as EmailLogin } from "./components/EmailLogin";
export { default as ForgotPassword } from "./components/ForgotPassword";
