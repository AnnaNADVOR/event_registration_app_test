import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../services/api';

export const getEvents = createAsyncThunk(
    '/events/getEvents',
    async ({ rejectWithValue }) => {
        try {
            const response = await API.getEvents();
            return response;
        } catch (error) {
return rejectWithValue(error.message);    
        }
    }
)