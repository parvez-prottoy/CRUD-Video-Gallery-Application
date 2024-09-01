import React, { useState } from "react";
import TextInput from "../../ui/TextInput";
import TextArea from "../../ui/TextArea";
import { useAddVideoMutation } from "../../features/api/apiSlice";
import Error from "../../ui/Error";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Form = () => {
  const navigate = useNavigate();
  const [addVideo, { isLoading, isError }] = useAddVideoMutation();
  const initialState = {
    title: "",
    description: "",
    author: "",
    image: "",
    date: "",
    duration: "",
    views: "",
    link: "",
    thumbnail: "",
  };
  const [inputValues, setInputValues] = useState({ ...initialState });
  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(inputValues);
    toast.success("Video was added successfully");
    navigate("/");
  };
  const clearInputValues = () => {
    setInputValues({ ...initialState });
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <TextInput onChange={handleChange} name="title" title="Title" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <TextInput
                  onChange={handleChange}
                  name="author"
                  title="Author"
                />
              </div>

              <div className="col-span-6">
                <TextArea
                  onChange={handleChange}
                  name="description"
                  title="Description"
                />
              </div>

              <div className="col-span-6">
                <TextInput
                  onChange={handleChange}
                  name="image"
                  title="Author Image Link"
                />
              </div>
              <div className="col-span-6">
                <TextInput
                  onChange={handleChange}
                  name="link"
                  title="YouTube Video Link"
                />
              </div>

              <div className="col-span-6">
                <TextInput
                  onChange={handleChange}
                  name="thumbnail"
                  title="Thumbnail link"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <TextInput onChange={handleChange} name="date" title="Date" />
              </div>
              <div className="col-span-6 sm:col-span-2">
                <TextInput
                  onChange={handleChange}
                  name="duration"
                  title="Duration"
                />
              </div>
              <div className="col-span-6 sm:col-span-2">
                <TextInput onChange={handleChange} name="views" title="Views" />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              disabled={isLoading}
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1b66b9]   duration-200 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500 me-3"
            >
              {isLoading ? "Loading..." : "Save"}
            </button>
            <button
              type="reset"
              onClick={clearInputValues}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#e91348]   duration-200 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
            >
              Clear
            </button>
          </div>
          {isError && <Error message="There was an error adding video!" />}
        </div>
      </form>
    </>
  );
};

export default Form;
