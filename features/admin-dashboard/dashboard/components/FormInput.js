// components/FormInput.js
import React from "react";

const FormInput = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  rows,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-300 mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows || 3}
          className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-xl focus:ring-2 focus:border-transparent resize-none transition-all placeholder-gray-400"
          style={{ focusRingColor: "oklch(0.21 0.034 264.665)" }}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-xl focus:ring-2 focus:border-transparent transition-all placeholder-gray-400"
          style={{ focusRingColor: "oklch(0.21 0.034 264.665)" }}
        />
      )}
    </div>
  );
};

export default FormInput;
