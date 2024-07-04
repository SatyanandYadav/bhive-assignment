import { BOOKING_TITLE } from "../../Constant";
import HomePageBackground from "../../assets/page_assets/homePageBackground.png";
import HomePageVideo from "../../assets/page_assets/homePageVideo.mp4";
import HexagonSVG from "../../assets/page_assets/Hexagon.svg";
import HexagonImage from "../../assets/page_assets/Hexagon.png";

const IndroductionBodyHeader = () => {
  return (
    <div className=" relative h-[80%] overflow-hidden">
      <div className="w-[8.5%] hidden sm:block sm:absolute sm:top-[-11.5%] sm:left-[23.6%] h-[8.5%] z-[-1]">
        <img src={HexagonImage}></img>
      </div>
      <div className="w-[60%] hidden sm:block sm:absolute sm:top-[-23%] sm:left-0 sm:h-[80%] md:h-[90%] xl:h-[125%] lg:h-[100%] z-[-1]">
        <img
          src={HomePageBackground}
          className="h-full w-full opacity-30 object-cover"
        ></img>
      </div>
      <video
        className="sm:absolute sm:top-8 sm:left-[60%] sm:h-[79%] sm:w-[40%]"
        autoPlay
        loop
        muted
      >
        <source src={HomePageVideo} type="video/mp4" />
      </video>
      <div className="relative font-inter text-xl leading-tight sm:text-[58px] sm:leading-[70px] text-[#263238] font-bold sm:w-[60%] pl-5 pt-5 sm:pl-32 sm:pt-24">
        {BOOKING_TITLE.label}
        <p className="inline text-[#FFBB00]">{BOOKING_TITLE.value}</p>
      </div>
      <div className=" w-[95%] h-[95%] sm:w-[100%] sm:h-[100%] absolute top-[-12%] left-[15%] sm:top-[-7em] sm:left-[55%] md:top-[-8em] md:left-[60%] lg:top-[-9em] lg:left-[65%] xl:top-[-9.5em] xl:left-[68.5%]">
        <img
          src={HexagonSVG}
          width={"38%"}
          className="w-[100%] sm:w-[38%] object-cover"
        ></img>
      </div>
    </div>
  );
};

export default IndroductionBodyHeader;
