import { useState } from "react";
import { FaCheckCircle } from "react-icons/all";
import Input from "./Input";
import Select from "./Select";
import CheckoutSummary from "./CheckoutSummary";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [addNumber, setAddNumber] = useState("");
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, number, addNumber, address, info });
    setFirstName("");
    setLastName("");
    setNumber("");
    setAddNumber("");
    setAddress("");
    setInfo("");
  };

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
        onSubmit={submitHandler}
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
              id="fname"
              label="First Name"
              placeholder="Enter your First Name"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              required={true}
              value={firstName}
            />

            <Input
              id={"lname"}
              label={"Last Name"}
              placeholder={"Enter your Last Name"}
              type={"text"}
              onChange={(e) => setLastName(e.target.value)}
              required={true}
              value={lastName}
            />
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:gap-10 w-full">
            <div className="w-full flex gap-3 md:gap-10 items-start justify-start">
              <div className="flex flex-col gap-[9px] mt-2 ml-3 md:ml-5">
                <h4 className="text-[#A3A3A3] text-xs">Prefix</h4>
                <p>+234</p>
              </div>
              <Input
                id={"pnumber"}
                label={"Phone Number"}
                placeholder={"Enter your Phone Number"}
                type={"phone"}
                onChange={(e) => setNumber(e.target.value)}
                required={true}
                value={number}
              />
            </div>

            <div className="w-full flex gap-3 md:gap-10 items-start justify-start">
              <div className="flex flex-col gap-[9px] mt-2 ml-3 md:ml-5">
                <h4 className="text-[#A3A3A3] text-xs">Prefix</h4>
                <p>+234</p>
              </div>
              <Input
                id={"apnumber"}
                label={"Additional Phone Number"}
                placeholder={"Enter your Additional Phone Number"}
                type={"phone"}
                onChange={(e) => setAddNumber(e.target.value)}
                required={true}
                value={addNumber}
              />
            </div>
          </div>

          <div className="mb-8">
            <Input
              id={"address"}
              label={"Delivery Address"}
              placeholder={"Enter your Address"}
              type={"text"}
              onChange={(e) => setAddress(e.target.value)}
              required={true}
              value={address}
            />
          </div>

          <div>
            <Input
              id={"info"}
              label={"Additional Information"}
              placeholder={"Enter Additional Information"}
              type={"text"}
              onChange={(e) => setInfo(e.target.value)}
              required={false}
              value={info}
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
