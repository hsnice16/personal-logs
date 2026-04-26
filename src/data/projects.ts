import { StaticImageData } from "next/image";
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
      name: "www.agentfriendlycode.com",
      link: "https://www.agentfriendlycode.com",
    },
  ],
};
