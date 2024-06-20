//library imports

import { Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./private-route";
//pages
import BankAccountDetails from "../pages/BankAccountDetails/Index";
import Login from "../pages/login/Login";
import VerifyMobile from "../pages/verifyMobile/VerifyMobile";
import Kyc from "../pages/kyc/Kyc";
import Portfolio from "../pages/Portfolio/Index";
import Invest from "../pages/Invest/Index";
import ReferAndEarn from "../pages/Refer & Earn/Index";
import ErrorPage from "../pages/error/ErrorPage";

//other imports
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
import PreviewMaturityAction from "../organism/previewMaturityAction";
import PaymentSuccess from "../molecules/paymentSuccess";
import MaturityAction from "../organism/maturityAction";
import VideoKyc from "./videoKyc";
import ProfileDetails from "./profileDetails";
import ProfileBankAccount from "../organism/profileBankAccount";
import HelpAndSupportSection from "../organism/helpAndSupportSection";
import InvestmentDetails from "../organism/investmentDetails";
import PassbookDetails from "./passbookDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add-bank-account" element={<BankAccountDetails />} />
      <Route path="/verifyMobile" element={<VerifyMobile />} />
      <Route path="/invest" element={<Invest />} />
      {/* <Route path="/invest/:id" element={<InvestDetails />} /> */}

      <Route path="/earnRewards" element={<ReferAndEarn />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/bankdetails" element={<ProfileBankAccount />} />
      <Route path="/profile/help-support" element={<HelpAndSupportSection />} />

      <Route path="/profile/details" element={<ProfileDetails />} />

      <Route path="/video-kyc" element={<VideoKyc />} />

      <Route element={<PrivateRoute />}>
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/add-bank-account" element={<BankAccountDetails />} />
        <Route
          path="/invest/:id/:scheme_master_id/:tag"
          element={<InvestDetails />}
        />
        <Route path="/fd-summary" element={<FDPaymentSummary />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/portfolio/investment-details/:id"
          element={<PortfolioInvestmentDetails />}
        />

<Route path="/investmentDetails" element={<InvestmentDetails />} />



{/* passbook */}
<Route path="/transaction-history" element={<PassbookDetails />} />





        {/* self declaration */}
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/user-address" element={<UserAddress />} />
        <Route path="/professional-details" element={<ProfessionalDetails />} />
        <Route path="/declaration" element={<Declaration />} />
        <Route path="/add-nomination" element={<AddNomination />} />


        <Route path="/preview-maturity-action" element={<PreviewMaturityAction />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/maturity-action" element={<MaturityAction />} />



       

      </Route>
      <Route path="/success" element={<SuccessPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export { Routers };
