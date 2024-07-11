
import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import FetchInvestDetailsApi from "../services/fetchInvestDetailsApi"
import { fetchInvestDetailsFailure, fetchInvestDetailsSuccess, fetchSelectDataFailure, fetchSelectDataSuccess, fetchSpecialOfferFailure, fetchSpecialOfferSuccess, fetchTableDataFailure, fetchTableDataSuccess } from "../redux/actions/investDetails";
let api = new FetchInvestDetailsApi();

export function*  fetchInvestDetails({ type, payload, resolve, reject }) {
  try {
   
    yield put(setLoading());
    let response = yield api.fetchInvestDetails(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(fetchInvestDetailsSuccess(response?.data)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(fetchInvestDetailsFailure(e?.message || "something went wrong"));
  }
}


export function*  fetchTableData({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchTableData(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(fetchTableDataSuccess(response?.data)); 
  } catch (e) {
    yield put(fetchTableDataFailure(e?.message || "something went wrong"));
  }
}



export function*  fetchSelectData({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchSelectData(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(fetchSelectDataSuccess(response?.data)); 
  } catch (e) {
    yield put(fetchSelectDataFailure(e?.message || "something went wrong"));
  }
}

export function*  fetchSpecialOffer({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchSpecialOffer(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(fetchSpecialOfferSuccess(response?.data)); 
  } catch (e) {
    yield put(fetchSpecialOfferFailure(e?.message || "something went wrong"));
  }
}