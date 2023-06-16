import { FaCheckCircle, FaTruck } from "react-icons/all";
import { useSelector } from "react-redux";

const Delivery = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  console.log(cartItems);
  return (
    <div>
      <div className="bg-white mt-4 pb-4">
        <div className="flex items-center px-4 py-3 gap-2 border-b">
          <FaCheckCircle className="text-[#7A7A7F]" />
          <p className="text-[13px] md:text-sm font-medium">2. DELIVERY</p>
        </div>

        {/* DELIVERY TYPE SECTION */}

        <div className="px-4 py-3 border border-red-500">
          {/* <form> */}
          <div className="flex flex-col pb-3 border-b">
            <div className="flex items-start gap-2">
              <input type="radio" name="delivery" value="Pick-up Station" />
              <div className="-mt-1">
                <p className="text-sm font-medium">Pick-up Station</p>
                <p className="text-[10px] font-light mt-1 mb-2">
                  Delivery Scheduled on{" "}
                  <span className="font-semibold">19 June</span>
                </p>
              </div>
            </div>

            <div className="border rounded-sm">
              <p className="text-xs font-medium px-3 py-2 border-b">
                Pickup Station
              </p>
              <div className="text-[11px] px-3 py-2">
                <p>PDC Abeokuta Adigbe Station</p>
                <p className="text-[#7A7A7F]">
                  4b, Car Wash, Opako Adigbe, Abeokuta, Beside Saquad Filling
                  Station | Ogun - ABEOKUTA-ADIGBE
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="mt-4 flex items-start gap-2">
              <input type="radio" name="delivery" value="Door Delivery" />
              <div className="-mt-1">
                <p className="text-sm font-medium">Door Delivery</p>
                <p className="text-[10px] font-light my-1">
                  Delivery Scheduled on{" "}
                  <span className="font-semibold">19 June</span>
                </p>
              </div>
            </div>
            <FaTruck className="text-[#ff9900] text-xl" />
          </div>
          {/* </form> */}
        </div>

        {/* SHIPMENT SECTION */}

        <div className="px-4 my-3">
          <p className="text-xs font-medium">Shipment</p>

          <div className="border rounded-sm my-2">
            <div className="px-4 py-2 border-b">
              <p className="text-sm font-medium">Pick-up Station</p>
              <p className="text-[10px] font-light my-1">
                Delivery Scheduled on{" "}
                <span className="font-semibold">19 June</span>
              </p>
            </div>

            <div>
              {cartItems?.map((item) => {
                return (
                  <div key={item.id} className="px-2 mt-2 border flex items-center">
                    <img
                      src={item.imageURL}
                      alt="product"
                      className="h-16 w-16"
                    />
                    <div className="flex flex-col">
                      <p className="text-xs">{item.title}</p>
                      <p className="text-xs">QTY: {item.quantity}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
