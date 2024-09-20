import { createSlice } from '@reduxjs/toolkit';

import { addParticipant, getParticipantsByEventId } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  // console.log("action in reject", action)
  state.isLoading = false;
  state.error = action.payload;
};

const participantsSlice = createSlice({
  name: 'participants',
  initialState: {
    participantsList: [],
    error: null,
    isLoading: false,
    isRegistered: false,
  },
  extraReducers: builder => {
    builder
      .addCase(addParticipant.pending, handlePending)
      .addCase(addParticipant.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isRegistered = true;
      })
      .addCase(addParticipant.rejected, (state, action) => {
        state.isLoading = false;
        state.isRegistered = false;
        state.error = action.payload;
      })

      .addCase(getParticipantsByEventId.pending, handlePending)
      .addCase(getParticipantsByEventId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isRegistered = false;
        state.participantsList = action.payload;
      })
      .addCase(getParticipantsByEventId.rejected, handleRejected);
  },
});

export const participantsReducer = participantsSlice.reducer;
