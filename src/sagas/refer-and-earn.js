import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import GetRefferralStats from "../services/refer-and-earnApi";
import {
  getReferralStatsFailure,
  getReferralStatsSuccess,
} from "../redux/actions/refer-and-earn";

let api = new GetRefferralStats();

export function* getRefferalStats({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getRefferralStats(payload);
    console.log("resasdfas", response)
    yield put(clearLoading());
    resolve && resolve(response);
    yield put(getReferralStatsSuccess(response?.data));
  } catch (e) {
    console.log("Something went wrong");
    yield put(getReferralStatsFailure(e?.message || "something went wrong"));
  }
}
