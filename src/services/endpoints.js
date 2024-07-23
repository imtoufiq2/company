export const endpoints = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  verifyMobile: {
    // resendOtp: "/login/resendotp",
    resendOtp: "/login/sendotp",
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
    getQrDetails: "/onboarding/getupiintent",
    // getQrDetails: "/onboarding/getupistatus",
    verifyBank: "/onboarding/verifybank",
  },
  dashboard: {
    fetchBanner: "/products/getfd",
    fetchShowcase: "/products/getfd",
    getTestimonials: "/products/gettestimonials",
    getFaq: "/investment/getfaq",
  },
  investDetails: {
    fetchCard: "/products/getfd",
    fetchTableData: "/products/getfd",
    fetchSelectData: "/products/getfd",
    fetchSpecialOffer:"/products/getadditionalschemeinfo"
  },
  invest: {
    fetchInvest: "/products/getfd",
    fetchIssuers: "/products/issuers",
    fetchCompareReturn:"/products/getfd"
  },
  portfolio: {
    fetchPortfolio: "/investment/portfolio",
    fetchPassbook:"/investment/getpassbook",
    investmentDetails:"/investment/getonefdportfolio"
  },
  discoverFd: {
    getDiscover: "/products/getfd",
  },
  selfDeclaration: {
    getPersonalInfo: "/profile",
    updatepersonalinfo: "/investment/updatepersonalinfo",
    Professional: {
      getProfessionalInfo: "/profile",
      getOccupationInfo: "/profile",
      getAnualIncomeInfo: "/profile",
      getSourceOfIncomeInfo: "/profile",
      updateProfessionalinfo: "/investment/updateprofessionaldetails",
    },
    declaration: {
      getDeclarationInfo: "/investment/getdeclarations",
      updateDeclarationInfo: "/investment/updatedeclarations",
    },
  },
  profile:{
    getBankAccountDetail:"/profile",
    getPersonalDetail:"/profile",
    getMainProfileDetail:"/profile",
     deleteUser:"/investor/delete"
  },
  referAndEarn:{
    getRefererStats:"/user/referral_stats"
  }
};
