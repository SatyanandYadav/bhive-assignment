import {
  BHIVE_APP_DETAILS_DESCRIPTION,
  BHIVE_APP_DETAILS_TITLE,
} from "../../Constant";
import SectionHeader from "../../Resuables/SectionHeader";
import bhiveAppImage from "../../assets/page_assets/bhive_app.png";
import googlePlayButton from "../../assets/page_assets/googlePlayButton.png";
import appStoreButton from "../../assets/page_assets/appStoreButton.png";

const BhiveAppDetails = () => {
  return (
    <div className="p-5 pt-2 sm:pl-32 flex flex-col gap-4 sm:gap-40 lg:gap-56">
      <SectionHeader title={BHIVE_APP_DETAILS_TITLE} className="sm:hidden" />
      <div className={"hidden sm:flex pt-4"}>
        <h3 className="text-4xl leading-7 font-bold text-[#605F5F] pt-10 pl-12">
          {BHIVE_APP_DETAILS_TITLE}
        </h3>
      </div>
      <div className="relative hidden sm:flex flex-col items-end justify-center gap-10 pb-[27px] pr-10 pt-16 w-full bg-white p-3 shadow-sm rounded-lg border border-[#EEE7E7] border-opacity-70">
        <div className="w-1/2 text-xl font-medium text-[#605F5F]">{BHIVE_APP_DETAILS_DESCRIPTION}</div>
        <div className="w-1/2 flex items-center gap-6">
          <img src={googlePlayButton}></img>
          <img src={appStoreButton}></img>
        </div>
        <img
          src={bhiveAppImage}
          className="absolute left-4 bottom-0 sm:[350px] sm:h-[340px] lg:w-[400px] lg:h-[390px]"
        ></img>
      </div>
      <div className="sm:hidden w-full bg-white p-3 pt-10 shadow-sm rounded-lg border border-[#EEE7E7] border-opacity-80 flex flex-col gap-3">
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
