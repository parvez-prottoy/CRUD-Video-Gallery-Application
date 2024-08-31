import { useGetVideosQuery } from "../../features/api/apiSlice";
import Error from "../../ui/Error";
import VideoLoader from "../../ui/loaders/VideoLoader";
import Video from "./Video";

const Videos = () => {
  const { data: data, isLoading, isError } = useGetVideosQuery();
  const { data: videos } = data || {};
  // note: decide what to render
  let content = null;
  if (isLoading) {
    content = [...Array(6)].map((_, i) => <VideoLoader key={i} />);
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error occurred!" />;
  }
  if (!isLoading && !isError && videos?.length === 0) {
    content = <Error message="No videos found!" />;
  }
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => <Video key={video._id} video={video} />);
  }
  return <>{content}</>;
};

export default Videos;
