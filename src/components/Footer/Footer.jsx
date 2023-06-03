import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="py-4 px-[55px] bg-[#313133] text-white">
        <div className="h-[50px] w-[130px]">
          <img
            className="h-full object-contain "
            src="/images/footerLogo.png"
            alt=""
          />
        </div>

        <div className="flex flex-col">
          <h4 className="text-sm">NEW TO JUMIA</h4>
          <p className="text-[10px] my-3">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
        </div>

        <form>
          <div className="p-4 bg-white flex gap-3 items-center rounded-sm focus:border-[#ff9900]">
            <FaEnvelope className="text-[#A3A3A6]" />
            <input
              type="email"
              placeholder="Enter E-mail Address"
              className="focus:outline-0 w-full text-black"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
