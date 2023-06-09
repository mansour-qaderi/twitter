import { NextPage } from "next";
import { AppName } from "../components/shared";
import { PageHeader } from "../layout";
import { Tabs, Tab } from "../components/shared";

const HomePage: NextPage = () => {
  return (
    <PageHeader>
      <AppName title="Home" />
      <Tabs>
        <Tab key="first" name="first">
          <h2>Tab one</h2>
        </Tab>
        <Tab key="second" name="second">
          <h2>Tab Two</h2>
        </Tab>
        <Tab key="third" name="third">
          <h2>Tab third</h2>
        </Tab>
        <Tab key="fourth" name="fourth">
          <h2>Tab Two</h2>
        </Tab>
      </Tabs>
    </PageHeader>
  );
};

export default HomePage;
