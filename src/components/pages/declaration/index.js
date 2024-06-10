import React, { useCallback, useEffect, useState } from "react";
import Button from "../../atoms/button/Button";
import OptionHeading from "../../atoms/optionHeading";
import OptionHeader from "../../molecules/optionHeader";
import OptionButton from "../../atoms/optionButton";
import { Form, Formik } from "formik";
import useBackgroundColor from "../../../customHooks/useBackgroundColor";
import axios from "axios";

const Declaration = () => {
  useBackgroundColor();
  const [getApiResponse, setGetApiResponse] = useState([]);


  const handleGetCall = useCallback(async () => {
    const response = await axios.post(
      "https://altcaseinvestor.we3.in/api/v1/invest/getdeclarations",
      {
        fd_investment_id: 417,
      }
    );
    console.log("response", response?.data?.data);
    setGetApiResponse(response?.data?.data);
  }, []);

  useEffect(() => {
    handleGetCall();
  }, [handleGetCall]);

  const handleSubmit = async (values, { resetForm }) => {
    let xmlData = "<Root>";
    getApiResponse.forEach((question, index) => {
      const responseValue = values[`question_${index}`] === "Yes" ? 1 : 0;
      xmlData += `<R><D_ID>${question.declaration_id}</D_ID><D_VALUE>${responseValue}</D_VALUE></R>`;
    });
    xmlData += "</Root>";

    const payload = {
      declaration_data_xml: xmlData,
      fd_investment_id: 417,
      investor_id: 174,
    };
console.log("xmlData", xmlData)
    try {
      const response = await axios.post(
        "https://altcaseinvestor.we3.in/api/v1/invest/updatedeclarations",
        payload
      );
      console.log("Form Data88a8sfdas: ", response?.data);
    } catch (error) {
      console.error("Error submitting form: ", error);
    }

    resetForm();
  };

  const handleGoBack = (event) => {
    event.preventDefault();
    console.log("Go Back clicked!");
  };

  const initialValues = getApiResponse.reduce((acc, question, index) => {
    acc[`question_${index}`] = "No"; 
    return acc;
  }, {});

  return (
    <div className="mx-auto mb-4 px-6 mt-8 flex max-w-[1008px] flex-col gap-5 md:gap-7 w-full sm:max-w-[592px]">
      <OptionHeader
        title="Declaration"
        subTitle="Give responses to these declaration questions to make you investment ready."
      />
      {getApiResponse.length > 0 && (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validateOnBlur={false}
        >
          {({ values, setFieldValue }) => (
            <Form className="flex flex-col gap-6 rounded-xl md:border-[0.5px] bg-white md:p-8">
              {getApiResponse.map((response, index) => (
                <div key={index}>
                  <OptionHeading text={response?.declaration_question} />
                  <div className="flex flex-wrap items-center gap-3">
                    <OptionButton
                      text="Yes"
                      isActive={values[`question_${index}`] === "Yes"}
                      onClick={() => setFieldValue(`question_${index}`, "Yes")}
                    />
                    <OptionButton
                      text="No"
                      isActive={values[`question_${index}`] === "No"}
                      onClick={() => setFieldValue(`question_${index}`, "No")}
                    />
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-5">
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
      )}
      <div className="h-16" />
    </div>
  );
};

export default Declaration;
