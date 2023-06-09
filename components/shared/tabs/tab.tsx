import { Title } from "../../custom";

interface TabProps {
  children: React.ReactNode;
  name: string;
  key: string;
}

export const Tab = ({ children, name, key }: TabProps) => {
  return (
    <div className="tab" key={key}>
      {children}
    </div>
  );
};
