import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import FetchInvestDetailsApi from "../services/fetchInvestDetailsApi";
import {
  fetchInvestDetailsFailure,
  fetchInvestDetailsSuccess,
  fetchSelectDataFailure,
  fetchSelectDataSuccess,
  fetchSpecialOfferFailure,
  fetchSpecialOfferSuccess,
  fetchTableDataFailure,
  fetchTableDataSuccess,
} from "../redux/actions/investDetails";
let api = new FetchInvestDetailsApi();

export function* fetchInvestDetails({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchInvestDetails(payload);
    yield put(fetchInvestDetailsSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      fetchInvestDetailsFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}

export function* fetchTableData({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchTableData(payload);
    yield put(fetchTableDataSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(fetchTableDataFailure(error?.message || "Something went wrong"));
  } finally {
    yield put(clearLoading());
  }
}

export function* fetchSelectData({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchSelectData(payload);
    yield put(fetchSelectDataSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(fetchSelectDataFailure(error?.message || "Something went wrong"));
  } finally {
    yield put(clearLoading());
  }
}

export function* fetchSpecialOffer({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchSpecialOffer(payload);
    yield put(fetchSpecialOfferSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      fetchSpecialOfferFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}
