import { useState } from "react";
import { FaCheckCircle } from "react-icons/all";
import Input from "./Input";
import Select from "./Select";
import CheckoutSummary from "./CheckoutSummary";

import { useFormik } from "formik";
import { validationSchema } from "./schema";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [addNumber, setAddNumber] = useState("");
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState("");

  const [validationAttempt, setValidationAttempt] = useState(false);

  const formValues = {
    firstName: "",
    lastName: "",
    number: "",
    addNumber: "",
    address: "",
    info: "",
  };

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
    actions.resetForm();
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: formValues,
    validateOnBlur: true,
    validateOnChange: validationAttempt,
    validationSchema,
    onSubmit,
  });

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log({ firstName, lastName, number, addNumber, address, info });
  //   setFirstName("");
  //   setLastName("");
  //   setNumber("");
  //   setAddNumber("");
  //   setAddress("");
  //   setInfo("");
  // };

  const cancelHandler = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setNumber("");
    setAddNumber("");
    setAddress("");
    setInfo("");
  };

  return (
    <div className="px-[20px] lg:px-[55px] mt-[60px] md:mt-[84px] flex flex-col lg:flex-row gap-0 lg:gap-3">
      <form
        onSubmit={handleSubmit}
        className=" bg-white rounded-md mb-1 lg:mb-8 flex-1"
      >
        <div className="">
          <div className="flex items-center px-4 py-3 gap-2 border-b">
            <FaCheckCircle className="text-[#7A7A7F]" />
            <p className="text-[13px] md:text-sm font-medium">
              1. DELIVERY ADDRESS
            </p>
          </div>
        </div>

        <div className="px-4 py-2 mt-2 font-medium text-[13px] md:text-sm border-b-2">
          <h3>ADD NEW ADDRESS</h3>

          <div className="flex flex-col lg:flex-row lg:gap-10 w-full">
            <Input
              id="firstName"
              label="First Name"
              placeholder="Enter your First Name"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              errorMessage={errors.firstName}
              className={
                errors.firstName
                  ? "border border-red-600 hover:outline-1 hover:border-red-600 hover:outline-red-600"
                  : ""
              }
              // onChange={(e) => setFirstName(e.target.value)}
              // required={true}
            />

            <Input
              id="lastName"
              label="Last Name"
              placeholder="Enter your Last Name"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              errorMessage={errors.lastName}
              className={
                errors.lastName
                  ? "border border-red-600 hover:outline-1 hover:border-red-600 hover:outline-red-600"
                  : ""
              }
              // onChange={(e) => setLastName(e.target.value)}
              // required={true}
            />
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:gap-10 w-full">
            <div className="w-full flex gap-3 md:gap-10 items-start justify-start">
              <div className="flex flex-col gap-[9px] mt-2 ml-3 md:ml-5">
                <h4 className="text-[#A3A3A3] text-xs">Prefix</h4>
                <p>+234</p>
              </div>
              <Input
                id="number"
                label="Phone Number"
                placeholder="Enter your Phone Number"
                type="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.number}
                errorMessage={errors.number}
                className={
                  errors.number
                    ? "border border-red-600 hover:outline-1 hover:border-red-600 hover:outline-red-600"
                    : ""
                }
                // onChange={(e) => setNumber(e.target.value)}
                // required={true}
              />
            </div>

            <div className="w-full flex gap-3 md:gap-10 items-start justify-start">
              <div className="flex flex-col gap-[9px] mt-2 ml-3 md:ml-5">
                <h4 className="text-[#A3A3A3] text-xs">Prefix</h4>
                <p>+234</p>
              </div>
              <Input
                id="addNumber"
                label="Additional Phone Number"
                placeholder="Enter your Additional Phone Number"
                type="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.addNumber}
                errorMessage={errors.addNumber}
                className={
                  errors.addNumber
                    ? "border border-red-600 hover:outline-1 hover:border-red-600 hover:outline-red-600"
                    : ""
                }
                // onChange={(e) => setAddNumber(e.target.value)}
                // required={true}
              />
            </div>
          </div>

          <div className="mb-8">
            <Input
              id="address"
              label="Delivery Address"
              placeholder="Enter your Address"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              errorMessage={errors.address}
              className={
                errors.address
                  ? "border border-red-600 hover:outline-1 hover:border-red-600 hover:outline-red-600"
                  : ""
              }
              // onChange={(e) => setAddress(e.target.value)}
              // required={true}
            />
          </div>

          <div>
            <Input
              id="info"
              label="Additional Information"
              placeholder="Enter Additional Information"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.info}
              // onChange={(e) => setInfo(e.target.value)}
              // required={false}
            />
          </div>

          <div className="">
            <Select state={true} />
          </div>
        </div>

        <div className="flex justify-end gap-3 px-4 py-2 md:p-5 ">
          <button
            className="rounded-md text-xs md:text-sm text-[#ff9900] font-semibold p-3 md:p-4 hover:bg-[#FCDBB9]"
            onClick={cancelHandler}
          >
            CANCEL
          </button>
          <button
            type="sumit"
            className="bg-[#ff9900] text-xs md:text-sm text-white font-semibold p-3 md:p-4 rounded-md hover:bg-[#E07E1B]"
          >
            SAVE
          </button>
        </div>
      </form>

      <div>
        <CheckoutSummary />
      </div>
    </div>
  );
};

export default Form;
