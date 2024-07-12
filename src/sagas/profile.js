import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import GetBankAccountDetail from "../services/profileApi";
import {
  deleteUserlFailure,
  deleteUserSuccess,
  fetchBankAccountDetailFailure,
  fetchBankAccountDetailSuccess,
  fetchMainProfileDetailFailure,
  fetchMainProfileDetailSuccess,
  fetchPersonalInfoDetailFailure,
  fetchPersonalInfoDetailSuccess,
} from "../redux/actions/profile";

let api = new GetBankAccountDetail();

export function* getBankAccountDetail({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getBankAccountDetail(payload);
    yield put(clearLoading());
    resolve && resolve(response);
    yield put(fetchBankAccountDetailSuccess(response?.data));
    localStorage.clear();
    sessionStorage.clear();
    
  } catch (e) {
    console.log("Something went wrong");
    yield put(
      fetchBankAccountDetailFailure(e?.message || "something went wrong"),
    );
  }
}

export function* getPersonalInfoDetail({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    const response = yield api.getPersonalInfoDetail(payload);
    yield put(fetchPersonalInfoDetailSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      fetchPersonalInfoDetailFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}


export function* fetchMainProfileDetail({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    const response = yield api.fetchMainProfileDetail(payload);
    yield put(fetchMainProfileDetailSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      fetchMainProfileDetailFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}

export function* deleteUser({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    const response = yield api.deleteUser(payload);
    yield put(deleteUserSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      deleteUserlFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}