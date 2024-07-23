import React, { useCallback } from "react";

const TermsOfService = () => {
  const openWindow = (url) => {
    const widthInPixels =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const heightInPixels =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    window.open(
      url,
      "_blank",
      `width=${widthInPixels},height=${heightInPixels}`,
    );
  };

  const handleOpenPopUp = useCallback(() => {
    openWindow("https://www.altcase.com/about-us.html");
  }, []);

  const handlePrivacyPolicy = useCallback(() => {
    openWindow("https://altcase.com/privacy-policy.html");
  }, []);

  return (
    <div
      id="content"
      className="regular-text mt-7  text-xs leading-5 tracking-[-0.2px] md:mt-0"
    >
      By continuing, you agree to our{" "}
      <span
        className="medium-text cursor-pointer text-custom-green"
        onClick={handleOpenPopUp}
      >
        Terms of Service
      </span>{" "}
      and{" "}
      <span
        className="medium-text cursor-pointer text-custom-green"
        onClick={handlePrivacyPolicy}
      >
        Privacy Policy
      </span>
      .
    </div>
  );
};

export default TermsOfService;
