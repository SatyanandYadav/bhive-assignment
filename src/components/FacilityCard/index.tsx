import community_events from "../../assets/icons/cummunity_events.svg";
import gym_facilities from "../../assets/icons/gym_facilities.svg";
import high_speed_wiFi from "../../assets/icons/high_speed_wiFi.svg";
import cafe_and_tea_bar from "../../assets/icons/cafe_and_tea_bar.svg";
import affordable from "../../assets/icons/affordable.svg";
import comfort_lounges from "../../assets/icons/comfort_lounges.svg";
import quick_booking from "../../assets/icons/quick_booking.svg";
import sports_area from "../../assets/icons/sports_area.svg";

interface IFacilityCard {
  label: string;
  iconKey: string;
}

const iconMapper: { [key: string]: string } = {
  community_events,
  gym_facilities,
  high_speed_wiFi,
  cafe_and_tea_bar,
  affordable,
  comfort_lounges,
  quick_booking,
  sports_area,
};

const FacilityCard = ({ label, iconKey }: IFacilityCard) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-white shadow-sm w-[154px] h-20 sm:flex-row sm:rounded-none sm:bg-transparent sm:shadow-none sm:w-[20vw] sm:pl-8 sm:justify-start">
      <img src={iconMapper[iconKey]} className="h-7 w-7 sm:h-8 sm:w-8"></img>
      <div className="text-sm font-medium text-text-color-main sm:text-lg">
        {label}
      </div>
    </div>
  );
};

export default FacilityCard;
