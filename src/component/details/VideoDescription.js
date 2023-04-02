import React, { useEffect } from "react";
import RelatedVideoList from "./RelatedVideoList";
import SingleVideo from "./SingleVideo";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../../features/video/videoSlice";
import { useParams } from "react-router-dom";
import Loading from "../ui/Loading";

const VideoDescription = () => {
	const { video, isLoading, isError, error } = useSelector(
		(state) => state.video
	);
	const dispatch = useDispatch();
	const { videoId } = useParams();

	useEffect(() => {
		dispatch(fetchVideo(videoId));
	}, [dispatch, videoId]);

	// decide to what to render
	let content = null;
	if (isLoading) content = <Loading />;

	if (!isLoading && isError)
		content = <div className="grid-cols-12">{error}</div>;

	if (!isLoading && !isError && !video?.id)
		content = <div className="grid-cols-12">Video Not Found</div>;
	if (!isLoading && !isError && video?.id)
		content = (
			<div className="grid grid-cols-3 gap-2 lg:gap-8">
				<SingleVideo video={video} />

				<RelatedVideoList currentVideoId={video.id} tags={video.tags} />
			</div>
		);

	return (
		<section className="pt-6 pb-20">
			<div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
				{content}
			</div>
		</section>
	);
};

export default VideoDescription;
