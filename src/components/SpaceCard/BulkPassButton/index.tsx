import { useContext } from "react";
import arrowLeft from "../../../assets/icons/arrow_left.svg";
import { SpaceOverviewContext } from "../../Context";

const BulkPassButton = ({ id }: { id: string }) => {
  const { spaceOverviewData, setSpaceOverviewData } =
    useContext(SpaceOverviewContext);

  const activeSpaceOverviewData = spaceOverviewData.find(
    (data) => data.id === id
  );

  return (
    <div className="relative w-1/2 p-2 bg-primary-button-background border border-primary-button-border shadow-sm rounded-md flex items-center justify-between sm:px-[10px] sm:py-[9px]">
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <div className="text-[12px] text-[#514D2D] leading-[14px] font-medium sm:text-[14px] sm:leading-[16px]">
          Bulk Pass
        </div>
        <div className="text-[18px] leading-[22px] font-semibold text-text-color-main sm:text-[20px] sm:leading-[24px]">
          &#8377; {activeSpaceOverviewData?.bulkPassPrice}
          <span className="text-[11px] text-[#263236] text-opacity-80 leading-[13px] font-medium sm:text-[12px] sm:leading-[14px]">
            /10 Day
          </span>
        </div>
      </div>
      <div className="flex">
        <img src={arrowLeft} className="opacity-40"></img>
        <img src={arrowLeft} className="opacity-60"></img>
        <img src={arrowLeft}></img>
      </div>
      <div className=" absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-text-color-main rounded-[3px] pl-[4px] pr-[5px] py-[3px] w-max h-max sm:py-1 sm:px-[6px]">
        <div className="text-[8px] leading-[10px] font-medium text-[#FFFDF7] sm:text-[9px]x">
          {activeSpaceOverviewData?.bulkPassDiscount}% Discount
        </div>
      </div>
    </div>
  );
};

export default BulkPassButton;
