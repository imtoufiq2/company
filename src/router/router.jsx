import { Routes, Route } from "react-router-dom";
import Login from "../components/pages/login/Login";
import Kyc from "../components/pages/kyc/Kyc";
import VerifyMobile from "../components/pages/verifyMobile/VerifyMobile";
import { PrivateRoute } from "./private-route";
import ErrorPage from "../components/pages/error/ErrorPage";
import Home from "../components/pages/home/Home";
import Dashboard from "../components/pages/dashboard/Dashboard";
import BankAccountDetails from "../components/pages/BankAccountDetails/Index";
import ReferAndEarn from "../components/pages/Refer & Earn/Index";
import Portfolio from "../components/pages/Portfolio/Index";
import Invest from "../components/pages/Invest/Index";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-bank-account" element={<BankAccountDetails />} />
      <Route path="/verifyMobile" element={<VerifyMobile />} />
      <Route path="/invest" element={<Invest />} />
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
