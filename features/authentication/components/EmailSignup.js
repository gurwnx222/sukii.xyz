"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import { Eye, EyeOff, Mail, X, User } from "lucide-react";

const EmailSignup = ({ onSuccess, className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [touchedFields, setTouchedFields] = useState(new Set());

  const { signupWithEmail } = useAuth();
  const router = useRouter();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const getPasswordStrength = (password) => {
    let score = 0;
    const feedback = [];

    if (password.length >= 8) score += 1;
    else feedback.push("At least 8 characters");

    if (/[a-z]/.test(password)) score += 1;
    else feedback.push("One lowercase letter");

    if (/[A-Z]/.test(password)) score += 1;
    else feedback.push("One uppercase letter");

    if (/\d/.test(password)) score += 1;
    else feedback.push("One number");

    if (/[^a-zA-Z0-9]/.test(password)) score += 1;
    else feedback.push("One special character");

    return { score, feedback };
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (getPasswordStrength(formData.password).score < 3) {
      newErrors.password = "Password is too weak";
    }

    return newErrors;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBlur = (field) => {
    setTouchedFields((prev) => new Set(prev).add(field));
    const newErrors = validateForm();
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = validateForm();
    setErrors(newErrors);
    setTouchedFields(new Set(["name", "email", "password"]));

    if (Object.keys(newErrors).length === 0) {
      try {
        await signupWithEmail(formData.email, formData.password, formData.name);

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
      case "auth/email-already-in-use":
        return "An account with this email already exists";
      case "auth/invalid-email":
        return "Invalid email address";
      case "auth/weak-password":
        return "Password is too weak";
      case "auth/network-request-failed":
        return "Network error. Please check your connection";
      default:
        return "An error occurred. Please try again.";
    }
  };

  const passwordStrength = getPasswordStrength(formData.password);

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

      {/* Name field */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-white text-sm font-medium">
          Full Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            disabled={loading}
            className={`w-full bg-gray-800/50 border rounded-md px-3 py-3 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 focus:border-purple-400 disabled:opacity-50 ${
              errors.name && touchedFields.has("name")
                ? "border-red-400"
                : "border-gray-600"
            }`}
          />
        </div>
        {errors.name && touchedFields.has("name") && (
          <p className="text-red-400 text-sm flex items-center gap-1">
            <X className="w-4 h-4" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email field */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-white text-sm font-medium">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            id="email"
            type="email"
            placeholder="hello@example.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            disabled={loading}
            className={`w-full bg-gray-800/50 border rounded-md px-3 py-3 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 focus:border-purple-400 disabled:opacity-50 ${
              errors.email && touchedFields.has("email")
                ? "border-red-400"
                : "border-gray-600"
            }`}
          />
        </div>
        {errors.email && touchedFields.has("email") && (
          <p className="text-red-400 text-sm flex items-center gap-1">
            <X className="w-4 h-4" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Password field */}
      <div className="space-y-2">
        <label htmlFor="password" className="text-white text-sm font-medium">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            onBlur={() => handleBlur("password")}
            disabled={loading}
            className={`w-full bg-gray-800/50 border rounded-md px-3 py-3 pr-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 focus:border-purple-400 disabled:opacity-50 ${
              errors.password && touchedFields.has("password")
                ? "border-red-400"
                : "border-gray-600"
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

        {/* Password strength indicator */}
        {formData.password && (
          <div className="space-y-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full ${
                    i <= passwordStrength.score
                      ? passwordStrength.score <= 2
                        ? "bg-red-400"
                        : passwordStrength.score <= 3
                        ? "bg-yellow-400"
                        : "bg-green-400"
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
            {passwordStrength.feedback.length > 0 && (
              <div className="text-xs text-gray-400">
                Missing: {passwordStrength.feedback.join(", ")}
              </div>
            )}
          </div>
        )}

        {errors.password && touchedFields.has("password") && (
          <p className="text-red-400 text-sm flex items-center gap-1">
            <X className="w-4 h-4" />
            {errors.password}
          </p>
        )}
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
            Creating account...
          </div>
        ) : (
          "Create Account"
        )}
      </button>
    </form>
  );
};

export default EmailSignup;
