import { NextPage } from "next";
import { AppName } from "../components/shared";

const HomePage: NextPage = () => {
  return (
    <div>
      <AppName title="Home" />
      <h2>HomePage</h2>
    </div>
  );
};

export default HomePage;
