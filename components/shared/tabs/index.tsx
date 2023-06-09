import React, { useEffect, useState } from "react";

interface TabsProps {
  children: React.ReactNode;
  defaultActiveTab?: string;
}

export const Tabs = ({ children, defaultActiveTab }: TabsProps) => {
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
    <div className="w-full">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {tabHeader?.map((item) => {
            const changeTab = () => {
              setActive(item);
            };
            return (
              <li
                onClick={changeTab}
                key={item}
                className="mr-2 cursor-pointer"
              >
                <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  {item}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {Object.keys(childContent)?.map((key: any) => {
        if (key === active) {
          return (
            <div key={key} className="tab-child">
              {childContent?.[key]}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
