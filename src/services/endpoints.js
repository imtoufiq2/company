export const endpoints = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  verifyMobile: {
    resendOtp: "/login/resendotp",
    verifyOtp: "/login/verifyotp",
  },
  login: "/login/sendotp",
  kyc: {
    verifyPan: "/ob/verifypan",
    savePan: "/ob/savepan",
    verifyLater: "/ob/skipprofile"
  },
  bankAccount: {
    getIFSC:"/onboarding/bankbranch",
    getQrDetails: "/onboarding/verifyupi",
  },
  dashboard: {
    fetchBanner: "",
    fetchShowcase: "",
  },

};



