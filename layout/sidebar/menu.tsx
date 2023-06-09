import { Link, Title } from "../../components/custom";

interface MenuSidebarProps {
  href: string;
  title: string;
  icon: React.ReactNode;
}

export const MenuSidebar = ({ href, title, icon }: MenuSidebarProps) => {
  return (
    <Link
      href={href}
      className="flex flex-nowrap gap-4 items-center p-3 rounded-full hover:bg-[#0f14191a]"
    >
      {icon}
      <Title className="w-fit !font-normal" level={2}>
        {title}
      </Title>
    </Link>
  );
};
