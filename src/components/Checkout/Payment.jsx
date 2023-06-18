import { FaCheckCircle } from "react-icons/all";

const Payment = () => {
  return (
    <div>
      <div className="bg-white mt-4 pb-3">
        <div className="flex items-center px-4 py-3 gap-2 border-b">
          <FaCheckCircle className="text-[#7A7A7F]" />
          <p className="text-[13px] md:text-sm font-medium">
            3. PAYMENT METHOD
          </p>
        </div>

        <p className="px-4 text-lg my-3">Cards</p>

        <div className="px-4 flex items-start gap-2">
          <input type="radio" value="cards" />
          <div className="flex flex-col -mt-1">
            <p className="text-sm font-medium">
              Pay with Cards, Bank Transfer or USSD{" "}
            </p>
            <p className="text-[10px]">
              You will be redirected to our secure checkout page
            </p>
          </div>
        </div>

        <div className="px-4 my-3">
          <div className="border rounded-md">
            <div className="border-b p-2">
              <p className="text-sm bg-[#F1F1F2] p-1 rounded-sm w-1/2 text-[#264996] font-semibold">
                Jumia Pay Balance ₦0.00
              </p>
            </div>
            <div className="p-2 flex flex-col gap-3">
              <p className="text-[10px]">
                - Ensure your payment information is up to date and that you
                have the necessary funds.
              </p>

              <p className="text-[10px]">
                - For bank transfer, kindly ensure you transfer the exact amount
                displayed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
