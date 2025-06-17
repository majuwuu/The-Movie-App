import React from "react";
import { NotFound } from "@maj0codes/ui-library";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate("/");
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<NotFound onClickEvent={handleGoHome} />
		</div>
	);
};

export default PageNotFound;
