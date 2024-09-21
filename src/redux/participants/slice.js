import { createSlice } from '@reduxjs/toolkit';

import { addParticipant, getParticipantsByEventId } from './operations';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const participantsSlice = createSlice({
  name: 'participants',
  initialState: {
    participantsList: [],
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(addParticipant.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(addParticipant.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addParticipant.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getParticipantsByEventId.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getParticipantsByEventId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.participantsList = action.payload;
      })
      .addCase(getParticipantsByEventId.rejected, handleRejected);
  },
});

export const participantsReducer = participantsSlice.reducer;
