import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import InvestApi from "../services/investApi";
import {
  fetchCompareReturnFailure,
  fetchCompareReturnSuccess,
  fetchInvestFailure,
  fetchInvestSuccess,
  fetchIssuersFailure,
  fetchIssuersSuccess,
} from "../redux/actions/invest";

let api = new InvestApi();

export function* fetchInvest({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchInvest(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    yield put(fetchInvestSuccess(response?.data));
  } catch (e) {
    console.log("Something went wrong");
    yield put(fetchInvestFailure(e?.message));
  }
}

export function* fetchIssuers({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchIssuers(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    yield put(fetchIssuersSuccess(response?.data));
  } catch (e) {
    console.log("Something went wrong");
    yield put(fetchIssuersFailure(e?.message));
  }
}

export function* fetchCompareReturn({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchCompareReturn(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    yield put(fetchCompareReturnSuccess(response?.data));
  } catch (e) {
    console.log("Something went wrong");
    yield put(fetchCompareReturnFailure(e?.message || "something went wrong"));
  }
}
