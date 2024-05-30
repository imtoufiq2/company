
import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import PortfolioApi from "../services/portfolioApi"
import { fetchPortfolioSuccess , fetchPortfolioFailure} from "../redux/actions/portfolio";
let api = new PortfolioApi();

export function*  fetchPortfolio({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.fetchPortfolio(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    console.warn("response", response?.data)
    yield put(fetchPortfolioSuccess(response?.data)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(fetchPortfolioFailure(e?.message));
  }
}