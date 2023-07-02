import { SVGProps } from "react";

export const ThumbnailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" height={24} width={24} {...props}>
    <path
      d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13zM5.5 5a.5.5 0 0 0-.5.5v9.086l3-3 3 3 5-5 3 3V5.5a.5.5 0 0 0-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-3.086zM9.75 7a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 9.75 7z"
      fill="currentColor"
    />
  </svg>
);
