import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import debug from "../../../assets/CodeReporterAI.png";
import smartcodeai from "../../../assets/CodeAI.png";
import buildsiteai from "../../../assets/DevelopAI.png";
import datafixai from "../../../assets/ValidationAI.png";
import hosteaseai from "../../../assets/StaticHostingAI.png";
import codeedgeai from "../../../assets/EditorAI.png";
import learnai from "../../../assets/TeacherAI.png";
import { FaChevronRight } from "react-icons/fa6";

const categories = [
  {
    name: "Debug AI",
    description: "Automated Code Troubleshooting with Debug AI",
    content:
      "Debug AI streamlines the debugging workflow by meticulously scanning your code and delivering actionable recommendations to swiftly address issues.",
    features: [
      "Automatically detects and highlights code inconsistencies.",
      "Compatible with a wide range of programming languages for flexible debugging.",
      "Efficiently matches expected outcomes with actual results.",
      "Offers practical solutions for identified code problems.",
      "Recommends optimizations and performance enhancements based on comprehensive analysis.",
    ],
    image: debug, // Image for Debug AI
  },
  {
    name: "SmartCode AI",
    description: "Smart Coding Assistance with SmartCode AI",
    content:
      "CodeMate empowers developers by delivering intelligent support, enabling efficient code writing, comprehension, and enhancement.",
    features: [
      "Generates relevant code snippets from user prompts.",
      "Simplifies complex coding concepts for better understanding.",
      "Provides corrections and improvement suggestions for your code.",
      "Supports numerous programming languages for extensive applicability.",
      "Promotes best practices and efficient coding methodologies.",
    ],
    image: smartcodeai, // Image for SmartCode AI
  },
  {
    name: "BuildSite AI",
    description: "Instant Website Generation with BuildSite AI",
    content:
      "BuildSite AI transforms your website’s title, description, and objectives into a fully functional, responsive site with optimized layouts and features.",
    features: [
      "Creates complete websites from minimal input.",
      "Ensures optimal user experience and mobile responsiveness.",
      "Designs tailored layouts aligned with your website’s purpose.",
      "Automates deployment with clean, scalable code.",
      "Allows customization and integration of additional features as needed.",
    ],
    image: buildsiteai, // Image for BuildSite AI
  },
  {
    name: "DataFix AI",
    description: "Reliable Input Validation with DataFix AI",
    content:
      "DataFix AI guarantees your data’s accuracy and security by providing real-time validation for user inputs across various platforms, enhancing data integrity.",
    features: [
      "Real-time validation of user input data.",
      "Supports diverse data types and formats.",
      "Customizable validation rules to meet specific requirements.",
      "Provides instant feedback on validation errors to users.",
      "Easily integrates with existing applications and frameworks.",
    ],
    image: datafixai, // Image for DataFix AI
  },
  {
    name: "HostEase AI",
    description: "Simple Static Site Deployment with HostEase AI",
    content:
      "HostEase AI makes deploying your static websites effortless. With just a few inputs, your site goes live, optimized for speed and reliability.",
    features: [
      "Deploys static sites instantly with minimal configuration.",
      "Optimized for high-speed performance and global accessibility.",
      "Seamlessly connects with your custom domain.",
      "Automatically sets up HTTPS and security features.",
      "Offers scalable hosting solutions with zero configuration needed.",
    ],
    image: hosteaseai, // Image for HostEase AI
  },
  {
    name: "CodeEdge AI",
    description: "Efficient Code Translation and Enhancement",
    content:
      "CodeEdge AI delivers intelligent solutions for translating and refining code across various programming languages, enhancing both readability and performance.",
    features: [
      "Seamlessly translates code between multiple languages.",
      "Maintains functionality and syntax integrity during translation.",
      "Optimizes code for clarity and adherence to best practices.",
      "Identifies and corrects errors with clear guidance.",
      "Suggests performance and efficiency improvements.",
      "Provides step-by-step explanations for all modifications.",
    ],
    image: codeedgeai, // Image for CodeEdge AI
  },
  {
    name: "Learn AI",
    description: "Interactive Coding Education with Learn AI",
    content:
      "Learn AI is your multilingual companion, offering step-by-step tutorials to help you master coding concepts across various programming languages.",
    features: [
      "Delivers detailed, step-by-step coding tutorials.",
      "Supports multiple languages including Python, JavaScript, and more.",
      "Uses real-world examples to enhance understanding.",
      "Encourages learning through interactive questions and clarifications.",
      "Focuses on simplicity with clear and concise explanations.",
    ],
    image: learnai, // Image for Learn AI
  },
];

export default function ProductTab() {
  return (
    <div className="flex  w-full py-24 px-4">
      <div className="w-full">
        <TabGroup>
          <div className="flex justify-center">
            <TabList className="flex gap-4">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="rounded-full py-2 px-5 text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  {name}
                </Tab>
              ))}
            </TabList>
          </div>
          <TabPanels className="mt-[7rem]">
            {categories.map(
              ({ name, description, content, features, image }) => (
                <TabPanel key={name}>
                  <div className="grid grid-cols-2 text-white">
                    <div className="col-span-1 w-[500px]">
                      <h3 className="text-[2rem]">{description}</h3>
                      <p className="my-5">{content}</p>
                      <div className="mt-10">
                        <div className="flex flex-col gap-5">
                          {features.map((feature, index) => (
                            <div key={index} className="flex gap-3 items-start">
                              <div className="w-[8px] h-[8px] bg-custom-gradient rounded-full mt-1.5" />
                              <h4>{feature}</h4>
                            </div>
                          ))}
                        </div>
                      </div>
                      <button className="mt-7 flex items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white bg-custom-gradient shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem]">
                        Get Started
                        <span>
                          <FaChevronRight />
                        </span>
                      </button>
                    </div>
                    <div className="col-span-1 flex justify-center">
                      <img
                        className="rounded-[1.2rem]"
                        src={image}
                        alt={name}
                      />
                    </div>
                  </div>
                </TabPanel>
              )
            )}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
