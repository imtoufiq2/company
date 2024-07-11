
import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import PortfolioApi from "../services/portfolioApi"
import { fetchPortfolioSuccess , fetchPortfolioFailure, fetchPassbookSuccess, fetchPassbookFailure, fetchInvestmentDetailsSuccess, fetchInvestmentDetailsFailure} from "../redux/actions/portfolio";
let api = new PortfolioApi();

export function*  fetchPortfolio({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchPortfolio(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(fetchPortfolioSuccess(response?.data)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(fetchPortfolioFailure(e?.message));
  }
}

export function*  fetchPassbook({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchPassbook(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(fetchPassbookSuccess(response?.data)); 
  } catch (e) {
    console.error("Something went wrong");
    yield put(fetchPassbookFailure(e?.message || "something went wrong"));
  }
}

export function*  fetchInvestmentDetail({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchInvestmentDetail(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(fetchInvestmentDetailsSuccess(response?.data)); 
  } catch (e) {
    console.error("Something went wrong");
    yield put(fetchInvestmentDetailsFailure(e?.message || "something went wrong"));
  }
}