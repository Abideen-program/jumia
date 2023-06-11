import { useState } from "react";
import { FaCheckCircle } from "react-icons/all";
import Input from "./Input";
import Select from "./Select";

const Form = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [number, setNumber] = useState(null);
  const [addNumber, setAddNumber] = useState(null);
  const [address, setAddress] = useState(null);
  const [info, setInfo] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, number, addNumber, address, info });
  };

  return (
    <div className="px-[20px] lg:px-[55px] mt-[84px]">
      <form onSubmit={submitHandler} className=" bg-white rounded-md mb-8">
        <div className="">
          <div className="flex items-center px-4 py-3 gap-2 border-b">
            <FaCheckCircle className="text-[#7A7A7F]" />
            <p className="text-sm font-medium">1. DELIVERY ADDRESS</p>
          </div>
        </div>

        <div className="px-4 py-2 mt-2 font-medium text-sm border-b-2">
          <h3>ADD NEW ADDRESS</h3>

          <div className="flex gap-10 w-full">
            <Input
              id="fname"
              label="First Name"
              placeholder="Enter your First Name"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              required={true}
            />

            <Input
              id={"lname"}
              label={"Last Name"}
              placeholder={"Enter your Last Name"}
              type={"text"}
              onChange={(e) => setLastName(e.target.value)}
              required={true}
            />
          </div>

          <div className="flex items-start gap-10 w-full">
            <div className="w-full flex gap-10 items-start justify-start">
              <div className="flex flex-col gap-[9px] mt-2 ml-5">
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
              />
            </div>

            <div className="w-full flex gap-10 items-start justify-start">
              <div className="flex flex-col gap-[9px] mt-2 ml-5">
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
            />
          </div>

          <div className="">
            <Select state={true} />
          </div>
        </div>

        <div className="flex justify-end gap-3 p-5">
          <button className="p-4 rounded-md text-sm text-[#ff9900] font-semibold hover:bg-[#FCDBB9]">
            CANCEL
          </button>
          <button
            type="sumit"
            className="bg-[#ff9900] text-sm text-white font-semibold p-4 rounded-md hover:bg-[#E07E1B]"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
