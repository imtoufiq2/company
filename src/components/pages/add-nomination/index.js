import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Button from "../../atoms/button";
import OptionHeading from "../../atoms/optionHeading";
import OptionHeader from "../../molecules/optionHeader";
import NomineeModal from "./../../organism/nomineeModal/index";
import { selectCustomStyle } from "../../../utils/selectCustomStyle";
import Select from "react-select";
import NomineePrompt from "../../organism/nominee-prompt";
import { endpoints } from "../../../services/endpoints";
import { useLocation, useNavigate } from "react-router-dom";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { NomieeValidationSchema } from "../../../forms/formikSchemas/add.nomination";
import { NomieeInitialValue } from "../../../forms/initialValues/add.nomination";
import {
  calculateTotalPercentage,
  checkPaymentStatus,
  CustomTextField,
  fetchDataAfterRedirect,
  formatDate,
  formatDates,
  getNomineeData,
  handleSideEffects,
  isUserUnder18,
  saveNomineeData,
  updateNomineeInList,
  updateNominees,
  validateNomineeData,
  validatePercentage,
  verifyPayment,
} from "./Utils";

const AddNomination = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dob, setDob] = useState(null);
  const [showPrompt, setShowPrompt] = useState(true);
  const [nomineeData, setNomineeData] = useState([]);
  const [selectedNominee, setSelectedNominee] = useState([]);
  const [relationDropdown, setRelationDropdown] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [currentNominee, setCurrentNominee] = useState(null);
  const [totalSelectedShare, setTotalSelectedShare] = useState(0);

  const [initialValues, setInitialValues] = useState(NomieeInitialValue);

  const updateShare = (nominee, newShare) => {
    const updatedSelectedNominees = updateNomineeInList(selectedNominee, {
      ...nominee,
      percentage: newShare,
    });

    const totalSelectedNomineeShare = calculateTotalPercentage(
      updatedSelectedNominees,
    );

    if (!validatePercentage(totalSelectedNomineeShare)) {
      return;
    }

    setTotalSelectedShare(totalSelectedNomineeShare);

    setNomineeData((prevData) =>
      updateNomineeInList(prevData, { ...nominee, percentage: newShare }),
    );
    setSelectedNominee(updatedSelectedNominees);
    setIsModalActive(false);
  };

  const getDropdownData = async () => {
    try {
      const response = await axios.post(`${endpoints?.baseUrl}/profile`, {
        display_location: "RelationShip",
        method: "Get",
      });
      const relationMapped = response?.data?.data.map((rel) => {
        return {
          label: rel.item_value,
          value: rel.item_id,
        };
      });

      setRelationDropdown(relationMapped);
    } catch (e) {
      console.error(e);
    }
  };
  const handleCheckboxChange = (nominee_id) => {
    setNomineeData((prevState) => {
      return prevState.map((item) => {
        if (item.nominee_id === nominee_id) {
          return { ...item, isSelected: !item.isSelected };
        }
        return item;
      });
    });
  };
  const handleSelectedNominee = (value) => {
    const nomineeExists = selectedNominee.some(
      (nominee) => nominee.nominee_id === value.relationship_id,
    );

    if (!nomineeExists) {
      setTotalSelectedShare((prev) => prev + Number(value.percentage));
      setSelectedNominee((prevValue) => {
        return [...prevValue, value];
      });
    } else {
      setTotalSelectedShare((prev) => prev - Number(value.percentage));

      const remove = selectedNominee.filter(
        (nominee) => nominee.nominee_id !== value.nominee_id,
      );
      setSelectedNominee(remove);
    }
  };
  const handleModalShareChange = (nominee) => {
    setCurrentNominee(nominee);
    setIsModalActive(true);
  };

  const handleSaveAndAddMore = async (values, { resetForm, setSubmitting }) => {

    if (!validateNomineeData(values, nomineeData)) {
      setSubmitting(false);
      return;
    }

    try {
      await saveNomineeData(values);
      getNomineeData(setNomineeData);
      resetForm();
    } catch (e) {
      toast.error("Unexpected error occurred while saving nominee data.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleProceed = useCallback(
    async (value) => {
      try {
        const response = await updateNominees(value, showPrompt);
        console.log(response);
      } catch (e) {
        console.log("error", e);
      }
    },
    [showPrompt],
  );

  const callApiToCheckPaymentStatus = useCallback(async () => {
    await checkPaymentStatus(navigate);
  }, [navigate]);

  const callApiAfterRedirect = useCallback(
    async (query) => {
      try {
        await verifyPayment(query);
        await callApiToCheckPaymentStatus();
      } catch (error) {
        console.error("Error in callApiAfterRedirect:", error);
      }
    },
    [callApiToCheckPaymentStatus],
  );

  useEffect(() => {
    const fetchData = async () => {
      await fetchDataAfterRedirect(location.search, callApiAfterRedirect);
    };
    fetchData();
  }, [location.search, callApiAfterRedirect]);

  useEffect(() => {
    const cleanup = handleSideEffects(
      setShowPrompt,
      setNomineeData,
      getNomineeData,
      getDropdownData,
    );
    return cleanup;
  }, []);

  // useEffect(() => {
  //   const result = isUserUnder18(formatDates(dob ?? null));
  //   console.log("resultasdfasdfas,", result);
  //   // setInitialValues((prevValues) => ({
  //   //   ...prevValues,
  //   //   isShowDob: result,
  //   // }));
  //   // use the setform of the formik
  // }, [dob]);

  return (
    <>
      {/* {showPrompt && (
        <NomineePrompt
          setShowLoader={setShowPrompt}
          showLoader={showPrompt}
          checkingStatus={checkingStatus}
          setIscheckingStatus={setIscheckingStatus}
        />
      )} */}
      <div className="mx-auto mb-8 mt-8 flex w-full max-w-[1008px] flex-col gap-5  px-6 sm:max-w-[592px] md:gap-7">
        <OptionHeader
          title="Add Nomination"
          subTitle="Enter nominee details, so that the money invested could be easily claimed by nominees in the unfortunate event of demise of the investor"
        />
        {/* Show the registered nominees */}
        <div className="flex flex-col gap-4">
          {isModalActive && (
            <NomineeModal
              setShowLoader={setIsModalActive}
              showLoader={isModalActive}
              currentShare={currentNominee?.percentage || 100}
              updateShare={updateShare}
              cur={currentNominee}
            />
          )}

          {nomineeData.map((nominee) => (
            <div
              key={nominee.nominee_id}
              className={`flex flex-col gap-5 rounded-xl border-[0.5px] bg-white p-5 md:p-8 ${nominee.isSelected ? "border-green-500" : "border-none"}`}
            >
              <div className="flex justify-between">
                <h4 className="semi-bold-text text-sm leading-6 tracking-[-0.2px] text-[#21B546]">
                  Nominee
                </h4>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="bg-green-500"
                    checked={nominee.isSelected}
                    onChange={() => {
                      handleSelectedNominee(nominee);
                      handleCheckboxChange(nominee.nominee_id);
                    }}
                  />
                </div>
              </div>

              <div className="-mt-5">
                <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                  Name
                </p>
                <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                  {nominee.full_name}
                </h5>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                    Relationship
                  </p>
                  <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                    {nominee.relationship}
                  </h5>
                </div>
                <div>
                  <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                    PAN
                  </p>
                  <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                    {nominee.pan}
                  </h5>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                    Date of birth
                  </p>
                  <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                    {formatDate(nominee.date_of_birth)}
                  </h5>
                </div>
                <div>
                  <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                    Percent Share
                  </p>
                  <div className="flex items-center gap-2">
                    <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                      {nominee.percentage}%
                    </h5>
                    <img
                      src="/images/edit-pencil.svg"
                      alt="pencil"
                      className={`min-h-[1.125rem] min-w-[1.125rem] max-w-[38px] ${nominee.isSelected ? "cursor-pointer" : "cursor-default"} rounded-md border px-2 py-[0.2rem] transition-all duration-200 ease-in-out active:scale-95`}
                      onClick={() => {
                        if (!nominee.isSelected) {
                          return;
                        }
                        handleModalShareChange(nominee);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                  Address
                </p>
                <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                  {nominee.address_line_1 + ", " + nominee.address_line_2}
                </h5>
              </div>
            </div>
          ))}
        </div>
        {!nomineeData.some((item) => item.isSelected) && (
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validateOnBlur={false}
            
            validationSchema={NomieeValidationSchema}
            onSubmit={handleSaveAndAddMore}
          >
            {({ values,touched, errors, setFieldValue }) => (
              <Form className="flex flex-col gap-6 rounded-xl border-[0.5px] bg-white p-8">
                <OptionHeading
                  // text="First Nominee"
                  text={`Nominee ${nomineeData?.length + 1} `}
                  className="text-xs leading-5 text-[#21B546]"
                />
                <div id="_fullName" className="flex flex-col">
                  <OptionHeading text="Full Name" className="medium-text" />
                  <Field
                    name="fullName"
                    type="text"
                    className={`medium-text max-h-[2.875rem] w-full rounded-md border px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE] ${
                      touched.fullName && errors.fullName ? 'border-red-500' : 'border-[#AFBACA]'
                    } focus:border-custom-green`}
                    placeholder="Enter name as on PAN card"
                  />
                
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>

                <div id="_relationShip">
                  <OptionHeading text="Relationship" className="medium-text" />

                  <Select
                    placeholder="Select relation with Investor"
                    className="medium-text block w-full appearance-none rounded-md border  text-sm leading-6 tracking-[-0.2px] text-[#8897AE] outline-none"
                    name="Relationship"
                    options={relationDropdown || []}
                    onChange={(e) => {
                      console.log(e);
                      setFieldValue("Relationship", e.value);
                    }}
                    styles={selectCustomStyle}
                  />
                  <ErrorMessage
                    name="Relationship"
                    component="div"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
                <div
                  id="_panAndPercentageShare"
                  className="flex flex-col gap-5 md:grid md:grid-cols-2"
                >
                  <div id="_pan">
                    <OptionHeading text="PAN" className="medium-text" />
                    <Field
                      name="PAN"
                      type="text"
                      className={`medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE] focus:border-custom-green ${
                        touched.PAN && errors.PAN && 'border-red-500' 
                      }`}
                      placeholder="PAN of nominee"
                    />
                    <ErrorMessage
                      name="PAN"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                  <div id="_percentage">
                    <OptionHeading
                      text="Percent Share"
                      className="medium-text"
                    />

                    <Field
                      name="PercentShare"
                      type="text"
                      className={` medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE] focus:border-custom-green ${
                        touched.PercentShare && errors.PercentShare ? 'border-red-500' : 'border-[#AFBACA]'
                      }`}
                      placeholder="Enter % share"
                    />

                    <ErrorMessage
                      name="PercentShare"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                </div>
                <div
                  id="_DOB"
                  className="flex flex-col gap-5 md:grid md:grid-cols-2"
                >
                  <div id="_left">
                    <OptionHeading
                      text="Date of Birth"
                      className="medium-text"
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                      
                        inputFormat="DD/MM/YYYY"
                        value={values?.DateOfBirth}
                        onChange={(newValue) => {
                          setFieldValue("DateOfBirth", newValue);
                          const isShowDob = isUserUnder18(
                            formatDates(newValue ?? null),
                          );
                          
                          setFieldValue("isShowDob", isShowDob);
                        }}
                        renderInput={(params) => (
                          <CustomTextField {...params} />
                        )}
                        slotProps={{
                          inputAdornment: {
                            position: "start",
                          },
                        }}
                        maxDate={dayjs()}
                      />
                    </LocalizationProvider>
                   
                       <ErrorMessage
                      name="DateOfBirth"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                  <div id="_empty" className="hidden md:block"></div>
                </div>
                {/* add gurdian */}
                {console.log("afdlashfasdfa", values?.isShowDob)}
                {values?.isShowDob && (
                  <div id="_guardian_data" className="flex flex-col gap-6">
                    <OptionHeading
                      text="Guardian Details is Mandatory for Minor"
                      className="text-xs leading-5 text-[#21B546]"
                    />
                    <div
                      id="_firstAndMiddleName"
                      className="flex flex-col gap-5 md:grid md:grid-cols-2"
                    >
                      <div id="_left" className="w-full">
                        <OptionHeading
                          text="Guardian First Name"
                          className="medium-text"
                        />
                        <Field
                          name="guardian.first_name"
                          type="text"
                          className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE] focus:border-custom-green"
                          placeholder=" First Name"
                        />
                        <ErrorMessage
                          name="guardian.first_name"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                      <div id="_right" className="w-full">
                        <OptionHeading
                          text="Guardian Middle Name
"
                          className="medium-text"
                        />
                        <Field
                          name="guardian.middle_name"
                          type="text"
                          className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE] focus:border-custom-green"
                          placeholder="Middle Name"
                        />
                        <ErrorMessage
                          name="guardian.middle_name"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                    </div>
                    <div
                      id="_guardian_last_name"
                      className="flex flex-col gap-5 md:grid md:grid-cols-2"
                    >
                      <div id="_left" className="w-full">
                        <OptionHeading
                          text="Guardian Last Name"
                          className="medium-text"
                        />
                        <Field
                          name="guardian.last_name"
                          type="text"
                          className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE] focus:border-custom-green"
                          placeholder="Last Name"
                        />
                        <ErrorMessage
                          name="guardian.last_name"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                      <div id="_right" className="w-full">
                        <OptionHeading
                          text="Guardian PAN"
                          className="medium-text"
                        />
                        <Field
                          name="guardian.guardian_pan"
                          type="text"
                          className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE] focus:border-custom-green"
                          placeholder="Guardian PAN"
                        />
                        <ErrorMessage
                          name="guardian.guardian_pan"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div id="_checkbox" className="flex  items-baseline gap-2">
                  <Field
                    type="checkbox"
                    name="sameAsInvestor"
                    checked={values.sameAsInvestor}
                  />
                  <p>Nominee’s address is same as investor’s address</p>
                </div>

                {!values.sameAsInvestor && (
                  <div id="_bottomAddress" className="flex flex-col gap-6">
                    <OptionHeading
                      text="Correspondent Address"
                      className="text-xs leading-5 text-[#21B546]"
                    />
                    <div id="_line1">
                      <OptionHeading
                        text="Address Line 1"
                        className="medium-text"
                      />
                     
                      <Field
                        name="correspondentAddress.addressLine1"
                        type="text"
                        className={`medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE] focus:border-custom-green ${
                          touched?.correspondentAddress?.addressLine1 && errors?.correspondentAddress?.addressLine1 ? 'border-red-500' : 'border-[#AFBACA]'
                        }`}
                        placeholder="Apartment, Building, House"
                      />
                      <ErrorMessage
                        name="correspondentAddress.addressLine1"
                        component="div"
                        className="mt-1 text-xs text-red-500"
                      />
                    </div>
                    <div id="_line2">
                      <OptionHeading
                        text="Address Line 2"
                        className="medium-text"
                      />
                      {

                      }
                      <Field
                        name="correspondentAddress.addressLine2"
                        type="text"
                        className={`medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE] focus:border-custom-green ${
                          touched?.correspondentAddress?.addressLine2 && errors?.correspondentAddress?.addressLine2 ? 'border-red-500' : 'border-[#AFBACA]'
                        }`}
                        placeholder="Street, Locality, Area"
                      />
                      <ErrorMessage
                        name="correspondentAddress.addressLine2"
                        component="div"
                        className="mt-1 text-xs text-red-500"
                      />
                    </div>
                    <div
                      id="_pinAndCity"
                      className="flex grid-cols-2 flex-col gap-3 md:grid"
                    >
                      <div id="_left" className="w-full">
                        <OptionHeading text="Pincode" className="medium-text" />
                        <Field
                          name="correspondentAddress.pincode"
                          type="text"
                          className={`medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE] focus:border-custom-green  ${
                          touched?.correspondentAddress?.pincode && errors?.correspondentAddress?.pincode ? 'border-red-500' : 'border-[#AFBACA]'
                        }`}
                          placeholder="Enter Pincode"
                        />
                        <ErrorMessage
                          name="correspondentAddress.pincode"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                      <div id="_right" className="w-full">
                        <OptionHeading text="City" className="medium-text" />
                        <Field
                          name="correspondentAddress.city"
                          type="text"
                          className={`medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE] focus:border-custom-green ${
                            touched?.correspondentAddress?.city && errors?.correspondentAddress?.city ? 'border-red-500' : 'border-[#AFBACA]'
                          }`}
                          placeholder="Enter City"
                        />
                        <ErrorMessage
                          name="correspondentAddress.city"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                    </div>
                    <div
                      id="_stateAndCountry"
                      className="flex grid-cols-2 flex-col gap-3 md:grid"
                    >
                      <div id="_left" className="w-full">
                        <OptionHeading text="State" className="medium-text" />
                        <Field
                          name="correspondentAddress.state"
                          type="text"
                          className={`medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE] focus:border-custom-green ${
                            touched?.correspondentAddress?.state && errors?.correspondentAddress?.state ? 'border-red-500' : 'border-[#AFBACA]'
                          }`}
                          placeholder="Enter State"
                        />
                        <ErrorMessage
                          name="correspondentAddress.state"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                      <div id="_right" className="w-full">
                        <OptionHeading text="Country" className="medium-text" />
                        <Field
                          name="correspondentAddress.country"
                          type="text"
                          className={`medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE] focus:border-custom-green ${
                            touched?.correspondentAddress?.country && errors?.correspondentAddress?.country ? 'border-red-500' : 'border-[#AFBACA]'
                          }`}
                          placeholder="Enter Country" 
                        />
                        <ErrorMessage
                          name="correspondentAddress.country"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div id="_button" className="grid grid-cols-2 gap-4">
                  <Button
                    label="Save & Add More"
                    type="submit"
                    className="medium-text h-fit max-h-12 w-fit whitespace-nowrap rounded-md border border-[#55D976] px-[11.5px] py-[10px] text-base leading-7 tracking-[-0.3px] text-[#21B546] md:block"
                  />
                  <div id="_empty"></div>
                </div>
              </Form>
            )}
          </Formik>
        )}

        <div id="_button" className="mb-4 flex items-center gap-5">
          <Button
            label="Go Back"
            type="button"
            className="medium-text hidden max-h-12 rounded-md border border-[#55D976] text-base leading-7 tracking-[-0.3px] text-[#21B546] md:block"
          />
          <Button
            label="Save & Continue"
            type="button"
            disabled={!(totalSelectedShare === 100)}
            className={`medium-text max-h-12  text-base leading-7 tracking-[-0.3px]  ${
              totalSelectedShare === 100
                ? "bg-[#21B546] text-white"
                : " bg-[#F0F3F9] text-[#AFBACA] active:scale-[1]"
            }`}
            onClick={() => {
              if (totalSelectedShare === 100) {
                handleProceed(selectedNominee);
              } else if (totalSelectedShare !== 100) {
                toast.error("Percentage share has to be 100%");
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AddNomination;
