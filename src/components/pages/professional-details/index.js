import * as Yup from "yup";
import React, { useCallback, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import OptionHeader from "../../molecules/optionHeader";
import OptionHeading from "../../atoms/optionHeading";
import Button from "../../atoms/button";
import ChevronIcon from "../../../Icons/Chevron-down";
import useBackgroundColor from "../../../customHooks/useBackgroundColor";
import NomineePrompt from "../../organism/nominee-prompt";
import axios from "axios";

import { getData } from "../../../utils/Crypto";
import OptionButton from "../../atoms/optionButton";

const ProfessionalDetails = () => {
  const [getApiData, setGetApiResponse] = useState(null);

  const handleGetCall = useCallback(async () => {
    const response = await axios.post(
      "https://altcaseinvestor.we3.in/api/v1/profile",
      {
        display_location: "ProfessionalDetails",
        method: "Get",
        investor_id: getData("userData")?.investor_id,
      },
    );
    console.log("setGetApiResponse", response?.data?.data);
    setGetApiResponse(response?.data?.data);
  }, []);
  useEffect(() => {
    handleGetCall();
  }, [handleGetCall]);

  useBackgroundColor();

  const validationSchema = Yup.object().shape({
    occupation: Yup.string().required("Occupation is required"),
    annualIncome: Yup.string().required("Annual income is required"),
    sourceOfIncome: Yup.string().required("Source of income is required"),
  });
  const [showPrompt, setShowPrompt] = useState(false);

  const [occupationData, setOccupationData] = useState(null);
  const [annualIncomeData, setAnnualIncomeData] = useState(null);
  const [sourceOfIncomeData, setSourceOfIncomeData] = useState(null);

  const handleGetOccupation = useCallback(async () => {
    try {
      const response = await axios.post(
        "https://altcaseinvestor.we3.in/api/v1/profile",
        {
          display_location: "Occupation",
          method: "Get",
        },
      );
      console.log("responsesfdsdfs", response?.data?.data);
      setOccupationData(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleGetAnnualIncome = useCallback(async () => {
    try {
      const response = await axios.post(
        "https://altcaseinvestor.we3.in/api/v1/profile",
        {
          display_location: "AnnualIncome",
          method: "Get",
        },
      );
      console.log("responsesfdsdfs", response?.data?.data);
      setAnnualIncomeData(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleGetSourceOfIncome = useCallback(async () => {
    try {
      const response = await axios.post(
        "https://altcaseinvestor.we3.in/api/v1/profile",
        {
          display_location: "IncomeSource",
          method: "Get",
        },
      );
      setSourceOfIncomeData(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    handleGetOccupation();
    handleGetAnnualIncome();
    handleGetSourceOfIncome();
  }, [handleGetOccupation, handleGetAnnualIncome, handleGetSourceOfIncome]);

  console.log("occupationData", occupationData);
  return (
    <>
      {showPrompt && (
        <NomineePrompt setShowLoader={setShowPrompt} showLoader={showPrompt} />
      )}
      <div className="mx-auto mb-4 mt-8 flex w-full max-w-[1008px] flex-col gap-5  px-6 sm:max-w-[592px] md:gap-7">
        <OptionHeader
          title="Professional Details"
          subTitle="Enter your occupation, income and source of income"
        />
        <div
          id="_box"
          className="flex flex-col gap-6 rounded-xl bg-white md:border-[0.5px] md:p-8"
        >
          <Formik
            initialValues={{
              occupation: "",
              annualIncome: "2",
              sourceOfIncome: "",
            }}
            validationSchema={validationSchema}
            validateOnBlur={false}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <OptionHeading
                    text="Occupation"
                    className="medium-text text-[#3D4A5C]"
                  />
                  <aside className="relative">
                    <div
                      id="_icon"
                      className="absolute right-3 top-2/4 -translate-y-2/4"
                    >
                      <ChevronIcon color={"#5E718D"} />
                    </div>

                    <div className="absolute right-12 top-2/4 h-4 -translate-y-2/4 border border-[#D7DFE9]"></div>
                    <Field
                      onClick={handleGetOccupation}
                      type="text"
                      name="occupation"
                      as="select"
                      className="medium-text block w-full appearance-none rounded-md border px-[14px] py-[11px] pr-10 text-sm leading-6 tracking-[-0.2] text-[#8897AE] outline-none"
                    >
                      {!occupationData?.length && getApiData?.length ? (
                        <option value={getApiData?.[0]?.occupation_id}>
                          {getApiData?.[0]?.occupation_name}
                        </option>
                      ) : (
                        <option disabled value="">
                          Select your occupation
                        </option>
                      )}
                      {occupationData?.length &&
                        occupationData?.map((curVa) => {
                          return (
                            <option key={curVa?.item_id} value={curVa?.item_id}>
                              {curVa?.item_value}
                            </option>
                          );
                        })}
                    </Field>
                  </aside>
                  <ErrorMessage
                    name="occupation"
                    component="div"
                    className="-mt-1 text-sm text-red-500"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <OptionHeading
                    text="Annual Income (in ₹)"
                    className="medium-text text-[#3D4A5C]"
                  />
                  <div
                    id="_anualIncome"
                    className="flex flex-wrap items-center gap-3"
                  >
                    {annualIncomeData?.map((income) => (
                      <OptionButton
                        key={income?.item_id}
                        isActive={income?.item_id === values.annualIncome}
                        text={income?.item_value}
                        onClick={() =>
                          setFieldValue("annualIncome", income?.item_id)
                        }
                      />
                    ))}
                  </div>
                  <ErrorMessage
                    name="annualIncome"
                    component="div"
                    className="-mt-1 text-sm text-red-500"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <OptionHeading
                    text="Source of Income"
                    className="medium-text text-[#3D4A5C]"
                  />
                  <aside className="relative">
                    <div
                      id="_icon"
                      className="absolute right-3 top-2/4 -translate-y-2/4"
                    >
                      <ChevronIcon color={"#5E718D"} />
                    </div>
                    <div className="absolute right-12 top-2/4 h-4 -translate-y-2/4 border border-[#D7DFE9]"></div>

                    <Field
                      type="text"
                      name="sourceOfIncome"
                      as="select"
                      className="medium-text block w-full appearance-none rounded-md border px-[14px] py-[11px] pr-10 text-sm leading-6 tracking-[-0.2] text-[#8897AE] outline-none"
                    >
                      {getApiData?.length ? (
                        <option value={getApiData?.[0]?.annual_income_id}>
                          {getApiData?.[0]?.income_source}
                        </option>
                      ) : (
                        <option value="">Select your source of income</option>
                      )}
                      <option value="employment">Employment</option>
                      <option value="selfEmployed">Self-Employed</option>
                      <option value="investment">Investment</option>
                      <option value="rentalIncome">Rental Income</option>
                      <option value="other">Other</option>
                    </Field>
                  </aside>
                  <ErrorMessage
                    name="sourceOfIncome"
                    component="div"
                    className="-mt-1 text-sm text-red-500"
                  />
                </div>

                <div id="_button" className="flex items-center gap-5">
                  <Button
                    label="Go Back"
                    type="button"
                    className="medium-text hidden max-h-12 rounded-md border border-[#55D976] text-base leading-7 tracking-[-0.2] text-[#55D976] md:flex md:min-w-[85px] md:justify-center md:px-7 md:py-[11px]"
                    onClick={() => {
                      console.log("Go Back button clicked");
                    }}
                  />{" "}
                  <Button
                    label="Continue"
                    type="submit"
                    disabled={isSubmitting}
                    className="medium-text max-h-12 bg-[#21B546] text-base leading-7 tracking-[-0.3] text-white"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ProfessionalDetails;
