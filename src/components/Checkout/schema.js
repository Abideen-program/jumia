import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required field"),
  lastName: Yup.string().required("Required field"),
  number: Yup.number().required("Required field"),
  addNumber: Yup.number().required("Required field"),
  address: Yup.string().required("Required field"),
  info: Yup.string(),
});
