import { Header, SideBar, Main } from "@maj0codes/ui-library";
import "./tailwind.css";
import {
	navItems,
	userData,
	videos,
	category,
	bannerPromo,
	continueWatching,
	popular,
} from "./utils";
import { useEffect, useState } from "react";
import { discoverMovies } from "./services/tmdb.service";

function App() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		discoverMovies().then((response) => setMovies(response.data.results));
	}, []);
	console.log({ movies });

	return (
		<div className="">
			<div className="w-full">
				<Header navItems={navItems} userData={userData} />
			</div>
			<div className="flex">
				{/* Sidebar: hidden on mobile, visible on md+ screens */}
				<div className="hidden md:block">
					<SideBar videos={videos} category={category} />
				</div>
				<div className="w-full h-min flex justify-center">
					<Main
						bannerPromo={bannerPromo}
						continueWatching={continueWatching}
						popular={popular}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
