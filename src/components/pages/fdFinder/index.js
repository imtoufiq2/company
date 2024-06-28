import React, { useCallback, useState } from "react";
import LeftArrow from "../../../Icons/LeftArrow";
// import { endpoints } from "../../../services/endpoints";
import OptionHeader from "../../molecules/optionHeader";
import Button from "../../atoms/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import OptionButton from "../../atoms/optionButton";
import OptionHeading from "../../atoms/optionHeading";
import useBackgroundColor from "../../../customHooks/useBackgroundColor";
import PleaseWaitLoader from "../../organism/pleaseWaitLoader";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

import toast from "react-hot-toast";
import { endpoints } from "../../../services/endpoints";
import { useNavigate } from "react-router-dom";
const initialValues = {
  kindOfInvestment: 0,
  payoutMechanism: 0,
  specialCharacteristics: 0,
  institution: 0,
};
const FdFinder = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  useBackgroundColor();
  const handleSubmit = useCallback(
    async (values, { resetForm }) => {
      // console.log("valuessdf", values);
      try {
        setShowPopup(true);
        const response = await axios.post(
          `${endpoints?.baseUrl}/products/fd-finder`,
          {
            maxTenureInDays: 720,
            maxNoOfRowsPerIssuer: 3,
            payoutMechanism: "C",
            fdInstitutionType: "Bank",
          },
        );
        console.log("responsedasas", response?.data);
        if (response?.status === 200) {
          // navigate
          setApiResponse(response?.data);
          sessionStorage.setItem(
            "fdFinderSuggestion",
            JSON.stringify(response?.data),
          );
          navigate("/fd-finder-suggestions");
        }
      } catch (error) {
        toast.error("something went wrong");
      } finally {
        setShowPopup(false);
      }
    },
    [navigate],
  );

  const bodyContent = (
    <div className="relative top-4 flex h-full w-full  max-w-[24rem] flex-col rounded-lg  border-0 bg-[#F9FAFB] p-5  outline-none focus:outline-none md:max-w-[23.75rem] lg:h-auto">
      <div className="relative flex flex-col  justify-between gap-4 rounded-t">
        <img
          src="/images/please-wait-loader.gif"
          alt="Loading..."
          className=" h-[88px] w-[88px]"
        />

        <div
          id="_heading"
          className="semi-bold-text  text-xl leading-8 tracking-[-0.3]"
        >
          Finding best FDs suitable for you
        </div>
        <p
          id="text"
          className="regular-text  text-xs leading-5 tracking-[-0.2] text-[#5E718D]"
        >
          Please wait while we are looking for the best Fixed Deposit schemes
          suitable just for your requirements.
        </p>
        <button
          className="absolute right-0 ml-auto  border-0 p-1 pr-5 transition hover:opacity-70"
          onClick={() => {
            //   setShowPopUp(false)
          }}
        >
          <AiOutlineClose size={20} />
        </button>
      </div>
    </div>
  );
  return (
    <>
      {showPopup && <PleaseWaitLoader bodyContent={bodyContent} />}

      <div className="mx-auto mb-8 mt-8 flex w-full max-w-[1008px] flex-col gap-5 px-6  sm:max-w-[592px] md:gap-7 md:pb-8">
        <span className="mb-3 md:hidden">
          <LeftArrow width="20" height="20" />
        </span>

        <div id="_header" className="flex flex-col gap-2">
          <h3 className="bold-text text-2xl leading-7 tracking-[-0.5] text-[#1B1B1B] md:text-xl md:leading-6  md:tracking-[-0.3]">
            Find Your Perfect Fixed Deposit Match
          </h3>
          <p className="regular-text text-sm leading-5 tracking-[-0.2] text-[#5E718D]">
            Answer a few quick questions, and we'll recommend the best Fixed
            Deposits tailored just for you!
          </p>
        </div>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, setFieldValue }) => (
            <Form className="flex flex-col gap-6 rounded-xl  md:border-[0.5px] md:bg-white md:p-8">
              <div
                id="_ResidentStatus"
                className="flex flex-col gap-3 md:gap-4"
              >
                <OptionHeading text="What kind of investment are you looking for?" />
                <div
                  id="_options"
                  className="flex flex-wrap items-center gap-3"
                >
                  <OptionButton
                    text="Short Term"
                    isActive={values.kindOfInvestment === "Short Term"}
                    onClick={() =>
                      setFieldValue("kindOfInvestment", "Short Term")
                    }
                  />
                  <OptionButton
                    text="Long Term"
                    isActive={values.kindOfInvestment === "Long Term"}
                    onClick={() =>
                      setFieldValue("kindOfInvestment", "Long Term")
                    }
                  />
                </div>
              </div>
              <div
                id="_ResidentStatus"
                className="flex flex-col gap-3 md:gap-4"
              >
                <OptionHeading text="What payout mechanism you would want?" />
                <div
                  id="_options"
                  className="flex flex-wrap items-center gap-3"
                >
                  <OptionButton
                    text="At Maturity"
                    isActive={values.payoutMechanism === "At Maturity"}
                    onClick={() =>
                      setFieldValue("payoutMechanism", "At Maturity")
                    }
                  />
                  <OptionButton
                    text="Monthly"
                    isActive={values.payoutMechanism === "Monthly"}
                    onClick={() => setFieldValue("payoutMechanism", "Monthly")}
                  />
                  <OptionButton
                    text="Quarterly"
                    isActive={values.payoutMechanism === "Quarterly"}
                    onClick={() =>
                      setFieldValue("payoutMechanism", "Quarterly")
                    }
                  />
                </div>
              </div>
              <div
                id="_ResidentStatus"
                className="flex flex-col gap-3 md:gap-4"
              >
                <OptionHeading text="Any special characteristics you would want?" />
                <div
                  id="_options"
                  className="flex flex-wrap items-center gap-3"
                >
                  <OptionButton
                    text="Tax Saver"
                    isActive={values.specialCharacteristics === "Tax Saver"}
                    onClick={() =>
                      setFieldValue("specialCharacteristics", "Tax Saver")
                    }
                  />
                  <OptionButton
                    text="High Return"
                    isActive={values.specialCharacteristics === "High Return"}
                    onClick={() =>
                      setFieldValue("specialCharacteristics", "High Return")
                    }
                  />
                  <OptionButton
                    text="Lorem"
                    isActive={values.specialCharacteristics === "Lorem"}
                    onClick={() =>
                      setFieldValue("specialCharacteristics", "Lorem")
                    }
                  />
                </div>
              </div>
              <div
                id="_ResidentStatus"
                className="flex flex-col gap-3 md:gap-4"
              >
                <OptionHeading text="In which institution would you like to invest?" />
                <div
                  id="_options"
                  className="flex flex-wrap items-center gap-3"
                >
                  <OptionButton
                    text="Indian Resident"
                    isActive={values.institution === "Banks"}
                    onClick={() => setFieldValue("institution", "Banks")}
                  />
                  <OptionButton
                    text="Indian Resident"
                    isActive={values.institution === "NBFC"}
                    onClick={() => setFieldValue("institution", "NBFC")}
                  />
                </div>
              </div>

              <div id="_button" className="flex items-center gap-5">
                <Button
                  label="Go Back"
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(-1);
                  }}
                  className="medium-text hidden max-h-12 rounded-md border border-[#55D976] text-base leading-7 tracking-[-0.3] text-[#21B546] active:scale-[0.99] md:block"
                />
                <Button
                  label="Find Fixed Deposits"
                  type="submit"
                  className={`medium-text max-h-12  text-base leading-7 tracking-[-0.3] text-white active:scale-[0.99] ${!(values?.kindOfInvestment && values?.payoutMechanism && values?.specialCharacteristics && values?.institution) ? "bg-[#F0F3F9] text-[#AFBACA]" : "bg-[#21B546] "}`}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FdFinder;
