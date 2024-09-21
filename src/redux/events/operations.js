import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../services/api';

export const getEvents = createAsyncThunk(
  'events/getEvents',
  async ({ limit, page, sortOptions }, { rejectWithValue }) => {
    try {
      const response = await API.getEvents(limit, page, sortOptions);
      response.page = page;
      return response;
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(error.message);
    }
  }
);

export const getEventById = createAsyncThunk(
  'events/geteventById',
  async (eventId, { rejectWithValue }) => {
    try {
      const response = await API.getEventById(eventId);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
