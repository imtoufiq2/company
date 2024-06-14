import axios from "axios";
import { Form, Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import useBackgroundColor from "../../../customHooks/useBackgroundColor";
import { getData } from "../../../utils/Crypto";
import Button from "../../atoms/button/Button";
import OptionButton from "../../atoms/optionButton";
import OptionHeading from "../../atoms/optionHeading";
import OptionHeader from "../../molecules/optionHeader";
// import { getData } from "../../../utils/Crypto";
import { getData } from "../../../utils/Crypto";
import { endpoints } from "../../../services/endpoints";
import {
  getDeclarationInfo,
  updateDeclarationInfo,
} from "../../../redux/actions/selfDeclaration";
import { useDispatch } from "react-redux";
import { fetchWithWait } from "../../../utils/method";
const Declaration = () => {
  const dispatch = useDispatch();
  useBackgroundColor();
  const [getApiResponse, setGetApiResponse] = useState([]);
  const navigate = useNavigate();

  const handleGetCall = useCallback(async () => {
    const response = await axios.post(
      // "https://altcaseinvestor.we3.in/api/v1/invest/getdeclarations",
      `${endpoints?.baseUrl}/invest/getdeclarations`,
      {
        // fd_investment_id: 417,
        fd_investment_id: Number(sessionStorage.getItem("fd_investment_id")),
        // investor_id: Number(getData("userData")?.investor_id),
      },
    );
    console.log("response", response?.data?.data);
    setGetApiResponse(response?.data?.data);
  }, []);

  const handleGetCalls = useCallback(() => {
    const data = {
      fd_investment_id: Number(sessionStorage.getItem("fd_investment_id")),
    };
    fetchWithWait({ dispatch, action: getDeclarationInfo(data) });
  }, [dispatch]);

  useEffect(() => {
    handleGetCall();
    handleGetCalls();
  }, [handleGetCall, handleGetCalls]);

  const handleSubmit = async (values, { resetForm }) => {
    let xmlData = "<D>"; // Start with the opening <D> tag

    getApiResponse.forEach((question, index) => {
      const responseValue = values[`question_${index}`] === "Yes" ? 1 : 0;
      xmlData += `<R><D_ID>${question.declaration_id}</D_ID><D_VALUE>${responseValue}</D_VALUE></R>`;
    });

    xmlData += "</D>"; // Close the main wrapper after the loop

    const payload = {
      declaration_data_xml: xmlData,
      fd_investment_id: Number(sessionStorage.getItem("fd_investment_id")),
      investor_id: Number(getData("userData")?.investor_id),
      redirection_url: "http://localhost:3000/kyc",
    };
    console.log("xmlData", xmlData);
    try {
      const response = await axios.post(
        // "https://altcaseinvestor.we3.in/api/v1/invest/updatedeclarations",
        `${endpoints?.baseUrl}/invest/updatedeclarations`,
        payload,
      );
      console.log("Form Data88a8sfdas: ", response?.data);
    } catch (error) {
      console.error("Error submitting form: ", error);
    }

    resetForm();
  };

  const handleSubmits = useCallback((values, { resetForm }) => {
    let xmlData = "<D>"; // Start with the opening <D> tag

    getApiResponse.forEach((question, index) => {
      console.log("question", question);
      const responseValue = values[`question_${index}`] === "Yes" ? 1 : 0;
      xmlData += `<R><D_ID>${question.declaration_id}</D_ID><D_VALUE>${responseValue}</D_VALUE></R>`;
    });

    xmlData += "</D>"; // Close the main wrapper after the loop

    const payload = {
      declaration_data_xml: xmlData,
      fd_investment_id: Number(sessionStorage.getItem("fd_investment_id")),
      investor_id: Number(getData("userData")?.investor_id),
      redirection_url: "http://localhost:3000/kyc",
    };

    fetchWithWait({ dispatch, action: updateDeclarationInfo(payload) }).then(
      (response) => {
        if (response) {
          console.log("my response", response);
        }
      },
    );
  });

  const handleGoBack = (event) => {
    event.preventDefault();
    console.log("Go Back clicked!");
  };

  const initialValues = getApiResponse.reduce((acc, question, index) => {
    acc[`question_${index}`] = "No";
    return acc;
  }, {});

  return (
    <div className="mx-auto mb-4 mt-8 flex w-full max-w-[1008px] flex-col gap-5 px-6 sm:max-w-[592px] md:gap-7">
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
            <Form className="flex flex-col gap-6 rounded-xl bg-white md:border-[0.5px] md:p-8">
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
