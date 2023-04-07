import { Link, Title } from "../../custom";

interface MenuSidebarProps {
  href: string;
  title: string;
  icon: React.ReactNode;
}

export const MenuSidebar = ({ href, title, icon }: MenuSidebarProps) => {
  return (
    <Link href={href} className="flex gap-4 items-center">
      {icon}
      <Title>{title}</Title>
    </Link>
  );
};
