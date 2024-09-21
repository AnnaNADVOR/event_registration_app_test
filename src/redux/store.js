import { configureStore } from '@reduxjs/toolkit';

import { eventsReducer } from './events/slice';
import { participantsReducer } from './participants/slice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    participants: participantsReducer,
  },
});
