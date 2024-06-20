import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import * as Yup from "yup";
import ChevronIcon from "../../../Icons/Chevron-down";
import useBackgroundColor from "../../../customHooks/useBackgroundColor";
import Button from "../../atoms/button";
import OptionHeading from "../../atoms/optionHeading";
import OptionHeader from "../../molecules/optionHeader";
import NomineePrompt from "../../organism/nominee-prompt";
import LeftArrow from "../../../Icons/LeftArrow";
import { getData } from "../../../utils/Crypto";
import OptionButton from "../../atoms/optionButton";
import { endpoints } from "../../../services/endpoints";
import { useDispatch } from "react-redux";
import {
  getAnualIncomeInfo,
  getOccupationlInfo,
  getProfessionalInfo,
  getSourceOfIncomeInfo,
  updateProfessionalInfo,
} from "../../../redux/actions/selfDeclaration";
import { fetchWithWait } from "../../../utils/method";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const ProfessionalDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useBackgroundColor();
  const [getApiData, setGetApiResponse] = useState(null);

  const handleGetCall = useCallback(async () => {
    const response = await axios.post(
      // "https://altcaseinvestor.we3.in/api/v1/profile",
      `${endpoints?.baseUrl}/profile`,
      {
        display_location: "ProfessionalDetails",
        method: "Get",
        investor_id: getData("userData")?.investor_id,
      },
    );
    console.log("setGetApiResponse", response?.data?.data);
    setGetApiResponse(response?.data?.data);
  }, []);

  const handleGetCalls = useCallback(() => {
    const data = {
      display_location: "ProfessionalDetails",
      method: "Get",
      investor_id: getData("userData")?.investor_id,
    };
    fetchWithWait({ dispatch, action: getProfessionalInfo(data) });
  }, [dispatch]);
  const validationSchema = Yup.object().shape({
    occupation: Yup.string().required("Occupation is required"),
    annualIncome: Yup.number().required("Annual income is required"),
    sourceOfIncome: Yup.string().required("Source of income is required"),
  });
  const [showPrompt, setShowPrompt] = useState(false);
  const [occupationData, setOccupationData] = useState(null);
  const [sourceData, setSourceData] = useState(null);
  const [annualIncomeData, setAnnualIncomeData] = useState(null);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "5px",
      border: state.isFocused ? "1px solid #AFBACA" : provided.border,
      // boxShadow: state.isFocused ? "0 0 0 1px #21B546" : provided.boxShadow,
      boxShadow: "none",
      "&:hover": {
        borderColor: state.isFocused ? "#AFBACA" : provided.borderColor,
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#21B546" : "white",
      color: state.isSelected ? "white" : provided.color,
      "&:hover": {
        backgroundColor: "#F2FFF5",
        color: "#8897AE",
      },
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "#21B546" : provided.color,
      "&:hover": {
        color: "#21B546",
      },
    }),
  };

  const handleGetOccupation = useCallback(async () => {
    try {
      const response = await axios.post(
        // "https://altcaseinvestor.we3.in/api/v1/profile",
        `${endpoints?.baseUrl}/profile`,
        {
          display_location: "Occupation",
          method: "Get",
        },
      );
      console.log("responsesfdsdfs", response?.data?.data);
      const occuaptionMapped = response?.data?.data.map((occ) => {
        return {
          label: occ.item_value,
          value: occ.item_id,
        };
      });
      setOccupationData(occuaptionMapped);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleGetOccupations = useCallback(() => {
    const data = {
      display_location: "Occupation",
      method: "Get",
    };
    fetchWithWait({ dispatch, action: getOccupationlInfo(data) });
  }, [dispatch]);

  const handleGetSource = useCallback(async () => {
    try {
      const response = await axios.post(
        // "https://altcaseinvestor.we3.in/api/v1/profile",
        `${endpoints?.baseUrl}/profile`,
        {
          display_location: "IncomeSource",
          method: "Get",
        },
      );
      console.log("Source", response?.data);
      const sourceMapped = response?.data?.data.map((occ) => {
        return {
          label: occ.item_value,
          value: occ.item_id,
        };
      });
      setSourceData(sourceMapped);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleGetSources = useCallback(() => {
    const data = {
      display_location: "IncomeSource",
      method: "Get",
    };
    fetchWithWait({ dispatch, action: getSourceOfIncomeInfo(data) });
  }, [dispatch]);

  const handleGetAnnualIncome = useCallback(async () => {
    try {
      const response = await axios.post(
        // "https://altcaseinvestor.we3.in/api/v1/profile",
        `${endpoints?.baseUrl}/profile`,
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

  const handleGetAnnualIncomes = useCallback(() => {
    const data = {
      display_location: "AnnualIncome",
      method: "Get",
    };
    fetchWithWait({ dispatch, action: getAnualIncomeInfo(data) });
  }, [dispatch]);
  useEffect(() => {
    handleGetAnnualIncome();
    // handleGetCall();
    // handleGetCalls()
    handleGetAnnualIncomes();
  }, [handleGetAnnualIncome, handleGetAnnualIncomes, handleGetCall]);

  console.log("sourceData", sourceData);

  const handleSubmits = async (values) => {
    console.log("handleSubmit values", values);
    try {
      const response = await axios.post(
        // "https://altcaseinvestor.we3.in/api/v1/invest/updateprofessionaldetails",
        `${endpoints?.baseUrl}/invest/updateprofessionaldetails`,
        {
          occupation_id: Number(values?.occupation),
          investor_id: Number(getData("userData")?.investor_id),
          fd_investment_id: Number(sessionStorage.getItem("fd_investment_id")),
          annual_income_id: Number(values?.annualIncome),
          income_source_id: Number(values?.sourceOfIncome),
        },
      );
      console.log(response);
      if (response?.status === 200) {
        // navigate
        setShowPrompt(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = useCallback(async (values) => {
    try {
      let data = {
        occupation_id: Number(values?.occupation),
        investor_id: Number(getData("userData")?.investor_id),
        fd_investment_id: Number(sessionStorage.getItem("fd_investment_id")),
        annual_income_id: Number(values?.annualIncome),
        income_source_id: Number(values?.sourceOfIncome),
      };

      fetchWithWait({ dispatch, action: updateProfessionalInfo(data) }).then(
        (response) => {
          if (response?.status === 200) {
            setShowPrompt(true);
          }
        },
      );
    } catch (error) {
      // toast.error("somethings went wrong.");
    }
  }, []);

  return (
    <>
      {showPrompt && (
        <NomineePrompt setShowLoader={setShowPrompt} showLoader={showPrompt} />
      )}
      <div className="mx-auto mb-4 mt-8 flex w-full max-w-[1008px] flex-col gap-5  px-6 sm:max-w-[592px] md:gap-7">
        <span className="mb-3 md:hidden">
          <LeftArrow width="20" height="20" onClickFun={() => navigate(-1)} />
        </span>
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
              annualIncome: 1,
              sourceOfIncome: "",
            }}
            validationSchema={validationSchema}
            validateOnBlur={false}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log("values-", values);
              handleSubmit(values);
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

                  <Select
                    placeholder="Select your occupation"
                    className="medium-text block w-full appearance-none rounded-md border  text-sm leading-6 tracking-[-0.2] text-[#8897AE] outline-none"
                    name="occupation"
                    options={occupationData || []}
                    onChange={(e) => {
                      console.log(e);
                      setFieldValue("occupation", e.value);
                      // setSelected(e);
                    }}
                    onFocus={handleGetOccupation}
                    styles={customStyles}
                    // value={selected}
                  />

                  {/* <aside className="relative">
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
                  </aside> */}
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
                    {annualIncomeData?.map((income, index) => (
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
                  <Select
                    placeholder="Select your source of income"
                    className="medium-text block w-full appearance-none rounded-md border  text-sm leading-6 tracking-[-0.2] text-[#8897AE] outline-none"
                    name="sourceOfIncome"
                    options={sourceData || []}
                    onChange={(e) => {
                      console.log(e);
                      setFieldValue("sourceOfIncome", e.value);
                    }}
                    onFocus={handleGetSource}
                    styles={customStyles}
                    // value={selected}
                  />
                  {/* <aside className="relative">
                    <div
                      id="_icon"
                      className="absolute right-3 top-2/4 -translate-y-2/4"
                    >
                      <ChevronIcon color={"#5E718D"} />
                    </div>
                    <div className="absolute right-12 top-2/4 h-4 -translate-y-2/4 border border-[#D7DFE9]"></div>

                    <Field
                      onClick={handleGetSource}
                      type="text"
                      name="sourceOfIncome"
                      as="select"
                      className="medium-text block w-full appearance-none rounded-md border px-[14px] py-[11px] pr-10 text-sm leading-6 tracking-[-0.2] text-[#8897AE] outline-none"
                    >
                      {!sourceData?.length && getApiData?.length ? (
                        <option value={getApiData?.[0]?.occupation_id}>
                          {getApiData?.[0]?.occupation_name}
                        </option>
                      ) : (
                        <option disabled value="">
                          Select your income source
                        </option>
                      )}
                      {sourceData?.length &&
                        sourceData?.map((curVa) => {
                          return (
                            <option key={curVa?.item_id} value={curVa?.item_id}>
                              {curVa?.item_value}
                            </option>
                          );
                        })}
                    </Field>
                  </aside> */}
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
                  />
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
