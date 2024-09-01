import React from "react";
import Player from "../components/video/Player";
import Description from "../components/video/Description";
import RelatedVideos from "../components/video/related/RelatedVideos";
import { useGetVideoQuery } from "../features/api/apiSlice";
import PlayerLoader from "../ui/loaders/PlayerLoader";
import DescriptionLoader from "../ui/loaders/DescriptionLoader";
import Error from "../ui/Error";
import { useParams } from "react-router-dom";
import RelatedVideoLoader from "../ui/loaders/RelatedVideoLoader";

const VideoPage = () => {
  const { videoId } = useParams();
  const { data: data, isLoading, isError } = useGetVideoQuery(videoId);
  const { data: video } = data || {};
  let content = null;
  if (isLoading) {
    content = (
      <>
        <PlayerLoader />
        <DescriptionLoader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error!" />;
  }
  if (!isLoading && !isError && video?._id) {
    content = (
      <>
        <Player link={video.link} title={video.title} />
        <Description video={video} />
      </>
    );
  }
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {content}
          </div>
          {isLoading ? (
            <RelatedVideoLoader />
          ) : (
            video._id && <RelatedVideos id={video._id} title={video.title} />
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoPage;
