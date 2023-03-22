import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { TwitterIcon } from "../icons";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="h-full w-full grid justify-center items-center ">
      <TwitterIcon width={72} height={72} />
    </div>
  );
};

export default Home;
