import { useCallback, useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { fetchWithWait } from "../../../utils/method";
import useBackgroundColor from "../../../customHooks/useBackgroundColor";
import { getData } from "../../../utils/Crypto";

import Button from "../../atoms/button/Button";
import OptionButton from "../../atoms/optionButton";
import OptionHeading from "../../atoms/optionHeading";

import LeftArrow from "../../../Icons/LeftArrow";
import OptionHeader from "../../molecules/optionHeader";

import {
  getPersonalInfo,
  updatePersonalInfo,
} from "../../../redux/actions/selfDeclaration";
import Loader from "../../organism/loader";

const PersonalInfo = () => {
  useBackgroundColor();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    selfDeclaration: {
      getPersonalInfoApiResponse,
      getPersonalInfoApiResponseError,
    },
    ApplicationLoader: { loading },
  } = useSelector((state) => state);

  const fetchInvestData = useCallback(() => {
    const data = {
      display_location: "PersonalInfo",
      method: "Get",
      investor_id: getData("userData")?.investor_id,
    };
    fetchWithWait({ dispatch, action: getPersonalInfo(data) });
  }, [dispatch]);

  useEffect(() => {
    fetchInvestData();
  }, [fetchInvestData]);

  const validationSchema = Yup.object({
    place_of_birth: Yup.string().required("Place of Birth is required"),
    isChecked: Yup.bool().oneOf(
      [true],
      "You must authorize the bank to continue",
    ),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      let data = {
        fd_investment_id: Number(sessionStorage.getItem("fd_investment_id")),
        investor_id: Number(getData("userData")?.investor_id),
        gender: values?.gender,
        is_indian_resident: values?.is_indian_resident,
        is_married: values?.is_married,
        is_personal_info_done: 1,
        place_of_birth: values?.place_of_birth,
      };

      fetchWithWait({ dispatch, action: updatePersonalInfo(data) }).then(
        (response) => {
          console.log("resaodas", response);
          if (response?.status === 200 && response?.message === "success") {
            navigate("/user-address");
          }
        },
      );
    } catch (error) {}
  };

  const handleGoBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };
  return (
    <>
      {" "}
      {getPersonalInfoApiResponseError ? (
        "something went wrong"
      ) : loading ? (
        <Loader />
      ) : (
        <div className="mx-auto mb-8 mt-8 flex w-full max-w-[1008px] flex-col gap-5 px-6  sm:max-w-[592px] md:gap-7 md:pb-8">
          <span className="mb-3 md:hidden">
            <LeftArrow width="20" height="20" onClickFun={() => navigate(-1)} />
          </span>
          <OptionHeader
            title="Personal Info"
            subTitle="Choose what best defines you. Your FD will be made under this information."
          />
          <Formik
            initialValues={getPersonalInfoApiResponse || {}}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
            enableReinitialize
          >
            {({
              values,
              setFieldValue,
              setFieldTouched,
              setFieldError,
              errors,
              touched,
            }) => (
              <Form className="flex flex-col gap-6 rounded-xl  md:border-[0.5px] md:bg-white md:p-8">
                <div
                  id="_ResidentStatus"
                  className="flex flex-col gap-3 md:gap-4"
                >
                  <OptionHeading text="Resident Status" />
                  <div
                    id="_options"
                    className="flex flex-wrap items-center gap-3"
                  >
                    <OptionButton
                      text="Indian Resident"
                      isActive={values.is_indian_resident === 0}
                      onClick={() => setFieldValue("is_indian_resident", 0)}
                    />
                    <OptionButton
                      text="Non-Resident Indian (NRI)"
                      isActive={values.is_indian_resident === 1}
                      onClick={() => setFieldValue("is_indian_resident", 1)}
                    />
                  </div>
                </div>
                <div
                  id="_MaritalStatusGender"
                  className="flex flex-col gap-6 md:flex-row md:gap-10"
                >
                  <div id="_left" className="flex flex-col gap-3 md:gap-4">
                    <OptionHeading text="Marital Status" />
                    <div
                      id="_options"
                      className="flex flex-wrap items-center gap-3"
                    >
                      <OptionButton
                        text="Married"
                        isActive={values.is_married === 1}
                        onClick={() => setFieldValue("is_married", 1)}
                      />
                      <OptionButton
                        text="Unmarried"
                        isActive={values.is_married === 0}
                        onClick={() => setFieldValue("is_married", 0)}
                      />
                    </div>
                  </div>
                  <div id="_right" className="flex flex-col gap-3 md:gap-4">
                    <OptionHeading text="Gender" />
                    <div
                      id="_options"
                      className="flex flex-wrap items-center gap-3"
                    >
                      <OptionButton
                        text="Male"
                        disabled={
                          getPersonalInfoApiResponse?.gender?.toLocaleLowerCase() ===
                          "female"
                        }
                        isActive={values.gender.toLocaleLowerCase() === "male"}
                        onClick={() => setFieldValue("gender", "male")}
                      />
                      {console.log(
                        "safdasdfas",
                        getPersonalInfoApiResponse?.gender?.toLocaleLowerCase(),
                      )}
                      <OptionButton
                        text="Female"
                        disabled={
                          getPersonalInfoApiResponse?.gender?.toLocaleLowerCase() ===
                          "male"
                        }
                        isActive={
                          values.gender.toLocaleLowerCase() === "female"
                        }
                        onClick={() => setFieldValue("gender", "female")}
                      />
                    </div>
                  </div>
                </div>
                <div id="_placeOfBirth" className="flex flex-col gap-[6px]">
                  <h4 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#3D4A5C]">
                    Place of Birth
                  </h4>
                  <Field
                    name="place_of_birth"
                    placeholder="Mumbai"
                    type="text"
                    className="medium-text max-h-[2.875rem] w-full rounded-md border px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B] outline-none"
                    onChange={(e) => {
                      setFieldValue("place_of_birth", e.target.value);
                      if (touched.place_of_birth && errors.place_of_birth) {
                        setFieldTouched("birthPlace", true, false);
                        setFieldError("birthPlace", "");
                      }
                    }}
                    onBlur={() => setFieldTouched("place_of_birth", true)}
                  />
                  <ErrorMessage
                    name="place_of_birth"
                    component="div"
                    className="text-xs text-red-500"
                  />
                </div>
                <div id="_checkbox" className="flex flex-col">
                  <div className="flex items-start gap-2">
                    <Field
                      type="checkbox"
                      name="isChecked"
                      className="mt-[2px] min-h-4 min-w-4 p-4 accent-[#00a700]"
                      onChange={(e) => {
                        setFieldValue("isChecked", e.target.checked);
                        if (touched.isChecked && errors.isChecked) {
                          setFieldTouched("isChecked", true, false);
                          setFieldError("isChecked", "");
                        }
                      }}
                      onBlur={() => setFieldTouched("isChecked", true)}
                    />
                    <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#2D3643]">
                      I hereby authorize{" "}
                      {JSON.parse(sessionStorage.getItem("Order_Summary"))
                        ?.issuer_name &&
                        JSON.parse(sessionStorage.getItem("Order_Summary"))
                          ?.issuer_name}{" "}
                      to fetch my documents from UIDAI to setup my fixed deposit
                      account.
                    </p>
                  </div>
                  <ErrorMessage
                    name="isChecked"
                    component="div"
                    className="text-xs text-red-500"
                  />
                </div>
                <div id="_button" className="flex items-center gap-5">
                  <Button
                    label="Go Back"
                    onClick={handleGoBack}
                    className="medium-text hidden max-h-12 rounded-md border border-[#55D976] text-base leading-7 tracking-[-0.3px] text-[#21B546] active:scale-[0.99] md:block"
                  />
                  <Button
                    label="Continue"
                    disabled={!values?.isChecked || values?.place_of_birth===""}
                    type="submit"
                    className={`medium-text max-h-12  text-base leading-7 tracking-[-0.3px] text-white active:scale-[0.99] ${(!values?.isChecked || values?.place_of_birth==="") ? "bg-[#F0F3F9] text-[#AFBACA]" : "bg-[#21B546] "}`}
                  />
                 
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default PersonalInfo;
