import { NextPage } from "next";
import { AppName } from "../components/shared";
import { PageHeader } from "../layout";
import { Tabs, Tab } from "../components/shared";
import { Following, AddTweet } from "../components/home";

const header = (
  <Tabs>
    <Tab name="For You">
      <AddTweet />
    </Tab>
    <Tab name="Following">
      <Following />
    </Tab>
  </Tabs>
);

const HomePage: NextPage = () => {
  return (
    <PageHeader header={header} title="Home">
      <AppName title="Home" />
    </PageHeader>
  );
};

export default HomePage;
