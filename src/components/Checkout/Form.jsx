import { useState } from "react";
import NaijaStates from "naija-state-local-government";
import { FaCheckCircle } from "react-icons/all";
import Input from "./Input";

const Form = () => {
  const [stateValue, setStateValue] = useState("Abia");

  const states = NaijaStates.states();

  const statesLGA = NaijaStates.lgas(stateValue);

  return (
    <div className="px-[20px] lg:px-[55px] mt-3">
      <form className="border-2 border-red-300 bg-white rounded-md">
        <div className="">
          <div className="flex items-center p-2 gap-2 border-b">
            <FaCheckCircle className="text-[#7A7A7F]" />
            <p className="text-sm font-medium">1. DELIVERY ADDRESS</p>
          </div>
        </div>

        <div className="p-2 mt-2 font-medium text-sm">
          <h3>ADD NEW ADDRESS</h3>

          <div className="flex gap-10 w-full">
            <Input
              id={"fname"}
              label={"First Name"}
              placeholder={"Enter your First Name"}
              type={"text"}
              onChange={""}
            />

            <Input
              id={"lname"}
              label={"Last Name"}
              placeholder={"Enter your Last Name"}
              type={"text"}
              onChange={""}
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
                onChange={""}
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
                onChange={""}
              />
            </div>
          </div>

          <div className="mb-8">
            <Input
              id={"address"}
              label={"Delivery Address"}
              placeholder={"Enter your Address"}
              type={"text"}
              onChange={""}
            />
          </div>

          <div className="mb-8">
            <Input
              id={"info"}
              label={"Additional Information"}
              placeholder={"Enter Additional Information"}
              type={"text"}
              onChange={""}
            />
          </div>

          <div className="flex gap-10">
            <select
              onChange={(e) => setStateValue(e.target.value)}
              className="focus:border-[#FF9900] focus:outline-0 border border-black p-2 rounded-md w-full"
            >
              {states.map((state) => {
                return (
                  <option key={state} value={state}>
                    {state}
                  </option>
                );
              })}
            </select>

            <select className="focus:border-[#FF9900] focus:outline-0 border border-black p-2 rounded-md w-full">
              {statesLGA.lgas.map((lga) => {
                return (
                  <option key={lga} value={lga}>
                    {lga}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
