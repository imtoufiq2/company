import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import dashboardApi from "../services/dashboard";
import {
  fetchBannerFailure,
  fetchBannerSuccess,
  fetchFaqFailure,
  fetchFaqSuccess,
  fetchShowCaseFailure,
  fetchShowCaseSuccess,
  fetchTestimonialFailure,
  fetchTestimonialSuccess,
} from "../redux/actions/dashboard";

let api = new dashboardApi();

//this is the generator function for the fetchBanner data
export function* fetchBanner({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchBanner(payload);
    yield put(fetchBannerSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(fetchBannerFailure(error?.message || "Something went wrong"));
  } finally {
    yield put(clearLoading());
  }
}

//this is the generator function for the showcase data
export function* showCaseData({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.showCaseData(payload);
    yield put(fetchShowCaseSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(fetchShowCaseFailure(error?.message || "Something went wrong"));
  } finally {
    yield put(clearLoading());
  }
}

//this is the generator function for the testimonial data
export function* fetchTestimonial({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchTestimonial(payload);
    yield put(fetchTestimonialSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      fetchTestimonialFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}

//this is the generator function for the faq data
export function* fetchFaq({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getFaq(payload);
    yield put(fetchFaqSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(fetchFaqFailure(error?.message || "Something went wrong"));
  } finally {
    yield put(clearLoading());
  }
}
