import BulkPassButton from "./BulkPassButton";
import DayPassButton from "./DayPassButton";
import SpaceCardHeader from "./SpaceCardHeader";
import Thumbnail from "./Thumbnail";

const SpaceCard = ({ id }: { id: string }) => {
  return (
    <div className="w-full bg-white p-3 shadow-sm rounded-lg border border-[#EEE7E7] border-opacity-70 flex flex-col gap-4 sm:w-[370px]">
      <SpaceCardHeader id={id} />
      <Thumbnail id={id} />
      <div className="flex gap-3">
        <DayPassButton id={id} />
        <BulkPassButton id={id} />
      </div>
    </div>
  );
};

export default SpaceCard;
