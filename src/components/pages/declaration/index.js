import React, { useEffect, useState } from "react";
import Button from "../../atoms/button/Button";
import OptionHeading from "../../atoms/optionHeading";
import OptionHeader from "../../molecules/optionHeader";
import OptionButton from "../../atoms/optionButton";
import { Form, Formik } from "formik";
import useBackgroundColor from "../../../customHooks/useBackgroundColor";

const initialValues = {
  isPolitically: "No",
  isRelative: "No",
  isCitizen: "No",
};

const Declaration = () => {
 

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data: ", values);
    resetForm();
  };
  const handleGoBack = (event) => {
    // Handle navigation or any other action for "Go Back"
    event.preventDefault();
    console.log("Go Back clicked!");
  };

  useBackgroundColor();
  return (
    // <div
    //   className={`mx-auto mb-4 mt-8 flex w-[90%] max-w-[1008px] flex-col gap-5 md:w-[65%] md:gap-7 lg:w-[41.11%]`}
    // >
    <div className="mx-auto mb-4 px-6 mt-8 flex max-w-[1008px] flex-col gap-5  md:gap-7 w-full sm:max-w-[592px]">
      <OptionHeader
        title="Declaration"
        subTitle="Give responses to these declaration questions to make you investment ready."
      />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnBlur={false}
      >
        {({ values, setFieldValue }) => (
          <Form className="flex flex-col gap-6 rounded-xl md:border-[0.5px] bg-white md:p-8">
            <div id="_first">
              <OptionHeading text="Are you a politically exposed person (PEP)?" />
              <div id="_options" className="flex flex-wrap items-center gap-3">
                <OptionButton
                  text="Yes"
                  isActive={values.isPolitically === "Yes"}
                  onClick={() => setFieldValue("isPolitically", "Yes")}
                />
                <OptionButton
                  text="No"
                  isActive={values.isPolitically === "No"}
                  onClick={() => setFieldValue("isPolitically", "No")}
                />
              </div>
            </div>
            <div id="_second">
              <OptionHeading text="Are you a relative to a politically exposed person (PEP)?" />
              <div id="_options" className="flex flex-wrap items-center gap-3">
                <OptionButton
                  text="Yes"
                  isActive={values.isRelative === "Yes"}
                  onClick={() => setFieldValue("isRelative", "Yes")}
                />
                <OptionButton
                  text="No"
                  isActive={values.isRelative === "No"}
                  onClick={() => setFieldValue("isRelative", "No")}
                />
              </div>
            </div>
            <div id="_third">
              <OptionHeading text="Are you a citizen national or tax resident of any other country outside India?" />
              <div id="_options" className="flex flex-wrap items-center gap-3">
                <OptionButton
                  text="Yes"
                  isActive={values.isCitizen === "Yes"}
                  onClick={() => setFieldValue("isCitizen", "Yes")}
                />
                <OptionButton
                  text="No"
                  isActive={values.isCitizen === "No"}
                  onClick={() => setFieldValue("isCitizen", "No")}
                />
              </div>
            </div>
            <div id="_button" className="flex items-center gap-5">
              <Button
                label="Go Back"
                onClick={handleGoBack}
                className="medium-text hidden max-h-12 rounded-md border border-[#55D976] text-base leading-7 tracking-[-0.3] text-[#21B546] md:block"
              />
              <Button
                label="Continue"
                type="submit"
                className="medium-text max-h-12 bg-[#21B546] text-base leading-7 tracking-[-0.3] text-white"
              />
            </div>
          </Form>
        )}
      </Formik>
      <div id="spacing" className="h-16"/>
    </div>
  );
};

export default Declaration;
