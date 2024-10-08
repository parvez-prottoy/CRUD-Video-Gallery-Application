import React from "react";

const TextArea = ({ title, ...attributes }) => {
  return (
    <>
      <label
        htmlFor="about"
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <div className="mt-1">
        <textarea
          id="about"
          name="about"
          rows="3"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
          {...attributes}
          required
        ></textarea>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Brief description for your video
      </p>
    </>
  );
};

export default TextArea;
