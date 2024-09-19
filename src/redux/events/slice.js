import { createSlice } from '@reduxjs/toolkit';

import { getEvents } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
        error: null,
        isLoading: false,
    },
    extraReducers: builder => {
        builder
            .addCase(getEvents.pending, handlePending)
            .addCase(getEvents.fullfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.events.push(action.payload);
        })
    }

})

export const eventsReducer = eventsSlice.reducer; 