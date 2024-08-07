import { useContext } from "react";
import locationIcon from "../../../assets/icons/location.svg";
import { SpaceOverviewContext } from "../../Context";

const SpaceCardHeader = ({ id }: { id: string }) => {
  const { spaceOverviewData, setSpaceOverviewData } =
    useContext(SpaceOverviewContext);

  const activeSpaceOverviewData = spaceOverviewData.find(
    (data) => data.id === id
  );

  return (
    <div className="pt-1 flex items-center justify-between">
      <div className="text-lg font-semibold text-text-color-main w-[70%] sm:text-[20px] sm:leading-6">
        {activeSpaceOverviewData?.name}
      </div>
      <div className="w-11 h-11 bg-secondary-button-background rounded-md border border-[#EEE7E7] flex flex-col items-center justify-center gap-2 sm:w-[52px] sm:h-[52px]">
        <img src={locationIcon} alt="location-icon" className="w-4 h-4 sm:w-[18px] sm:h-[18px]"></img>
        <p className="text-[8px] leading-[9px] text-[#263238] text-opacity-50 sm:text-[9px]">
          {activeSpaceOverviewData?.locationDistance}
        </p>
      </div>
    </div>
  );
};

export default SpaceCardHeader;
