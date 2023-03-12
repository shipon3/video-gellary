import React from "react";
import RelatedVideo from "./RelatedVideo";

const RelatedVideoList = () => {
	return (
		<div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
			<div class="w-full flex flex-row gap-2 mb-4">
				<RelatedVideo />
			</div>
		</div>
	);
};

export default RelatedVideoList;
