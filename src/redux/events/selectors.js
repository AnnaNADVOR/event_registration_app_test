import { createSelector } from '@reduxjs/toolkit';

export const selectEventsList = state => state.events.eventsList;
export const selectCurrentEvent = state => state.events.currentEvent;
