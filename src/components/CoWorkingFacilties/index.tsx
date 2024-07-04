import arrowIcon from "../../assets/icons/arrow.svg";
import {
  CO_WORKING_FACILITIES,
  CO_WORKING_FACILITIES_TITLE,
} from "../../Constant";
import FacilityCard from "../FacilityCard";

const CoWorkingFacilities = () => {
  return (
    <div className="p-5 sm:pl-32">
      <div className="flex items-center justify-between pt-4">
        <h3 className="text-2xl leading-relaxed font-bold text-text-color-main sm:text-4xl">
          {CO_WORKING_FACILITIES_TITLE}
        </h3>
        <img
          className="cursor-pointer sm:hidden"
          src={arrowIcon}
          alt="Arrow-right"
        ></img>
      </div>
      <div className="flex justify-center items-center gap-3 flex-wrap pt-4 pb-4 sm:hidden">
        {CO_WORKING_FACILITIES.map((data) => (
          <FacilityCard key={data.key} iconKey={data.key} label={data.label} />
        ))}
      </div>
      <div className="hidden sm:block pt-8 pb-8">
        <table className="border-collapse">
          <tr>
            {CO_WORKING_FACILITIES.filter((_, key) => key < 4).map((data) => (
              <td
                key={data.key}
                className="border-b border-r border-[#eaeaea99] last:border-r-0"
              >
                <FacilityCard iconKey={data.key} label={data.label} />
              </td>
            ))}
          </tr>
          <tr>
            {CO_WORKING_FACILITIES.filter((_, key) => key > 3).map((data) => (
              <td
                key={data.key}
                className="border-r border-[#eaeaea99] last:border-r-0"
              >
                <FacilityCard iconKey={data.key} label={data.label} />
              </td>
            ))}
          </tr>
        </table>
      </div>

      {/* <div className="hidden sm:block">
        <table className="border-collapse">
          <div>
            {CO_WORKING_FACILITIES.filter((_, key) => key < 4).map((data) => (
              <div
                key={data.key}
                className="relative before:content-[''] before:absolute before:w-full before:h-[1px] before:bottom-0 before:mx-2 before:bg-[#ebebeb99] "
              >
                <FacilityCard iconKey={data.key} label={data.label} />
              </div>
            ))}
          </div>
          <hr className="my-12 w-full h-[1px] border-t-0 bg-[#ebebeb99]" />
          <div>
            {CO_WORKING_FACILITIES.filter((_, key) => key > 3).map((data) => (
              <div key={data.key}>
                <FacilityCard iconKey={data.key} label={data.label} />
              </div>
            ))}
          </div>
        </table>
      </div> */}
    </div>
  );
};

export default CoWorkingFacilities;
