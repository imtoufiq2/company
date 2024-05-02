import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Kyc from "../pages/kyc/Kyc";
import VerifyMobile from "../pages/verifyMobile/VerifyMobile";
import { PrivateRoute } from "./private-route";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "./home";
import Dashboard from "../pages/dashboard/Dashboard";
import BankAccountDetails from "../pages/BankAccountDetails/Index";
import ReferAndEarn from "../pages/Refer & Earn/Index";
import Portfolio from "../pages/Portfolio/Index";
import Invest from "../pages/Invest/Index";
import InvestDetails from "./InvestDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-bank-account" element={<BankAccountDetails />} />
      <Route path="/verifyMobile" element={<VerifyMobile />} />
      <Route path="/invest" element={<Invest />} />
      <Route path="/invest/:id" element={<InvestDetails />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/referEarn" element={<ReferAndEarn />} />
      <Route element={<PrivateRoute />}>
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/add-bank-account" element={<BankAccountDetails />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export { Routers };
