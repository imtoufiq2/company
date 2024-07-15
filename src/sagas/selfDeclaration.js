import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import PersonalInfoApi from "../services/selfDeclarationApi";
import {
  getAnualIncomeInfoFailure,
  getAnualIncomeInfoSuccess,
  getDeclarationInfoFailure,
  getDeclarationInfoSuccess,
  getOccupationlInfoFailure,
  getOccupationlInfoSuccess,
  getPersonalInfoFailure,
  getPersonalInfoSuccess,
  getProfessionalInfoFailure,
  getProfessionalInfoSuccess,
  getSourceOfIncomeInfoFailure,
  getSourceOfIncomeInfoSuccess,
  updateDeclarationInfoFailure,
  updateDeclarationInfoSuccess,
  updatePersonalInfoFailure,
  updatePersonalInfoSuccess,
  updateProfessionalInfoFailure,
  updateProfessionalInfoSuccess,
} from "../redux/actions/selfDeclaration";
let api = new PersonalInfoApi();

export function* getPersonalInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getPersonalInfo(payload);
    yield put(getPersonalInfoSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(getPersonalInfoFailure(error?.message || "Something went wrong"));
  } finally {
    yield put(clearLoading());
  }
}

// this is for the update
export function* updatePersonalInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.updatePersonalInfo(payload);
    yield put(updatePersonalInfoSuccess(response));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      updatePersonalInfoFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}

// =============== this is for the professionalInfo ==================

export function* getProfessionalInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getProfessionalInfo(payload);
    yield put(getProfessionalInfoSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      getProfessionalInfoFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}

export function* getOccupationlInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getOccupationlInfo(payload);
    yield put(getOccupationlInfoSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      getOccupationlInfoFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}

export function* getAnualIncomeInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getAnualIncomeInfo(payload);
    yield put(getAnualIncomeInfoSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      getAnualIncomeInfoFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}

export function* getSourceOfIncomeInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getSourceOfIncomeInfo(payload);
    yield put(getSourceOfIncomeInfoSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      getSourceOfIncomeInfoFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}

export function* updateProfessionalInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.updateProfessionalInfo(payload);
    yield put(updateProfessionalInfoSuccess(response));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      updateProfessionalInfoFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}
// ============= this is for the declaration===============

export function* getDeclarationInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getDeclarationInfo(payload);
    yield put(getDeclarationInfoSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      getDeclarationInfoFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}

export function* updateDeclarationInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.updateDeclarationInfo(payload);
    yield put(updateDeclarationInfoSuccess(response?.data));
    resolve && resolve(response);
  } catch (error) {
    yield put(
      updateDeclarationInfoFailure(error?.message || "Something went wrong"),
    );
  } finally {
    yield put(clearLoading());
  }
}
