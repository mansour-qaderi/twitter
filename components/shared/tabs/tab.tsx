import { Title } from "../../custom";

interface TabProps {
  children: React.ReactNode;
  name: string;
}

export const Tab = ({ children, name }: TabProps) => {
  return <div className="w-full h-full">{children}</div>;
};
