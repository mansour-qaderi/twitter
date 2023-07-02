import { CSSProperties } from "react";
import {
  GifIcon,
  EmojiIcon,
  PollIcon,
  ScheduleIcon,
  GPSIcon,
  ThumbnailIcon,
} from "../../../icons/home-icons";
import { Tooltip } from "../../custom";

export const IconList = () => {
  return (
    <div className="flex flex-wrap -mx-2">
      <Tooltip text="check">
        <div className="min-h-[36px] min-w-[36px] rounded-full flex justify-center items-center hover:bg-hover_tertiary cursor-pointer">
          <ThumbnailIcon style={styles.icon} />
        </div>
      </Tooltip>
      <Tooltip text="GIF">
        <div className="min-h-[36px] min-w-[36px] rounded-full flex justify-center items-center hover:bg-hover_tertiary cursor-pointer">
          <GifIcon style={styles.icon} />
        </div>
      </Tooltip>
      <Tooltip text="Poll">
        <div className="min-h-[36px] min-w-[36px] rounded-full flex justify-center items-center hover:bg-hover_tertiary cursor-pointer">
          <EmojiIcon style={styles.icon} />
        </div>
      </Tooltip>
      <Tooltip text="Emoji">
        <div className="min-h-[36px] min-w-[36px] rounded-full flex justify-center items-center hover:bg-hover_tertiary cursor-pointer">
          <PollIcon style={styles.icon} />
        </div>
      </Tooltip>
      <Tooltip text="Schedule">
        <div className="min-h-[36px] min-w-[36px] rounded-full flex justify-center items-center hover:bg-hover_tertiary cursor-pointer">
          <ScheduleIcon style={styles.icon} />
        </div>
      </Tooltip>
      <Tooltip text="GPS">
        <div className="min-h-[36px] min-w-[36px] rounded-full flex justify-center items-center hover:bg-hover_tertiary cursor-pointer">
          <GPSIcon style={styles.icon} />
        </div>
      </Tooltip>
    </div>
  );
};

interface StylesType {
  icon: CSSProperties;
}

const styles: StylesType = {
  icon: {
    color: "#1d9bf0",
    width: 20,
    height: 20,
  },
};
