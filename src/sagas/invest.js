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
    yield put(fetchInvestSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(fetchInvestFailure(error?.message || "Something went wrong"));
  } finally {
    yield put(clearLoading());
  }
}

export function* fetchIssuers({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchIssuers(payload);
    yield put(fetchIssuersSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(fetchIssuersFailure(error?.message || "Something went wrong"));
  } finally {
    yield put(clearLoading());
  }
}

export function* fetchCompareReturn({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchCompareReturn(payload);
    yield put(fetchCompareReturnSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      fetchCompareReturnFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}
