"use client";

export default function Button({
  name = "Button",
  onClick,
  disabled = false,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 
        text-white font-semibold 
        rounded-lg 
        transition-all duration-200 
        hover:opacity-90 
        active:scale-95 
        disabled:opacity-50 
        disabled:cursor-not-allowed
        focus:outline-none 
        focus:ring-2 
        focus:ring-purple-400 
        focus:ring-offset-2
        flex items-center justify-center gap-2
        group
        ${className}
      `}
      style={{ backgroundColor: "#8500d1" }}
    >
      <span>{name}</span>
      <svg
        className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  );
}
