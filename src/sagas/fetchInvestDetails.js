
import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import FetchInvestDetailsApi from "../services/fetchInvestDetailsApi"
import { fetchInvestDetailsFailure, fetchInvestDetailsSuccess, fetchTableDataSuccess } from "../redux/actions/investDetails";
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
    yield put(fetchInvestDetailsFailure(e?.message));
  }
}


export function*  fetchTableData({ type, payload, resolve, reject }) {
  try {
   console.warn("checking")
    yield put(setLoading());
    let response = yield api.fetchTableData(payload);
    yield put(clearLoading());   
    console.warn("respnsoe", response)
    resolve && resolve(response);
    yield put(fetchTableDataSuccess(response?.data)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(fetchInvestDetailsFailure(e?.message));
  }
}