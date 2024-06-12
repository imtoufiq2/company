
import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import PersonalInfoApi from "../services/selfDeclarationApi"
import { getPersonalInfoFailure, getPersonalInfoSuccess, updatePersonalInfoFailure, updatePersonalInfoSuccess } from "../redux/actions/selfDeclaration";
let api = new PersonalInfoApi();

export function*  getPersonalInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getPersonalInfo(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(getPersonalInfoSuccess(response?.data)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(getPersonalInfoFailure(e?.message));
  }
}


// =========== this is for the update==============
export function*  updatePersonalInfo({ type, payload, resolve, reject }) {
  try {
   console.log("tesitng , checking")
    yield put(setLoading());
    let response = yield api.updatePersonalInfo(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    console.warn("getPersonalInfosadf", response)
    yield put(updatePersonalInfoSuccess(response?.data)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(updatePersonalInfoFailure(e?.message));
  }
}


