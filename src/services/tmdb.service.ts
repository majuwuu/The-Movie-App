import axios from "axios";
import type { AxiosResponse } from "axios";

export async function getRequest<T>(
	url: string,
	params?: Record<string, unknown>
): Promise<AxiosResponse<T>> {
	const response = await axios.get<T>(url, { params });
	return response;
}
export async function discoverMovies(
	page: number = 1,
	includeAdult: boolean = false,
	includeVideo: boolean = false,
	language: string = "en-US",
	sortBy: string = "popularity.desc"
): Promise<AxiosResponse> {
	const url = "https://api.themoviedb.org/3/discover/movie";
	const params = {
		include_adult: includeAdult,
		include_video: includeVideo,
		language,
		page,
		sort_by: sortBy,
	};
	const response = await axios.get(url, {
		params,
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
		},
	});
	return response;
}
