import { NextImage, TextArea } from "../../custom";
import { IconList } from "./list-icon";

export const AddTweet = () => {
  return (
    <div className="w-full flex gap-4">
      <span className="pt-3">
        <NextImage
          src="/images/mansour-qaderi.jpg"
          alt="user"
          width={40}
          height={40}
          className="rounded-full hover:!bg-hover_img_gray h-10 w-10"
        />
      </span>
      <div className="w-full border-b border-border_primary pb-2">
        <TextArea
          id="tweet"
          placeholder="What is Happening?!"
          className="py-3 bg-[#fff] text-xl"
        ></TextArea>
        <IconList />
      </div>
    </div>
  );
};
