import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import debug from "../../../assets/CodeReporterAI.png";
import { FaChevronRight } from "react-icons/fa6";
const categories = [
  {
    name: "Debug AI",
    posts: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: "SmartCode AI",
    posts: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: "BuildSite AI",
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
  {
    name: "DataFix AI",
    posts: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: "CodeEdge AI",
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
  {
    name: "HostEase AI",
    posts: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: "Learn AI",
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
];

export default function ProductTab() {
  return (
    <div className="flex h-screen w-full  pt-24 px-4">
      <div className="w-full ">
        <TabGroup>
          <div className="flex justify-center">
            <TabList className="flex gap-4">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="rounded-full py-2 px-5 text-  text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  {name}
                </Tab>
              ))}
            </TabList>
          </div>
          <TabPanels className="mt-[7rem]">
            {categories.map(({ name, posts }) => (
              //     rounded-xl bg-white/5 p-3
              <TabPanel key={name} className="">
                <div className="grid grid-cols-2 text-white">
                  <div className="col-span-1 w-[500px]">
                    <h3 className="text-[2rem] ">
                      Automated Code Troubleshooting with Debug AI{" "}
                    </h3>
                    <p className="my-5">
                      Debug AI streamlines the debugging workflow by
                      meticulously scanning your code and delivering actionable
                      recommendations to swiftly address issues.{" "}
                    </p>
                    <div className="mt-10">
                      <div className="flex flex-col gap-5">
                        <div className="flex gap-3 items-start">
                          <div className="w-[8px] h-[8px] bg-custom-gradient rounded-full mt-1.5" />
                          <h4>
                            Automatically detects and highlights code
                            inconsistencies.
                          </h4>
                        </div>
                        <div className="flex gap-3 items-start">
                          <div className="w-[8px] h-[8px] bg-custom-gradient rounded-full mt-1.5" />
                          <h4>
                            Compatible with a wide range of programming
                            languages for flexible debugging.
                          </h4>
                        </div>
                        <div className="flex gap-3 items-start">
                          <div className="w-[8px] h-[8px] bg-custom-gradient rounded-full mt-1.5" />
                          <h4>
                            Automatically detects and highlights code
                            inconsistencies.
                          </h4>
                        </div>
                        <div className="flex gap-3 items-start">
                          <div className="w-[8px] h-[8px] bg-custom-gradient rounded-full mt-1.5" />
                          <h4>
                            Automatically detects and highlights code
                            inconsistencies.
                          </h4>
                        </div>
                      </div>
                    </div>
                    <button className=" mt-7 flex items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white  bg-custom-gradient shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem]">
                      Learn More
                      <span>
                        <FaChevronRight />
                      </span>
                    </button>
                  </div>
                  <div className="col-span-1flex justify-center">
                    <img className="rounded-[1.2rem]" src={debug} />
                  </div>
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
