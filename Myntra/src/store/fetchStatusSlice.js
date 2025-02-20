import { createSlice} from '@reduxjs/toolkit'



const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false,  // Indicates whether the fetch is completed
        currentlyFetching: false, // Indicates if a fetch is ongoing
    },
    reducers: {
        markFetchDone: (state) => {
            state.fetchDone = true; 
        },
        markFetchingStarted: (state) => {
            state.currentlyFetching = true;
        },
        markFetchingFinished: (state) => {
            state.currentlyFetching = false;
        }
    }
});

export const fetcherActions=fetchStatusSlice.actions;

export default fetchStatusSlice;
