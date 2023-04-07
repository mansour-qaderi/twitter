import classNames from "classnames";

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
}

export const Title = ({ level, className, children }: TitleProps) => {
  const classes = classNames(
    {
      "text-2xl font-bold": level === 1,
      "text-xl font-semibold": level === 2,
      "text-lg font-medium": level === 3,
      "text-base font-normal": true || level === 4,
      "text-sm font-light": level === 5,
      "text-xs font-light": level === 6,
    },
    className
  );

  return <div className={classes}>{children}</div>;
};
