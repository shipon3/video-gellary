import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosApi";

const initialState = {
	relatedVideos: [],
	isLoading: "",
	isError: "",
	error: "",
};
export const fetchRelatedVideos = createAsyncThunk(
	"relatedVideos/fetchRelatedVideos",
	async ({ tags, id }) => {
		const relatedVideos = await getRelatedVideos({ tags, id });

		return relatedVideos;
	}
);
const relatedVideosSlice = createSlice({
	name: "relatedVideo",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchRelatedVideos.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
				state.isError = false;
				state.isLoading = false;
				state.relatedVideos = action.payload;
			})
			.addCase(fetchRelatedVideos.rejected, (state, action) => {
				state.isError = true;
				state.isLoading = false;
				state.relatedVideos = [];
				state.error = action.error?.message;
			});
	},
});

export default relatedVideosSlice.reducer;
