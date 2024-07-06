import { useContext } from "react";
import {
  SPACE_OVERVIEW_TITLE_LARGE_SCREEN,
  SPACE_OVERVIEW_TITLE_SMALL_SCREEN,
} from "../../Constant";
import SectionHeader from "../../Resuables/SectionHeader";
import { SpaceOverviewContext } from "../Context";
import SpaceCard from "../SpaceCard";

const SpaceOverview = () => {
  const { spaceOverviewData, setSpaceOverviewData } =
    useContext(SpaceOverviewContext);

  return (
    <div className="p-5 pt-0 sm:pl-32">
      <SectionHeader
        title={SPACE_OVERVIEW_TITLE_SMALL_SCREEN}
        className="sm:hidden"
      />
      <SectionHeader
        title={SPACE_OVERVIEW_TITLE_LARGE_SCREEN}
        className="hidden sm:block"
      />
      <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:flex-wrap sm:pt-10 sm:gap-11">
        {spaceOverviewData.map((data) => (
          <SpaceCard key={data.id} id={data.id} />
        ))}
      </div>
    </div>
  );
};

export default SpaceOverview;
