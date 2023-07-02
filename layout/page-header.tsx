import { ReactNode } from "react";
import { Title } from "../components/custom";

interface PageHeaderProps {
  children: ReactNode;
  title?: string;
  header?: ReactNode;
}

export const PageHeader = ({ children, header, title }: PageHeaderProps) => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full bg-window_primary backdrop-blur-md">
        {title && (
          <div className="py-3 px-4">
            <Title level={3} className="!font-semibold">
              {title}
            </Title>
          </div>
        )}
        {header}
      </div>
      {children}
    </div>
  );
};
