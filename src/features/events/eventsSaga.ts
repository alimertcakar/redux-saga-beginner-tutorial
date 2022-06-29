import {
  all,
  call,
  put,
  takeEvery,
  takeLatest,
  delay,
  debounce,
  throttle,
} from "redux-saga/effects";
import { fetchEvents } from "./eventsApi";

function* _fetchEvents(action: any) {
  console.log("EVENTS FETCHED");
  try {
    //@ts-ignore
    const eventsData = yield call(fetchEvents);
    yield put({ type: "events/setEvents", payload: eventsData });
  } catch (e) {
    yield put({
      type: "EVENTS_FETCH_FAILED",
      message: "Sorry, fetch events failed.",
    });
  }
}

function* logAliMert() {
  yield console.info("alimert");
}

function* eventsSaga() {
  yield logAliMert();
  yield throttle(1000, "EVENTS_FETCH_REQUESTED", _fetchEvents);
}

export default eventsSaga;
