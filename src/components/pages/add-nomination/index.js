import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import OptionHeader from "../../molecules/optionHeader";
import ShowNominee from "../../organism/ShowNominee";
import OptionHeading from "../../atoms/optionHeading";
import Button from "../../atoms/button";

const AddNomination = () => {
  const [nomineeData, setNomineeData] = useState([
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

  const calculateTotalShare = (data) => {
    return data.reduce((total, nominee) => {
      return total + nominee.PercentShare;
    }, 0);
  };

  const [totalShare, setTotalShare] = useState(
    calculateTotalShare(nomineeData),
  );
  console.warn("Total", totalShare);
  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    Relationship: Yup.string().required("Relationship is required"),
    PAN: Yup.string().required("PAN is required"),
    PercentShare: Yup.number()
      .required("Percent Share is required")
      .min(1, "Share must be at least 1%")
      .max(100 - totalShare, `Share cannot exceed ${100 - totalShare}%`)
      .test("maxTotalShare", `Total share cannot exceed 100%`, (value) => {
        return value + totalShare <= 100;
      }),
    DateOfBirth: Yup.string().required("Date of Birth is required"),
  });

  const initialValues = {
    fullName: "",
    Relationship: "",
    PAN: "",
    PercentShare: "",
    DateOfBirth: "",
    Address: "",
  };

  const handleSaveAndAddMore = (values, { resetForm }) => {
    const newPercentShare = Number(values.PercentShare);
    setNomineeData((prevData) => [
      ...prevData,
      { ...values, PercentShare: newPercentShare },
    ]);
    setTotalShare((prevTotal) => prevTotal + newPercentShare);
    resetForm();
  };

  return (
    <div
      className={`mx-auto mb-4 mt-8 flex w-[90%] max-w-[1008px] flex-col gap-5 md:w-[65%] md:gap-7 lg:w-[41.11%]`}
    >
      <OptionHeader
        title="Add Nomination"
        subTitle="Enter nominee details, so that the money invested could be easily claimed by nominees in the unfortunate event of demise of the investor"
      />
      {/* Show the registered nominees */}
      <div className="flex flex-col gap-4">
        {nomineeData.map((cur, index) => (
          <ShowNominee key={index} cur={cur} />
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
                    type="text"
                    className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE] "
                    placeholder="DD/MM/YYYY"
                  />
                  <ErrorMessage
                    name="DateOfBirth"
                    component="div"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
                <div id="_empty"></div>
              </div>

              <div id="_checkbox" className="flex items-center gap-2">
                <Field type="checkbox" name="sameAsInvestor" />
                <p>Nominee’s address is same as investor’s address</p>
              </div>
              <div id="_button" className="grid grid-cols-2 gap-4">
                <Button
                  label="Save & Add More"
                  type="submit"
                  className="medium-text max-h-12 rounded-md border border-[#55D976] text-base leading-7 tracking-[-0.3] text-[#21B546] md:block"
                />
                <div id="_empty"></div>
              </div>
            </Form>
          )}
        </Formik>
      )}

      <div id="_button" className="flex items-center gap-5">
        <Button
          label="Go Back"
          type="button"
          className="medium-text hidden max-h-12 rounded-md border border-[#55D976] text-base leading-7 tracking-[-0.3] text-[#21B546] md:block"
        />
        <Button
          label="Continue"
          type="button"
          className={`medium-text max-h-12 bg-[#21B546] text-base leading-7 tracking-[-0.3] text-white ${
            totalShare === 100 ? "" : "cursor-not-allowed opacity-50"
          }`}
          disabled={totalShare !== 100}
          onClick={() => {
            if (totalShare === 100) {
              alert("Form submitted successfully!");
              // Handle the final form submission here
            }
          }}
        />
      </div>
    </div>
  );
};

export default AddNomination;
