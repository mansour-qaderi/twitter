import Head from "next/head";

interface AppNameProps {
  title: string;
}

export const AppName = ({ title }: AppNameProps) => {
  return (
    <Head>
      <title>{title} / Twitter</title>
    </Head>
  );
};
