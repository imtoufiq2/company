import { Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./private-route";

import Login from "../pages/login/Login";
import VerifyMobile from "../pages/verifyMobile/VerifyMobile";
import Kyc from "../pages/kyc/Kyc";
import BankAccountDetails from "../pages/BankAccountDetails/Index";
import Invest from "../pages/Invest/Index";
import Portfolio from "../pages/Portfolio/Index";
import ReferAndEarn from "../pages/Refer & Earn/Index";
import ErrorPage from "../pages/error/ErrorPage";

import Home from "./home";
import InvestDetails from "./InvestDetails";
import FDPaymentSummary from "./FDPaymentSummary";
import PortfolioInvestmentDetails from "./portfolioInvestmentDetails";
import Profile from "./profile";
import SuccessPage from "./successPage";
import PersonalInfo from "./personal-info";
import UserAddress from "./user-address";
import ProfessionalDetails from "./professional-details";
import Declaration from "./declaration";
import AddNomination from "./add-nomination";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add-bank-account" element={<BankAccountDetails />} />
      <Route path="/verifyMobile" element={<VerifyMobile />} />
      <Route path="/invest" element={<Invest />} />
      {/* <Route path="/invest/:id" element={<InvestDetails />} /> */}

      <Route path="/personal-info" element={<PersonalInfo />} />
      <Route path="/user-address" element={<UserAddress />} />
      <Route path="/professional-details" element={<ProfessionalDetails />} />
      <Route path="/declaration" element={<Declaration />} />
      <Route path="/add-nomination" element={<AddNomination />} />

      <Route path="/earnRewards" element={<ReferAndEarn />} />
      <Route path="/profile" element={<Profile />} />
      <Route element={<PrivateRoute />}>
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/add-bank-account" element={<BankAccountDetails />} />
        <Route
          path="/invest/:id/:scheme_master_id"
          element={<InvestDetails />}
        />
        <Route path="/fd-summary" element={<FDPaymentSummary />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/portfolio/investment-details/:id"
          element={<PortfolioInvestmentDetails />}
        />
      </Route>
      <Route path="/success" element={<SuccessPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export { Routers };
