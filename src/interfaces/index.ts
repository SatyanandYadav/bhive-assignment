export interface IBookingTitle {
  label: string;
  value: string;
}

export interface IHexagon {
  backgroundColor: string;
  width: string;
  height: string;
  className?: string;
}

export interface ICoWorkingFacility {
  key: string;
  label: string;
}

export interface ISectionHeader {
  title: string;
  className?: string;
}

export interface ISpaceOverviewData {
  id: string;
  name: string;
  type: string;
  locationDistance: string;
  imageKey: string;
  dayPassPrice: number;
  bulkPassPrice: number;
  bulkPassDiscount: number;
}
