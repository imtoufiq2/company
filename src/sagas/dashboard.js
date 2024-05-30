import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import dashboardApi from "../services/dashboard";
import {
  fetchBannerFailure,
  fetchBannerSuccess,
  fetchShowCaseFailure,
  fetchShowCaseSuccess,
} from "../redux/actions/dashboard";

let api = new dashboardApi();
//this is the generator function for the fetchBanner data
export function* fetchBanner({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchBanner(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    yield put(fetchBannerSuccess(response?.data));
  } catch (e) {
    console.log("Something went wrong");
    yield put(fetchBannerFailure(e?.message));
  }
}

//this is the generator function for the showcase data
export function* showCaseData({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.showCaseData(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    yield put(fetchShowCaseSuccess(response?.data));
  } catch (e) {
    console.log("Something went wrong");
    yield put(fetchShowCaseFailure(e?.message));
  }
}
