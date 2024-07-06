import { Dispatch, SetStateAction } from "react";
import { ISpaceOverviewData } from ".";

export interface ISpaceOverviewContext {
  spaceOverviewData: ISpaceOverviewData[];
  setSpaceOverviewData: Dispatch<SetStateAction<ISpaceOverviewData[]>>;
}

export interface ISpaceDataMapper {
  [key: number]: { type: string; locationDistance: string };
}
