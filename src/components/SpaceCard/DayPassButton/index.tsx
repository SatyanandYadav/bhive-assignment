import { useContext } from "react";
import arrowLeft from "../../../assets/icons/arrow_left.svg";
import { SpaceOverviewContext } from "../../Context";

const DayPassButton = ({ id }: { id: string }) => {
  const { spaceOverviewData, setSpaceOverviewData } =
    useContext(SpaceOverviewContext);

  const activeSpaceOverviewData = spaceOverviewData.find(
    (data) => data.id === id
  );

  return (
    <div className="w-1/2 p-2 bg-secondary-button-background border border-[#E5DDDD] rounded-md flex items-center justify-between sm:px-[10px] sm:py-[9px]">
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <div className="text-[12px] text-text-color-secondary leading-[14px] font-medium sm:text-[14px] sm:leading-[16px]">
          Day Pass
        </div>
        <div className="text-[18px] leading-[22px] font-semibold text-text-color-main sm:text-[20px] sm:leading-[24px]">
          &#8377; {activeSpaceOverviewData?.dayPassPrice}
          <span className="text-[11px] text-text-color-secondary leading-[13px] font-medium sm:text-[12px] sm:leading-[14px]">
            /Day
          </span>
        </div>
      </div>
      <div className="flex">
        <img src={arrowLeft} className="opacity-40"></img>
        <img src={arrowLeft} className="opacity-60"></img>
        <img src={arrowLeft}></img>
      </div>
    </div>
  );
};

export default DayPassButton;
