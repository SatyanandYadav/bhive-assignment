import arrowIcon from "../../assets/icons/arrow.svg";
import {
  CO_WORKING_FACILITIES,
  CO_WORKING_FACILITIES_TITLE,
} from "../../Constant";
import SectionHeader from "../../Resuables/SectionHeader";
import FacilityCard from "../FacilityCard";

const CoWorkingFacilities = () => {
  return (
    <div className="p-5 sm:pl-32">
      <SectionHeader title={CO_WORKING_FACILITIES_TITLE} />
      <div className="flex justify-center items-center gap-3 flex-wrap pt-4 pb-4 sm:hidden">
        {CO_WORKING_FACILITIES.map((data) => (
          <FacilityCard key={data.key} iconKey={data.key} label={data.label} />
        ))}
      </div>
      <div className="hidden sm:block pt-8 pb-8">
        <table className="border-collapse">
          <tbody>
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
          </tbody>
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
