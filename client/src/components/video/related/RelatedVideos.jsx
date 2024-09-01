import React from "react";
import RelatedVideo from "./RelatedVideo";
import { useGetRelatedVideosQuery } from "../../../features/api/apiSlice";
import RelatedVideoLoader from "../../../ui/loaders/RelatedVideoLoader";
import Error from "../../../ui/Error";

const RelatedVideos = ({ id, title }) => {
  const { data, isLoading, isError } = useGetRelatedVideosQuery({ id, title });
  const { data: relatedVideos } = data || [] || {};
  let content = null;
  if (isLoading) {
    content = [...Array(4)].map((_, i) => <RelatedVideoLoader key={i} />);
  }
  if (!isLoading && isError) {
    content = <Error message={"There was an error!"} />;
  }
  if (!isLoading && !isError && relatedVideos.length === 0) {
    content = <Error message={"No related video found!"} />;
  }
  if (!isLoading && !isError && relatedVideos.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideo key={video._id} video={video} />
    ));
  }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideos;
