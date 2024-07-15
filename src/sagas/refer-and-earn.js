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
    yield put(getReferralStatsSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      getReferralStatsFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}
