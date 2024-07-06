import { createContext, ReactNode, useEffect, useState } from "react";
import {
  ISpaceDataMapper,
  ISpaceOverviewContext,
} from "../../interfaces/context";
import spaceOverviewMockData from "../../data/data.json";
import { ISpaceOverviewData } from "../../interfaces";

const spaceDataMapper: ISpaceDataMapper = {
  0: { type: "Platinum", locationDistance: "6 kms" },
  1: { type: "Premium", locationDistance: "4 kms" },
  2: { type: "Honeykomb", locationDistance: "8 kms" },
  3: { type: "Campus", locationDistance: "2 kms" },
  4: { type: "Workspace", locationDistance: "6 kms" },
};

export const SpaceOverviewContext = createContext({} as ISpaceOverviewContext);

const SpaceOverviewContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [spaceOverviewData, setSpaceOverviewData] = useState<
    ISpaceOverviewData[]
  >([]);

  useEffect(() => {
    const updatedSpaceOverviewData: ISpaceOverviewData[] = [];
    spaceOverviewMockData.map((spaceOverviewData, index) => {
      const spaceData: ISpaceOverviewData = {
        id: spaceOverviewData.id,
        name: spaceOverviewData.name,
        type: spaceDataMapper[index].type,
        locationDistance: spaceDataMapper[index].locationDistance,
        imageKey: spaceOverviewData.images[0].split("/")[1].split(".")[0],
        dayPassPrice: spaceOverviewData.day_pass_price,
        bulkPassDiscount:
          spaceOverviewData.day_pass_discounts_percentage[10].value,
        bulkPassPrice: (spaceOverviewData.day_pass_price - 9) * 10,
      };
      updatedSpaceOverviewData.push(spaceData);
    });
    setSpaceOverviewData(updatedSpaceOverviewData);
  }, []);

  return (
    <SpaceOverviewContext.Provider
      value={{ spaceOverviewData, setSpaceOverviewData }}
    >
      {children}
    </SpaceOverviewContext.Provider>
  );
};

export default SpaceOverviewContextProvider;
