import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    categoryId: 1000,
    sort: {
        name: "популярности",
        sortProperty: "rating"
    }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            console.log("actipn payload " + action.payload)
            state.categoryId = action.payload;
        }
    }
})

export const {setCategoryId} = filterSlice.actions;
export default filterSlice.reducer;
