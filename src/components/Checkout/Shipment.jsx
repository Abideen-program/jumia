import { useSelector } from "react-redux";
import ShipmentProduct from "./ShipmentProduct";

const Shipment = ({ onDelivery }) => {
  const delivery = onDelivery;

  const date = new Date();
  const newDate = date.getDate() + 3;

  const cartItems = useSelector((state) => state.cartItems.cartItems);
  return (
    <div className="px-4 my-3">
      <p className="text-xs font-medium">Shipments {cartItems.length}</p>

      <div className="border rounded-sm my-2">
        <div className="px-4 py-2 border-b">
          <p className="text-sm font-medium">{delivery}</p>
          <p className="text-[10px] font-light my-1">
            Delivery Scheduled on{" "}
            <span className="font-semibold">{newDate} June</span>
          </p>
        </div>

        <div>
          {cartItems?.map((item) => {
            return <ShipmentProduct key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shipment;
