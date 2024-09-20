import { createSlice } from '@reduxjs/toolkit';

import { getEventById, getEvents } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
    // console.log("action in reject", action)
  state.isLoading = false;
  state.error = action.payload;
};

const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        eventsList: null,
        currentEvent: null,
        error: null,
        isLoading: false,
    },
    extraReducers: builder => {
        builder
            .addCase(getEvents.pending, handlePending)
            .addCase(getEvents.fulfilled, (state, action) => {
                // console.log("action in fulfilled", action)
                state.isLoading = false;
                state.error = null;
                state.eventsList = action.payload;
            })
            .addCase(getEvents.rejected, handleRejected)
            .addCase(getEventById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.currentEvent = action.payload;          
        })
    }

})

export const eventsReducer = eventsSlice.reducer; 