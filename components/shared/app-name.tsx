import Head from "next/head";

interface AppNameProps {
  title?: string;
}

export const AppName = ({ title }: AppNameProps) => {
  return (
    <Head>
      <title>{title ? `${title} / Twitter` : "Twitter"}</title>
    </Head>
  );
};
