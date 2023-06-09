import {
  BookmarkIcon,
  ExploreIcon,
  HomeIcon,
  MessageIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
  SearchIcon,
  TwitterIcon,
} from "../../icons";
import { Link } from "../../components/custom";
import { MenuSidebar } from "./menu";

interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="flex w-full h-full px-16">
      <div className="flex flex-col justify-self-auto">
        <Link
          href="/home"
          className="w-[50.4px] h-[50.4px] flex justify-center items-center cursor-pointer rounded-full hover:bg-[#e6f6fe]"
        >
          <TwitterIcon width={32} height={32} />
        </Link>
        <div className="grid items-start">
          <MenuSidebar href="/home" title="Home" icon={<HomeIcon />} />
          <MenuSidebar href="#" title="Explore" icon={<SearchIcon />} />
          <MenuSidebar
            href="#"
            title="Notification"
            icon={<NotificationIcon />}
          />
          <MenuSidebar href="#" title="Message" icon={<MessageIcon />} />
          <MenuSidebar href="#" title="Bookmark" icon={<BookmarkIcon />} />
          <MenuSidebar href="#" title="Profile" icon={<ProfileIcon />} />
          <MenuSidebar href="#" title="More" icon={<MoreIcon />} />
        </div>
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
};
