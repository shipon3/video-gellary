import React from "react";

const FilterButton = ({ title = {} }) => {
	return (
		<div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
			{title}
		</div>
	);
};

export default FilterButton;
