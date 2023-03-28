import { NextPage } from "next";
import { AppName } from "../components/shared";
import { Sidebar } from "../components/layout";

const HomePage: NextPage = () => {
  return (
    <Sidebar>
      <AppName title="Home" />
    </Sidebar>
  );
};

export default HomePage;
