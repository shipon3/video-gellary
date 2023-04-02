import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosApi";

const initialState = {
	videos: [],
	isLoading: "",
	isError: "",
	error: "",
};
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
	const videos = await getVideos();

	return videos;
});
const videosSlice = createSlice({
	name: "video",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchVideos.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchVideos.fulfilled, (state, action) => {
				state.isError = false;
				state.isLoading = false;
				state.videos = action.payload;
			})
			.addCase(fetchVideos.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.videos = [];
				state.error = action.error?.message;
			});
	},
});

export default videosSlice.reducer;
