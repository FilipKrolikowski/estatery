import Image from "next/image";
import MapImage from "@/images/Map.png";
import { HouseTile } from "@/components";
import { data } from "@/static/data";

const QuantityStat = ({ number, text }: { number: number; text: string }) => {
  return (
    <div className="border-l-3 border-[#D6D8E5] px-8">
      <div className="text-primary-violet font-bold text-3xl">{number}+</div>
      <div className="text-[#7B8191] font-medium">{text}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="px-12 py-8 lg:py-0 text-center lg:text-left flex flex-col justify-center gap-6 bg-gradient-to-bl from-indigo-50 to-white lg:bg-gradient-to-tr lg:from-indigo-50/50 lg:to-white">
        <h1 className="font-bold text-[40px] lg:text-[64px] leading-[110%]">Buy, rent, or sell your property easily</h1>
        <h2 className="font-medium text-xl">
          A great platform to buy, sell, or even rent your properties without any commisions.
        </h2>
        <div className="flex gap-20 mt-8 justify-center lg:justify-start">
          <QuantityStat number={50} text={"renters"} />
          <QuantityStat number={10} text={"properties"} />
        </div>
      </div>
      <div className="relative lg:m-0 m-12">
        <Image src={MapImage} alt="map" style={{ width: "100%", height: "auto" }} />
        <div className="absolute -left-30 sm:-left-20 top-0 md:-left-10 sm:top-1/4 scale-50 sm:scale-75 md:scale-100">
          <HouseTile house={data[5]} showLikeButton={false} showType={false} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
