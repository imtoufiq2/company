
import { put } from "redux-saga/effects";
import { setLoading, clearLoading } from "../redux/actions/loader";
import PersonalInfoApi from "../services/selfDeclarationApi"
import { getAnualIncomeInfoFailure, getAnualIncomeInfoSuccess, getDeclarationInfoFailure, getDeclarationInfoSuccess, getOccupationlInfoFailure, getOccupationlInfoSuccess, getPersonalInfoFailure, getPersonalInfoSuccess, getProfessionalInfoFailure, getProfessionalInfoSuccess, getSourceOfIncomeInfoFailure, getSourceOfIncomeInfoSuccess, updateDeclarationInfoFailure, updateDeclarationInfoSuccess, updatePersonalInfoFailure, updatePersonalInfoSuccess, updateProfessionalInfoFailure, updateProfessionalInfoSuccess } from "../redux/actions/selfDeclaration";
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


// this is for the update
export function*  updatePersonalInfo({ type, payload, resolve, reject }) {
  try {
   
    yield put(setLoading());
    let response = yield api.updatePersonalInfo(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    
    yield put(updatePersonalInfoSuccess(response)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(updatePersonalInfoFailure(e?.message));
  }
}


// =============== this is for the professionalInfo ==================
export function*  getProfessionalInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getProfessionalInfo(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(getProfessionalInfoSuccess(response?.data)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(getProfessionalInfoFailure(e?.message));
  }
}

export function*  getOccupationlInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getOccupationlInfo(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(getOccupationlInfoSuccess(response?.data)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(getOccupationlInfoFailure(e?.message));
  }
}

export function*  getAnualIncomeInfo({ type, payload, resolve, reject }) {
  try {
     yield put(setLoading());
    let response = yield api.getAnualIncomeInfo(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(getAnualIncomeInfoSuccess(response?.data)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(getAnualIncomeInfoFailure(e?.message));
  }
}

export function*  getSourceOfIncomeInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getSourceOfIncomeInfo(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(getSourceOfIncomeInfoSuccess(response?.data)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(getSourceOfIncomeInfoFailure(e?.message));
  }
}


export function*  updateProfessionalInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.updateProfessionalInfo(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(updateProfessionalInfoSuccess(response)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(updateProfessionalInfoFailure(e?.message));
  }
}


// ============= this is for the declaration===============
export function*  getDeclarationInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.getDeclarationInfo(payload);
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(getDeclarationInfoSuccess(response?.data)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(getDeclarationInfoFailure(e?.message));
  }
}



export function*  updateDeclarationInfo({ type, payload, resolve, reject }) {
  try {
    yield put(setLoading());
    let response = yield api.updateDeclarationInfo(payload);
    debugger
    yield put(clearLoading());   
    resolve && resolve(response);
    yield put(updateDeclarationInfoSuccess(response?.data)); 
  } catch (e) {
    console.log("Something went wrong");
    yield put(updateDeclarationInfoFailure(e?.message));
  }
}