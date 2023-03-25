import React from "react";
import VideoIframe from "./VideoIfrem";
import LikeImage from "../../assets/like.svg";
import UnLikeImage from "../../assets/unlike.svg";
const SingleVideo = () => {
	return (
		<div className="col-span-full w-full space-y-8 lg:col-span-2">
			<VideoIframe />

			<div>
				<h1 className="text-lg font-semibold tracking-tight text-slate-800">
					Some video title
				</h1>
				<div className="pb-4 flex items-center space-between border-b">
					<h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
						Uploaded on 23 Nov 2022
					</h2>

					<div className="flex gap-10 w-48">
						<div className="flex gap-1">
							<div className="shrink-0">
								<img className="w-5 block" src={LikeImage} alt="Like" />
							</div>
							<div className="text-sm leading-[1.7142857] text-slate-600">
								100K
							</div>
						</div>
						<div className="flex gap-1">
							<div className="shrink-0">
								<img className="w-5 block" src={UnLikeImage} alt="Unlike" />
							</div>
							<div className="text-sm leading-[1.7142857] text-slate-600">
								100K
							</div>
						</div>
					</div>
				</div>

				<div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
					Some video description here
				</div>
			</div>
		</div>
	);
};

export default SingleVideo;
