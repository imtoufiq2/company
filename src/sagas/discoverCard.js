
import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import GetDiscoverData from "../services/discoverDataApi"
import { fetchDiscoverDataFailure, fetchDiscoverDataSuccess } from "../redux/actions/discoverCard";

let api = new GetDiscoverData();





export function*  getDiscoverData({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getDiscoverData(payload);
    console.log("asdfasasdgasd", response)
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(fetchDiscoverDataSuccess(response?.data)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(fetchDiscoverDataFailure(e?.message || "something went wrong"));
  }
}



