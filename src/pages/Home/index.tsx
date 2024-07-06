import BhiveAppDetails from "../../components/BhiveAppDetails";
import SpaceOverviewContextProvider from "../../components/Context";
import CoWorkingFacilities from "../../components/CoWorkingFacilties";
import Footer from "../../components/Footer";
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
      <BhiveAppDetails />
      <Footer />
    </div>
  );
};

export default Home;
