export const endpoints = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  verifyMobile: {
    resendOtp: "/login/resendotp",
    verifyOtp: "/login/verifyotp",
  },
  login: "/login/sendotp",
  kyc: {
    // verifyPan: "/onboarding/web/verifypan", // this is for the web
    verifyPan: "/onboarding/verifypan", // this is for the mobile
    savePan: "/onboarding/savepan",
    verifyLater: "/onboarding/skipprofile",
  },
  bankAccount: {
    getIFSC: "/onboarding/getbankbranch",
    // getQrDetails: "/onboarding/getupiintent",
    getQrDetails: "/onboarding/getupistatus",
    verifyBank: "/onboarding/verifybank",
  },
  dashboard: {
    fetchBanner: "/products/getfd",
    fetchShowcase: "/products/getfd",
  },
  investDetails: {
    fetchCard: "/products/getfd",
    fetchTableData: "/products/getfd",
    fetchSelectData: "/products/getfd",
  },
  invest: {
    fetchInvest: "/products/getfd",
    fetchIssuers: "/products/issuers",
  },
  portfolio: {
    fetchPortfolio: "/invest/portfolio",
  },
  selfDeclaration: {
    getPersonalInfo: "/profile",
    updatepersonalinfo: "/invest/updatepersonalinfo",
    Professional: {
      getProfessionalInfo: "/profile",
      getOccupationInfo: "/profile",
      getAnualIncomeInfo: "/profile",
      getSourceOfIncomeInfo: "/profile",
      updateProfessionalinfo: "/invest/updateprofessionaldetails",
    },
    declaration: {
      getDeclarationInfo: "/invest/getdeclarations",
      updateDeclarationInfo: "/invest/updatedeclarations",
    },
  },
};
