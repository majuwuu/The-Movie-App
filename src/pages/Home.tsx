// App.tsx
import { Header, SideBar, Main, PlayItem } from "@maj0codes/ui-library";
import "../tailwind.css";
import { useContext, useState } from "react";
import { useMovieData } from "../hooks/useMovieData";
import { useIsMobile } from "../hooks/useIsMobile";
import { NavItem, UserData, Category } from "../../src/types/types";
import { ToastContext } from "../hooks/index";
import { Toast } from "@maj0codes/ui-library";

function Home() {
	const { videos, bannerPromo, continueWatching, popular } = useMovieData();
	const [openSideBar, setOpenSideBar] = useState(true);
	const isMobile = useIsMobile();
	const { toastType } = useContext(ToastContext);

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
		<div className="min-h-full relative 2xl:max-h-screen 2xl:overflow-hidden ">
			<div className="w-full">
				<Header navItems={navItems} userData={userData} />
			</div>
			<div className="flex">
				{openSideBar ? (
					<div>
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
				{toastType !== "" && (
					<div className="absolute bottom-5 left-5">
						<Toast label="Something went wrong. Please try again later" />
					</div>
				)}
			</div>
		</div>
	);
}

export default Home;
