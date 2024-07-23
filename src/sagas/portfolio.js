import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import PortfolioApi from "../services/portfolioApi";
import {
  fetchPortfolioSuccess,
  fetchPortfolioFailure,
  fetchPassbookSuccess,
  fetchPassbookFailure,
  fetchInvestmentDetailsSuccess,
  fetchInvestmentDetailsFailure,
} from "../redux/actions/portfolio";
let api = new PortfolioApi();

export function* fetchPortfolio({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchPortfolio(payload);
    yield put(fetchPortfolioSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(fetchPortfolioFailure(error?.message || "Something went wrong"));
  } finally {
    yield put(clearLoading());
  }
}

export function* fetchPassbook({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchPassbook(payload);
    yield put(fetchPassbookSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(fetchPassbookFailure(error?.message || "Something went wrong"));
  } finally {
    yield put(clearLoading());
  }
}

export function* fetchInvestmentDetail({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchInvestmentDetail(payload);
    yield put(fetchInvestmentDetailsSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      fetchInvestmentDetailsFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}
