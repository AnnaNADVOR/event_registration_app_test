import { createSlice } from '@reduxjs/toolkit';
import { getEventById, getEvents } from './operations';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    eventsList: [],
    totalData: null,
    currentEvent: null,
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getEvents.pending, (state, action) => {        
        if (action.meta.arg.page > 1) {
          state.isLoading = false;
        } else {
          state.isLoading = true;
        }
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.totalData = action.payload.total;
        if (action.payload.page === 1) {
          state.eventsList = [];
        }
        state.eventsList = [...state.eventsList, ...action.payload.result];
      })
      .addCase(getEvents.rejected, handleRejected)
      .addCase(getEventById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentEvent = action.payload;
      });
  },
});

export const eventsReducer = eventsSlice.reducer;
