import {
  BookmarkIcon,
  ExploreIcon,
  HomeIcon,
  MessageIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
  TwitterIcon,
} from "../../icons";
import { Link } from "../custom";

interface SidebarProps {
  children: React.ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="flex w-full h-full px-16">
      <div className="flex flex-col gap-4 justify-self-auto">
        <Link
          href="/home"
          className="w-[50.4px] h-[50.4px] flex justify-center items-center cursor-pointer rounded-full hover:bg-[#e6f6fe]"
        >
          <TwitterIcon width={32} height={32} />
        </Link>
        <div className="grid items-start gap-4">
          <Link href="/home">
            <HomeIcon />
          </Link>
          <Link href="#">
            <ExploreIcon />
          </Link>
          <Link href="#">
            <NotificationIcon />
          </Link>
          <Link href="#">
            <MessageIcon />
          </Link>
          <Link href="#">
            <BookmarkIcon />
          </Link>
          <Link href="#">
            <ProfileIcon />
          </Link>
          <Link href="#">
            <MoreIcon />
          </Link>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};
