import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface EventsState {
  events: any[];
  status: "idle" | "loading" | "failed";
}

const initialState: EventsState = {
  events: [],
  status: "idle",
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<any>) => {
      state.events = action.payload;
    },
  },
});

export const eventsSelector = (state: RootState) => state.events.events;

export default eventsSlice.reducer;
