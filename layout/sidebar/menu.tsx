import { Link, Title } from "../../components/custom";

interface SidebarMenuProps {
  href: string;
  title: string;
  icon: React.ReactNode;
}

export const SidebarMenu = ({ href, title, icon }: SidebarMenuProps) => {
  return (
    <Link
      href={href}
      className="flex flex-nowrap gap-4 items-center p-3 rounded-full hover:bg-hover_primary"
    >
      {icon}
      <Title className="w-fit !font-normal" level={2}>
        {title}
      </Title>
    </Link>
  );
};
