import * as Yup from "yup";
import React, {  useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import OptionHeader from "../../molecules/optionHeader";
import OptionHeading from "../../atoms/optionHeading";
import Button from "../../atoms/button";
import ChevronIcon from "../../../Icons/Chevron-down";
import useBackgroundColor from "../../../customHooks/useBackgroundColor";
import NomineePrompt from "../../organism/nominee-prompt";
import ChevronNormal from "../../../Icons/Chevron-normal";

const ProfessionalDetails = () => {
  useBackgroundColor();
  
  const validationSchema = Yup.object().shape({
    occupation: Yup.string().required("Occupation is required"),
    annualIncome: Yup.string().required("Annual income is required"),
    sourceOfIncome: Yup.string().required("Source of income is required"),
  });
  const [showPrompt, setShowPrompt] = useState(false);
  return (
    <>
    {showPrompt && (
        <NomineePrompt
          setShowLoader={setShowPrompt}
          showLoader={showPrompt}
        />
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
            annualIncome: "",
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
          {({ isSubmitting }) => (
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
                    type="text"
                    name="occupation"
                    as="select"
                    className="medium-text block w-full appearance-none rounded-md border px-[14px] py-[11px] pr-10 text-sm leading-6 tracking-[-0.2] text-[#8897AE] outline-none"
                  >
                    <option value="">Select your occupation</option>
                    <option value="student">Student</option>
                    <option value="professional">Professional</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="homemaker">Homemaker</option>
                    <option value="retired">Retired</option>
                    <option value="unemployed">Unemployed</option>
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
                  text="Annual Income"
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
                    name="annualIncome"
                    as="select"
                    className="medium-text block w-full appearance-none rounded-md border px-[14px] py-[11px] pr-10 text-sm leading-6 tracking-[-0.2] text-[#8897AE] outline-none"
                  >
                    <option value="">Select your annual income</option>
                    <option value="lessThan10k">Less than $10,000</option>
                    <option value="10kTo50k">$10,000 to $50,000</option>
                    <option value="50kTo100k">$50,000 to $100,000</option>
                    <option value="100kTo200k">$100,000 to $200,000</option>
                    <option value="moreThan200k">More than $200,000</option>
                  </Field>
                </aside>
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
                    <option value="">Select your source of income</option>
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
                  className="medium-text hidden max-h-12 rounded-md border border-[#55D976] text-base leading-7 tracking-[-0.3] text-[#21B546] md:block"
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
      <div id="spacing" className="h-16" />
    </div>
    </>
  );
};

export default ProfessionalDetails;
