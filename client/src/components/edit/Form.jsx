import React from "react";
import TextInput from "../../ui/TextInput";
import TextArea from "../../ui/TextArea";

const Form = () => {
  return (
    <>
      <form action="#" method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <TextInput title="Title" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <TextInput title="Author" />
              </div>

              <div className="col-span-6">
                <TextArea title="Description" />
              </div>

              <div className="col-span-6">
                <TextInput title="Author Image Link" />
              </div>
              <div className="col-span-6">
                <TextInput title="YouTube Video Link" />
              </div>

              <div className="col-span-6">
                <TextInput title="Thumbnail link" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <TextInput title="Duration" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <TextInput title="Views" />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#1b66b9]  hover:hover:bg-[#e91348] duration-200 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
