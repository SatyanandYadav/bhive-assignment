import { IBookingTitle, ICoWorkingFacility } from "../interfaces";

export const BOOKING_TITLE: IBookingTitle = {
  label: "Host your meeting with world-class amenities. Starting at ",
  value: "₹199/-!",
};

export const CO_WORKING_FACILITIES_TITLE: string = "Why Choose us?";

export const CO_WORKING_FACILITIES: ICoWorkingFacility[] = [
  {
    key: "community_events",
    label: "Community Events",
  },
  {
    key: "gym_facilities",
    label: "Gym Facilities",
  },
  {
    key: "high_speed_wiFi",
    label: "High-Speed WiFi",
  },
  {
    key: "cafe_and_tea_bar",
    label: "Cafe & Tea Bar",
  },
  {
    key: "affordable",
    label: "Affordable",
  },
  {
    key: "comfort_lounges",
    label: "Comfort Lounges",
  },
  {
    key: "quick_booking",
    label: "Quick Booking",
  },
  {
    key: "sports_area",
    label: "Sports Area",
  },
];

export const SPACE_OVERVIEW_TITLE_SMALL_SCREEN: string = "Our Spaces";

export const SPACE_OVERVIEW_TITLE_LARGE_SCREEN: string = "Our Space Overview";
