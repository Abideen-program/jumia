import { FaCheckCircle } from "react-icons/all";

const Payment = () => {
  return (
    <div>
      <div className="bg-white mt-4">
        <div className="flex items-center px-4 py-3 gap-2 border-b">
          <FaCheckCircle className="text-[#7A7A7F]" />
          <p className="text-[13px] md:text-sm font-medium">
            3. PAYMENT METHOD
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
