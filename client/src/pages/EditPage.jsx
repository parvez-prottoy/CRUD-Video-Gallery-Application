import React from "react";
import EditVideo from "../components/edit/EditVideo";
import Form from "../components/edit/Form";
import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../features/api/apiSlice";

const EditPage = () => {
  const { videoId } = useParams();
  const { data, isLoading, isSuccess } = useGetVideoQuery(videoId);
  const video = data?.data || {};
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="w-full">
          <EditVideo />
          <div className="mt-5 md:mt-0 md:col-span-2">
            {isLoading && <div>Loading...</div>}
            {isSuccess && <Form video={video} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditPage;
