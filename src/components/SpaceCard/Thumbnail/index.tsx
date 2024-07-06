import platinum_indranagar from "../../../assets/platinum_indranagar.jpg";
import hsr_27th_main from "../../../assets/hsr_27th_main.jpg";
import hsr_campus from "../../../assets/hsr_campus.jpg";
import silkboard from "../../../assets/silkboard.jpg";
import whitefield from "../../../assets/whitefield.jpg";
import honeykomb from "../../../assets/icons/honeykomb.svg";
import workspace from "../../../assets/icons/workspace.svg";
import campus from "../../../assets/icons/campus.svg";
import premium from "../../../assets/icons/premium.svg";
import platinum from "../../../assets/icons/platinum.svg";
import { SpaceOverviewContext } from "../../Context";
import { useContext } from "react";

const imageMapper: { [key: string]: string } = {
  platinum_indranagar,
  hsr_27th_main,
  hsr_campus,
  silkboard,
  whitefield,
};
const iconMapper: { [key: string]: string } = {
  honeykomb,
  workspace,
  campus,
  premium,
  platinum,
};

const Thumbnail = ({ id }: { id: string }) => {
  const { spaceOverviewData, setSpaceOverviewData } =
    useContext(SpaceOverviewContext);

  const activeSpaceOverviewData = spaceOverviewData.find(
    (data) => data.id === id
  );

  return (
    <div className="w-full relative">
      <img
        src={imageMapper[`${activeSpaceOverviewData?.imageKey}`]}
        alt={`thumbnail-image-${activeSpaceOverviewData?.imageKey}`}
        className="w-full h-[175px] object-cover rounded-md sm:h-[202px]"
      ></img>
      <div
        className="absolute top-2 left-2 bg-gradient-to-r from-[#263238] to-[#2F4B59] 
      p-2 flex items-center justify-center gap-1.5 border border-[#FFBB00] border-opacity-50 shadow rounded-md w-max"
      >
        <div className="w-4 h-4">
          <img
            src={iconMapper[`${activeSpaceOverviewData?.type?.toLowerCase()}`]}
            alt={`thumbnail-icon-${activeSpaceOverviewData?.type?.toLowerCase()}`}
          ></img>
        </div>
        <div className="text-[12px] leading-[14px] font-medium tracking-[1.8px] text-background-logo-primary2 sm:text-[14px] sm:leading-[16px] sm:tracking-[2px]">
          {activeSpaceOverviewData?.type}
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
