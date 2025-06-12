import { useState, useEffect } from "react";

export const useIsMobile = (breakpoint = 768) => {
	const [isMobile, setIsMobile] = useState<boolean>(
		typeof window !== "undefined" ? window.innerWidth < breakpoint : false
	);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < breakpoint);
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, [breakpoint]);

	return isMobile;
};
