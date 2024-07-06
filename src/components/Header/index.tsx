import BhiveIcon from "../../assets/page_assets/bhiveIcon.png";
import { MdCall } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-white sm:px-28 sm:py-6 flex items-center justify-between py-4 px-5 shadow-sm sticky z-30">
      <img src={BhiveIcon} className="sm:h-10 h-8"></img>
      <div className="sm:p-2.5 border border-[#F2B304] rounded shadow-sm p-1.5">
        <MdCall size={24} className="text-[#FFBB00]" />
      </div>
    </div>
  );
};

export default Header;
