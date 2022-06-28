import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import eventsReducer from "../features/events/eventsSlice";
import createSagaMiddleware from "redux-saga";
import eventSaga from "../features/events/eventsSaga";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(eventSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
