
import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import FetchInvestDetailsApi from "../services/fetchInvestDetailsApi"
import { fetchInvestDetailsFailure, fetchInvestDetailsSuccess, fetchSelectDataFailure, fetchSelectDataSuccess, fetchTableDataFailure, fetchTableDataSuccess } from "../redux/actions/investDetails";
let api = new FetchInvestDetailsApi();

export function*  fetchInvestDetails({ type, payload, resolve, reject }) {
  try {
   
    yield put(setLoading());
    let response = yield api.fetchInvestDetails(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    console.warn("fetchinvestDetails", response)
    yield put(fetchInvestDetailsSuccess(response?.data)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(fetchInvestDetailsFailure(e?.message));
  }
}


export function*  fetchTableData({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchTableData(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    console.log("table dataasfdasdf", response?.data)
    yield put(fetchTableDataSuccess(response?.data)); 
  } catch (e) {
    yield put(fetchTableDataFailure(e?.message));
  }
}



export function*  fetchSelectData({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchSelectData(payload);
    console.warn("resss", response)
    yield put(clearLoading());   
    resolve && resolve(response);
    console.log("table sdasfdasfdas", response?.data)
    yield put(fetchSelectDataSuccess(response?.data)); 
  } catch (e) {
    yield put(fetchSelectDataFailure(e?.message));
  }
}