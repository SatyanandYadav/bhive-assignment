import { BHIVE_APP_DETAILS_TITLE } from "../../Constant";
import SectionHeader from "../../Resuables/SectionHeader";
import bhiveAppImage from "../../assets/page_assets/bhive_app.png";
import googlePlayButton from "../../assets/page_assets/googlePlayButton.png";
import appStoreButton from "../../assets/page_assets/appStoreButton.png";

const BhiveAppDetails = () => {
  return (
    <div className="p-5 pt-2 sm:pl-32">
      <SectionHeader title={BHIVE_APP_DETAILS_TITLE} className="sm:hidden" />
      <div className="w-full bg-white p-3 pt-10 shadow-sm rounded-lg border border-[#EEE7E7] border-opacity-80 flex flex-col gap-3">
        <img src={bhiveAppImage} className=""></img>
        <div className="flex items-center justify-between flex-wrap">
          <img src={googlePlayButton}></img>
          <img src={appStoreButton}></img>
        </div>
      </div>
    </div>
  );
};

export default BhiveAppDetails;
