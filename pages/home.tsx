import { NextPage } from "next";
import { AppName } from "../components/shared";
import { PageHeader } from "../layout";
import { Tabs, Tab } from "../components/shared";

const header = (
  <Tabs>
    <Tab name="For You">
      <h2>Tab one</h2>
    </Tab>
    <Tab name="Following">
      <h2>Tab Two</h2>
    </Tab>
  </Tabs>
);

const HomePage: NextPage = () => {
  return (
    <PageHeader header={header}>
      <AppName title="Home" />
    </PageHeader>
  );
};

export default HomePage;
