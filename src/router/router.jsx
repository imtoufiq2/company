import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Kyc from "../pages/kyc/Kyc";
import VerifyMobile from "../pages/verifyMobile/VerifyMobile";
import { PrivateRoute } from "./private-route";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import BankAccountDetails from "../pages/BankAccountDetails/Index";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-bank-account" element={<BankAccountDetails />} />
      <Route element={<PrivateRoute />}>
        <Route path="/verifyMobile" element={<VerifyMobile />} />
        <Route path="/kyc" element={<Kyc />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export { Routers };
