import { useMediaQuery } from "react-responsive";
import Banner from "../components/Banner";
import Landing from "../components/Landing";
import DefaultHeader from "../components/DefaultBanner";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isMobile ? <DefaultHeader /> : <Banner />}
      <Landing />
    </div>
  );
};

export default Home;
