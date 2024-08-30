import React from "react";

const TextInput = ({ title, ...attributes }) => {
  return (
    <>
      <label
        htmlFor="first-name"
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <input
        type="text"
        name="first-name"
        id="first-name"
        autoComplete="given-name"
        className="mt-2 p-2  block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
        {...attributes}
      />
    </>
  );
};

export default TextInput;
