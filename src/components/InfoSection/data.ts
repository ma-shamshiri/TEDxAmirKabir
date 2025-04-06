// dataAmirKabir.ts

import { infoItem1, infoItem2, infoItem3 } from "../../assets";

export interface AmirKabirInfoItem {
  id: number;
  title: string;        // e.g., "infoItemOneTitle"
  description: string;  // e.g., "infoItemOneDescription"
  image: string;        // URL or path to the representative image/icon
}

export const amirKabirInfoItems: AmirKabirInfoItem[] = [
  {
    id: 1,
    title: "infoItemOneTitle",
    description: "infoItemOneDescription",
    image: infoItem1,
  },
  {
    id: 2,
    title: "infoItemTwoTitle",
    description: "infoItemTwoDescription",
    image: infoItem2,
  },
  {
    id: 3,
    title: "infoItemThreeTitle",
    description: "infoItemThreeDescription",
    image: infoItem3,
  },
  // Add more items as needed...
];
