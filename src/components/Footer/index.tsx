import { FOOTER_TEXT } from "../../Constant";

const Footer = () => {
  return (
    <div className="pt-3">
      <div className="p-3 bg-[#222E34] w-full flex items-center justify-center">
        <div className="text-[12px] leading-[16px] font-normal text-[#DDDDDD]">
          {FOOTER_TEXT}
        </div>
      </div>
    </div>
  );
};

export default Footer;
