export const endpoints = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  verifyMobile: {
    resendOtp: "/login/resendotp",
    verifyOtp: "/login/verifyotp",
  },
  login: "/login/sendotp",
  kyc: {
    // verifyPan: "/onboarding/verifypan",
    verifyPan: "/onboarding/web/verifypan",
    savePan: "/onboarding/savepan",
    verifyLater: "/onboarding/skipprofile",
  },
  bankAccount: {
    getIFSC: "/onboarding/bankbranch",
    getQrDetails: "/onboarding/verifyupi",
    verifyBank: "/onboarding/verifybank",
  },
  dashboard: {
    fetchBanner: "/products/getfd",
    fetchShowcase: "/products/getfd",
  },
  investDetails: {
    fetchCard: "/products/getfd",
    fetchTableData:"/products/getfd"
  },
  invest: {
    fetchInvest: "/products/getfd",
    fetchIssuers: "/products/issuers",
  },
  portfolio: {
    fetchPortfolio: "/invest/portfolio",
  },
  selfDeclaration: {
    updatepersonalinfo: "invest/updatepersonalinfo",
  },
};
