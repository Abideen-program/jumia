import { useState } from "react";
import NaijaStates from "naija-state-local-government";
import { clx } from "../utils/clx";

const divClass = clx(
  "relative group border border-[#A3A3A6] hover:border-[#ff9900] hover:outline hover:outline-offset-1 hover:outline-1 hover:outline-[#ff9900] rounded-md text-[#A3A3A3] my-4 w-full"
);

const labelClass = clx(
  "group-hover:text-[#ff9900] absolute -top-[10px] left-6 text-xs font-normal bg-white text-[#A3A3A6]"
);

const selectClass = clx(
  "focus:border-[#FF9900] focus:outline-0 border border p-2 rounded-md w-full"
);

const Select = ({ label }) => {
  const [stateValue, setStateValue] = useState("Abia");

  const states = NaijaStates.states();

  const statesLGA = NaijaStates.lgas(stateValue);

  return (
    <div className="flex gap-10 w-full">
      <div className={divClass}>
        <label className={labelClass}>Region</label>
        <select
          onChange={(e) => setStateValue(e.target.value)}
          className={selectClass}
        >
          <option value="">Please Select</option>
          {states?.map((state) => {
            return (
              <option key={state} value={state}>
                {state}
              </option>
            );
          })}
        </select>
      </div>

      <div className={divClass}>
        <label className={labelClass}>City</label>
        <select className={selectClass}>
          <option value="">Please Select</option>
          {statesLGA.lgas?.map((state) => {
            return (
              <option key={state} value={state}>
                {state}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
