import React, { CSSProperties, useEffect, useState } from "react";
import { Text } from "../../custom";

interface TabsProps {
  children: React.ReactNode;
  defaultActiveTab?: string;
}

export const Tabs = ({ children }: TabsProps) => {
  const [tabHeader, setTabHeader] = useState<any[]>([]);
  const [childContent, setChildContent] = useState<any>({});
  const [active, setActive] = useState("");

  useEffect(() => {
    const headers: any[] = [];
    const childCnt: any = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name } = element.props;
      headers.push(name);
      childCnt[name] = element.props.children;
    });

    setTabHeader(headers);
    setActive(headers[0]);
    setChildContent({ ...childCnt });
  }, []);

  return (
    <>
      <div className="font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap w-full justify-between border-b border-border_primary">
          {tabHeader?.map((item) => {
            const changeTab = () => {
              setActive(item);
            };
            const isActiveTab = item === active;

            return (
              <li
                onClick={changeTab}
                key={item}
                className={`cursor-pointer hover:bg-hover_primary ${
                  isActiveTab ? "text-[#000]" : "text-gray_primary"
                }`}
                style={styles.tab(tabHeader?.length ?? 0)}
              >
                <div className="inline-block p-4 relative">
                  <Text
                    className={`!font-medium ${
                      isActiveTab ? "text-[#000]" : "text-gray_primary"
                    }`}
                  >
                    {item}
                  </Text>
                  {isActiveTab && (
                    <div className="w-full h-1 bg-blue_primary rounded-sm absolute bottom-0 left-0" />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {Object.keys(childContent)?.map((key: any) => {
        if (key === active) {
          return (
            <div key={key} className="h-full w-full">
              {childContent?.[key]}
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

interface StylesProps {
  tab: (numberOfTab: number) => CSSProperties;
}

const styles: StylesProps = {
  tab: (numberOfTab) => ({
    width: `calc(100% / ${numberOfTab})`,
  }),
};
