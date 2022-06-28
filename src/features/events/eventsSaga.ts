import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchEvents } from "./eventsApi";

function* fetchUser(action: any) {
  try {
    //@ts-ignore
    const user = yield call(fetchEvents);
    yield put({ type: "EVENTS_FETCH_SUCCEEDED", value: user });
  } catch (e) {
    yield put({
      type: "EVENTS_FETCH_FAILED",
      message: "Sorry, fetch events failed.",
    });
  }
}

function* eventsSaga() {
  yield takeEvery("EVENTS_FETCH_REQUESTED", fetchUser);
}

export default eventsSaga;
