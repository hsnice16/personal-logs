import { StaticImageData } from "next/image";

import TechInterviewExp from "@/project/tech-interview-exp.png";

import AgentFriendlyCode from "@/project/agent-friendly-code.png";

export type Project = {
  link: string;
  name: string;
  img: StaticImageData;
};

export const PROJECTS = {
  "Apr '26": [
    {
      img: AgentFriendlyCode,
      name: "agentfriendlycode.com",
      link: "https://www.agentfriendlycode.com",
    },
  ],
  "Sep '22": [
    {
      img: TechInterviewExp,
      name: "techinterviewexp.site",
      link: "https://techinterviewexp.site",
    },
  ],
};
