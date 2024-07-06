import { ISectionHeader } from "../../interfaces";
import arrowIcon from "../../assets/icons/arrow.svg";
import { cn } from "../../ui/lib/utils";

const SectionHeader = ({ title, className = "" }: ISectionHeader) => {
  return (
    <div className={cn("flex items-center justify-between pt-4", className)}>
      <h3 className="text-2xl leading-relaxed font-bold text-text-color-main sm:text-4xl">
        {title}
      </h3>
      <img
        className="cursor-pointer sm:hidden"
        src={arrowIcon}
        alt="Arrow-right"
      ></img>
    </div>
  );
};

export default SectionHeader;
