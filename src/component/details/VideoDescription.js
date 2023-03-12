import React from "react";
import RelatedVideoList from "./RelatedVideoList";
import SingleVideo from "./SingleVideo";

const VideoDescription = () => {
	return (
		<section class="pt-6 pb-20">
			<div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
				<div class="grid grid-cols-3 gap-2 lg:gap-8">
					<SingleVideo />

					<RelatedVideoList />
				</div>
			</div>
		</section>
	);
};

export default VideoDescription;
