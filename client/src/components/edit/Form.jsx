import React, { useState } from "react";
import TextInput from "../../ui/TextInput";
import TextArea from "../../ui/TextArea";
import { useUpdateVideoMutation } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Form = ({ video }) => {
  const navigate = useNavigate();
  const [updateValues, setUpdateValues] = useState({ ...video });
  const handleChange = (e) => {
    setUpdateValues({
      ...updateValues,
      [e.target.name]: e.target.value,
    });
  };
  const [updateVideo, { isLoading }] = useUpdateVideoMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    updateVideo({
      id: video._id,
      data: updateValues,
    });
    toast.success("Video was updated successfully");
    navigate(`/videos/${video._id}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="PATCH">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <TextInput
                  onChange={handleChange}
                  name="title"
                  value={updateValues.title}
                  title="Title"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <TextInput
                  onChange={handleChange}
                  name="author"
                  title="Author"
                  value={updateValues.author}
                />
              </div>

              <div className="col-span-6">
                <TextArea
                  onChange={handleChange}
                  name="description"
                  title="Description"
                  value={updateValues.description}
                />
              </div>

              <div className="col-span-6">
                <TextInput
                  onChange={handleChange}
                  name="image"
                  title="Author Image Link"
                  value={updateValues.image}
                />
              </div>
              <div className="col-span-6">
                <TextInput
                  onChange={handleChange}
                  name="link"
                  title="YouTube Video Link"
                  value={updateValues.link}
                />
              </div>

              <div className="col-span-6">
                <TextInput
                  onChange={handleChange}
                  name="thumbnail"
                  title="Thumbnail link"
                  value={updateValues.thumbnail}
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <TextInput
                  onChange={handleChange}
                  name="date"
                  value={updateValues.date}
                  title="Date"
                />
              </div>
              <div className="col-span-6 sm:col-span-2">
                <TextInput
                  onChange={handleChange}
                  name="duration"
                  title="Duration"
                  value={updateValues.duration}
                />
              </div>
              <div className="col-span-6 sm:col-span-2">
                <TextInput
                  onChange={handleChange}
                  name="views"
                  value={updateValues.views}
                  title="Views"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1b66b9]  hover:hover:bg-[#e91348] duration-200 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
            >
              {isLoading ? "Loading" : "Update"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
