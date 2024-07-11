import React, { useCallback } from "react";

const TermsOfService = () => {
  const handleOpenPopUp = useCallback(() => {
    const widthInPixels =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const heightInPixels =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    window.open(
      "https://www.altcase.com/about-us.html",
      "_blank",
      `width=${widthInPixels},height=${heightInPixels}`,
    );
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
        onClick={handleOpenPopUp}
      >
        Privacy Policy
      </span>
      .
    </div>
  );
};

export default TermsOfService;
