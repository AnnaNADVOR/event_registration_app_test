import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../services/api';

export const addParticipant = createAsyncThunk(
  'participants/addParticipant',
  async (
    { eventId, userFullName, userEmail, userBirthDate, infoSource },
    { rejectWithValue }
  ) => {
    try {
      const response = await API.addParticipant({
        eventId,
        userFullName,
        userEmail,
        userBirthDate,
        infoSource,
      });
      return response;
    } catch (error) {    
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getParticipantsByEventId = createAsyncThunk(
  'participants/getParticipantsByEventId',
  async (eventId, { rejectWithValue }) => {
    try {
      const response = await API.getParticipantsByEventId(eventId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
