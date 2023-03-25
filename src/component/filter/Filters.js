import React from "react";
import FilterButton from "./FilterButton";

const Filters = () => {
	return (
		<section>
			<div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
				<FilterButton />
			</div>
		</section>
	);
};

export default Filters;
