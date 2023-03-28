import Link, { LinkProps } from "next/link";

interface NextLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const NextLink = ({ ...props }: NextLinkProps) => {
  return <Link {...props}> {props.children} </Link>;
};

export { NextLink as Link };
