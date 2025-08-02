"use client";
import { useAuth } from "../hooks/useAuth";
import Image from "next/image";

const AuthButton = () => {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div
      className="auth-button"
      style={{ display: "flex", alignItems: "center", gap: "1rem" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        {user.photoURL && (
          <Image
            src={user.photoURL}
            alt={user.displayName}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
            }}
          />
        )}
        <span>Hello, {user.displayName}</span>
      </div>

      <button
        onClick={handleLogout}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "0.25rem",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AuthButton;
