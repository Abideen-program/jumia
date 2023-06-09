import { FaCheckCircle } from "react-icons/all";
import Input from "./Input";

const Form = () => {
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

          <div className="my-4">
            <Input />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
