import SpaceOverviewContextProvider from "../../components/Context";
import CoWorkingFacilities from "../../components/CoWorkingFacilties";
import Header from "../../components/Header";
import IndroductionBodyHeader from "../../components/IntroductionBodyHeader";
import SpaceOverview from "../../components/SpaceOverview";

const Home = () => {
  return (
    <div className="font-inter bg-[#F9FAFF]">
      <Header />
      <IndroductionBodyHeader />
      <CoWorkingFacilities />
      <SpaceOverviewContextProvider>
        <SpaceOverview />
      </SpaceOverviewContextProvider>
    </div>
  );
};

export default Home;
