import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import GetDiscoverData from "../services/discoverDataApi";
import {
  fetchDiscoverDataFailure,
  fetchDiscoverDataSuccess,
} from "../redux/actions/discoverCard";

let api = new GetDiscoverData();

export function* getDiscoverData({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getDiscoverData(payload);
    yield put(fetchDiscoverDataSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      fetchDiscoverDataFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}
