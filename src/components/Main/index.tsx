import { Tab, HouseTile, Testimonials } from "@/components";
import { useState } from "react";
import { data } from "@/static/data";
import { motion } from "framer-motion";

const tabs = [
  {
    name: "houses",
    type: "house",
  },
  {
    name: "apartments",
    type: "apartments",
  },
];

const TitleAndDesc = ({ title, desc }: { title: string; desc: string }) => (
  <div className="max-w-[600px] mx-auto">
    <h1 className="font-bold text-3xl sm:text-[40px] leading-[140%] text-center">{title}</h1>
    <h2 className="font-medium leading-[160%] text-[#7B8191] mt-4 text-center">{desc}</h2>
  </div>
);

const Main = () => {
  const [currentTab, setTab] = useState(tabs[0]);
  return (
    <div className="pt-12">
      <div className="flex justify-center gap2">
        <span className="bg-[#faf9ff] border border-[#D6D8E5] p-2 rounded-lg">
          {tabs.map((t) => (
            <Tab key={t.type} tab={t} isActive={t === currentTab} onClick={() => setTab(t)} />
          ))}
        </span>
      </div>
      <div className="mt-12 px-8 lg:px-0">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <TitleAndDesc
            title="We make it easy for houses and apartments."
            desc="Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services."
          />
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex gap-4 mt-8 overflow-x-scroll lg:justify-center px-8 lg:mx-0"
          key={currentTab.type}
        >
          {data
            .filter((i) => i.type === currentTab.type)
            .map((i) => (
              <HouseTile key={i.id} house={i} />
            ))}
        </motion.div>
      </div>
      <div className="bg-gradient-to-t from-indigo-50 to-white pb-12 px-8 lg:px-0">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="mt-12"
        >
          <TitleAndDesc
            title="Testimonials"
            desc="See what our property managers, landlords, and tenants have to say"
          />
        </motion.div>

        <Testimonials />
      </div>
    </div>
  );
};

export default Main;
