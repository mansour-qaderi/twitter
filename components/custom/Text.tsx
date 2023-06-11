import classNames from "classnames";

interface TextProps {
  size?: "sm" | "base" | "lg";
  variant?: "gray" | "white" | "dark";
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
}

export const Text = ({
  size = "sm",
  variant = "gray",
  as = "p",
  className,
  children,
}: TextProps) => {
  const Tag = as;

  const sizes = {
    sm: "font-normal text-sm leading-normal",
    base: "font-medium text-base leading-normal",
    lg: "font-semibold text-lg md:text-2xl leading-relaxed",
  };

  const variants = {
    gray: "text-gray-600",
    white: "text-white",
    dark: "text-gray-900",
  };

  const textClassName = classNames([
    { [sizes[size]]: size },
    {
      [variants[variant]]: variant,
    },
    className,
  ]);

  return <Tag className={textClassName}>{children}</Tag>;
};
