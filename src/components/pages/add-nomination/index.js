import { ErrorMessage, Field, Form, Formik } from "formik";
import * as React from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import Button from "../../atoms/button";
import OptionHeading from "../../atoms/optionHeading";
import OptionHeader from "../../molecules/optionHeader";
import ShowNominee from "../../organism/ShowNominee";

const AddNomination = () => {
  const [nomineeData, setNomineeData] = React.useState([
    {
      fullName: "Tanvi Shah",
      Relationship: "Wife",
      PAN: "ANHPD7840R",
      DateOfBirth: "12 January 1983",
      PercentShare: 30,
      Address:
        "1603, Whitelily, Nahar Amritshakti, Chandivali, Andheri (E), Mumbai - 400072",
    },
    {
      fullName: "Rohan Shah",
      Relationship: "Son",
      PAN: "BNHPD7841S",
      DateOfBirth: "20 March 2006",
      PercentShare: 40,
      Address:
        "1603, Whitelily, Nahar Amritshakti, Chandivali, Andheri (E), Mumbai - 400072",
    },
  ]);
  const [selectedNomineeData, setSelectedNomineeData] = React.useState([]);

  const calculateTotalShare = (data) => {
    return data.reduce((total, nominee) => {
      return total + nominee.PercentShare;
    }, 0);
  };

  const [totalShare, setTotalShare] = React.useState(
    calculateTotalShare(selectedNomineeData),
  );
  React.useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";

    const updatedTotalShare = calculateTotalShare(selectedNomineeData);
    setTotalShare(updatedTotalShare);

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [selectedNomineeData]);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    Relationship: Yup.string().required("Relationship is required"),
    PAN: Yup.string()
      .required("PAN is required")
      .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"),
    PercentShare: Yup.number()
      .required("Percent Share is required")
      .typeError("Percent Share must be a number")
      .min(1, "Share must be at least 1%")
      .max(100 - totalShare, `Share cannot exceed ${100 - totalShare}%`)
      .test("maxTotalShare", `Total share cannot exceed 100%`, (value) => {
        return value + totalShare <= 100;
      }),
    DateOfBirth: Yup.string()
      .required("Date of Birth is required")
      .matches(
        /^(0?[1-9]|[12][0-9]|3[01])[-/](0?[1-9]|1[0-2])[-/]\d{4}$/,
        "Invalid Date of Birth format (DD/MM/YYYY)",
      ),
    correspondentAddress: Yup.object().shape({
      addressLine1: Yup.string().when("$sameAsInvestor", {
        is: false,
        then: () => Yup.string().required("Address Line 1 is required"),
        otherwise: () => Yup.string().optional(),
      }),
      addressLine2: Yup.string().when("$sameAsInvestor", {
        is: false,
        then: () => Yup.string().required("Address Line 2 is required"),
        otherwise: () => Yup.string().optional(),
      }),
      pincode: Yup.string().when("$sameAsInvestor", {
        is: false,
        then: () => Yup.string().required("Pincode is required"),
        otherwise: () => Yup.string().optional(),
      }),
      city: Yup.string().when("$sameAsInvestor", {
        is: false,
        then: () => Yup.string().required("City is required"),
        otherwise: () => Yup.string().optional(),
      }),
      state: Yup.string().when("$sameAsInvestor", {
        is: false,
        then: () => Yup.string().required("State is required"),
        otherwise: () => Yup.string().optional(),
      }),
      country: Yup.string().when("$sameAsInvestor", {
        is: false,
        then: () => Yup.string().required("Country is required"),
        otherwise: () => Yup.string().optional(),
      }),
    }),
  });

  const initialValues = {
    fullName: "",
    Relationship: "",
    PAN: "",
    PercentShare: "",
    DateOfBirth: "",
    Address: "",
    sameAsInvestor: false,
    correspondentAddress: {
      addressLine1: "",
      addressLine2: "",
      pincode: "",
      city: "",
      state: "",
      country: "",
    },
  };

  const handleSaveAndAddMore = (values, { resetForm }) => {
    const newPercentShare = Number(values.PercentShare);
    setNomineeData((prevData) => [
      ...prevData,
      { ...values, PercentShare: newPercentShare },
    ]);

    // Recalculate totalShare after updating nomineeData
    const updatedTotalShare = calculateTotalShare([
      ...selectedNomineeData,
      { ...values, PercentShare: newPercentShare },
    ]);
    setTotalShare(updatedTotalShare);

    resetForm();
  };

  return (
    <div className="mx-auto mb-8 mt-8 flex w-full max-w-[1008px] flex-col gap-5  px-6 sm:max-w-[592px] md:gap-7">
      <OptionHeader
        title="Add Nomination"
        subTitle="Enter nominee details, so that the money invested could be easily claimed by nominees in the unfortunate event of demise of the investor"
      />
      {/* Show the registered nominees */}
      <div className="flex flex-col gap-4">
        {nomineeData.map((cur, index) => (
          <ShowNominee
            key={index}
            cur={cur}
            setSelectedNomineeData={setSelectedNomineeData}
            selectedNomineeData={selectedNomineeData}
          />
        ))}
      </div>
      {/* Nominee form */}
      {totalShare < 100 && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={handleSaveAndAddMore}
        >
          {({ values }) => (
            <Form className="flex flex-col gap-6 rounded-xl border-[0.5px] bg-white p-8">
              <OptionHeading
                text="First Nominee"
                className="text-xs leading-5 text-[#21B546]"
              />
              <div id="_fullName" className="flex flex-col">
                <OptionHeading text="Full Name" className="medium-text" />
                <Field
                  name="fullName"
                  type="text"
                  className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
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
                <Field
                  name="Relationship"
                  type="text"
                  className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                  placeholder="Select relation with investor"
                />
                <ErrorMessage
                  name="Relationship"
                  component="div"
                  className="mt-1 text-xs text-red-500"
                />
              </div>
              <div
                id="_panAndPercentageShare"
                className="grid grid-cols-2 gap-5"
              >
                <div id="_pan">
                  <OptionHeading text="PAN" className="medium-text" />
                  <Field
                    name="PAN"
                    type="text"
                    className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                    placeholder="PAN of nominee"
                  />
                  <ErrorMessage
                    name="PAN"
                    component="div"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
                <div id="_percentage">
                  <OptionHeading text="Percent Share" className="medium-text" />
                  <Field
                    name="PercentShare"
                    type="text"
                    className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                    placeholder="Enter % share"
                  />
                  <ErrorMessage
                    name="PercentShare"
                    component="div"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
              </div>
              <div id="_DOB" className="grid grid-cols-2 gap-5">
                <div id="_left">
                  <OptionHeading text="Date of Birth" className="medium-text" />
                  <Field
                    name="DateOfBirth"
                    type="date"
                    className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                    placeholder="DD/MM/YYYY"
                  />
                  <ErrorMessage
                    name="DateOfBirth"
                    component="div"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
                {/* <div id="_empty"></div> */}
              </div>

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
                      className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
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
                    <Field
                      name="correspondentAddress.addressLine2"
                      type="text"
                      className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                      placeholder="Street, Locality, Area"
                    />
                    <ErrorMessage
                      name="correspondentAddress.addressLine2"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                  <div id="_pinAndCity" className="flex gap-3">
                    <div id="_left" className="w-full">
                      <OptionHeading text="Pincode" className="medium-text" />
                      <Field
                        name="correspondentAddress.pincode"
                        type="text"
                        className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
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
                        className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                        placeholder="Enter City"
                      />
                      <ErrorMessage
                        name="correspondentAddress.city"
                        component="div"
                        className="mt-1 text-xs text-red-500"
                      />
                    </div>
                  </div>
                  <div id="_stateAndCountry" className="flex gap-3">
                    <div id="_left" className="w-full">
                      <OptionHeading text="State" className="medium-text" />
                      <Field
                        name="correspondentAddress.state"
                        type="text"
                        className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
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
                        className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
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
                  className="medium-text h-fit max-h-12 w-fit whitespace-nowrap rounded-md border border-[#55D976] px-[11.5px] py-[10px] text-base leading-7 tracking-[-0.3] text-[#21B546] md:block"
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
          className="medium-text hidden max-h-12 rounded-md border border-[#55D976] text-base leading-7 tracking-[-0.3] text-[#21B546] md:block"
        />
        <Button
          label="Save & Continue"
          type="button"
          className={`medium-text max-h-12  text-base leading-7 tracking-[-0.3]  ${
            totalShare === 100
              ? "bg-[#21B546] text-white"
              : " bg-[#F0F3F9] text-[#AFBACA] active:scale-[1]"
          }`}
          // disabled={totalShare !== 100}
          onClick={() => {
            if (totalShare === 100) {
              alert("Form submitted successfully!");
            } else if (totalShare !== 100) {
              toast.error("Percentage share has to be 100%");
            }
          }}
        />
      </div>
    </div>
  );
};

export default AddNomination;
