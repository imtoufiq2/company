import * as Yup from "yup";

export const validationSchema = Yup.object({
  pan: Yup.string()
    .length(10, "PAN must be exactly 10 characters")
    .required("PAN is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const initialValues = {
  pan: "",
  dateOfBirth: null,
  fullName: "",
  email: "",
};

export const handleSubmit = (values) => {
  // Handle form submission
  console.log("Form submitted with values:", values);
};
