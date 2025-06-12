// App.tsx
import { Header, SideBar, Main, PlayItem } from "@maj0codes/ui-library";
import "./tailwind.css";
import { useState } from "react";
import { useMovieData } from "./hooks/useMovieData";
import { useIsMobile } from "./hooks/useIsMobile";
import { NavItem, UserData, Category } from "../src/types/types";

function App() {
	const { videos, bannerPromo, continueWatching, popular } = useMovieData();
	const [openSideBar, setOpenSideBar] = useState(true);
	const isMobile = useIsMobile();

	const navItems: NavItem[] = [
		{ title: "Movies", link: "" },
		{ title: "TV shows", link: "" },
		{ title: "Animations", link: "" },
		{ title: "Plans", link: "" },
	];

	const userData: UserData[] = [
		{
			name: "Joe",
			imageSrc: "/static/Profile.png",
		},
	];

	const category: Category = {
		allCategories: ["Action", "Western", "Adventures", "Drama", "Sci-Fi"],
		favouriteCategorie: ["Crime", "Comedy", "Thriller"],
	};

	return (
		<div className="">
			<div className="w-full">
				<Header navItems={navItems} userData={userData} />
			</div>
			<div className="flex">
				{openSideBar ? (
					<div className="w-full xs:absolute">
						<SideBar
							videos={videos}
							category={category}
							onCloseSideBar={() => setOpenSideBar(false)}
						/>
					</div>
				) : (
					<div
						className="absolute top-5 left-5 w-7 lg:top-3/9"
						onClick={() => setOpenSideBar(true)}>
						<PlayItem />
					</div>
				)}
				{(!isMobile || !openSideBar) && (
					<div className="w-full h-min flex justify-center">
						<Main
							bannerPromo={bannerPromo}
							continueWatching={continueWatching}
							popular={popular}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
