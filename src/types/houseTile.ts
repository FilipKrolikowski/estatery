import { StaticImageData } from "next/image";

export interface HouseTileType {
  id: number;
  type: string;
  price: string;
  name: string;
  adress: string;
  image: StaticImageData;
}
