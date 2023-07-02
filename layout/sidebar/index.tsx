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
import { SidebarMenu } from "./menu";

interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="flex w-full h-full px-16">
      <div className="flex flex-col justify-self-auto">
        <Link
          href="/home"
          className="w-[50.4px] h-[50.4px] flex justify-center items-center cursor-pointer rounded-full hover:bg-hover_secondary"
        >
          <TwitterIcon width={32} height={32} />
        </Link>
        <div className="grid items-start">
          <SidebarMenu href="/home" title="Home" icon={<HomeIcon />} />
          <SidebarMenu href="#" title="Explore" icon={<SearchIcon />} />
          <SidebarMenu
            href="#"
            title="Notification"
            icon={<NotificationIcon />}
          />
          <SidebarMenu href="#" title="Message" icon={<MessageIcon />} />
          <SidebarMenu href="#" title="Bookmark" icon={<BookmarkIcon />} />
          <SidebarMenu href="#" title="Profile" icon={<ProfileIcon />} />
          <SidebarMenu href="#" title="More" icon={<MoreIcon />} />
        </div>
      </div>
      <main className="w-full h-full">{children}</main>
    </div>
  );
};
