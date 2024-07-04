import CoWorkingFacilities from "../../components/CoWorkingFacilties";
import Header from "../../components/Header";
import IndroductionBodyHeader from "../../components/IntroductionBodyHeader";

const Home = () => {
  return (
    <div className="font-inter bg-[#F9FAFF]">
      <Header />
      <IndroductionBodyHeader />
      <CoWorkingFacilities />
    </div>
  );
};

export default Home;
