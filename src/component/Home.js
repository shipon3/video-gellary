import React from "react";
import Filters from "./filter/Filters";
import Pagination from "./ui/Pagination";
import GridItems from "./videoGrid/GridItems";

const Home = () => {
	return (
		<>
			<Filters />

			<GridItems />
			<Pagination />
		</>
	);
};

export default Home;
