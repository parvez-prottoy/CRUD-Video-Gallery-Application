import React from "react";
import AddVideo from "../components/add/AddVideo";
import Form from "../components/add/Form";

const AddPage = () => {
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="w-full">
          <AddVideo />
          <div className="mt-5 md:mt-0 md:col-span-2">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPage;
