import Image from "next/image";
import type { Project as TProject } from "@/data/projects";

type ProjectProps = {
  project: TProject;
};

export default function Project({ project }: ProjectProps) {
  return (
    <a target="_blank" href={project.link}>
      <div className="relative w-[380px] sm:w-[420px] lg:w-[500px] h-[220px] sm:h-[240px] lg:h-[275px] bg-neutral-50 rounded-md border border-black-750 overflow-hidden">
        <Image
          src={project.img}
          alt={project.name}
          className="h-full w-full object-cover object-[16%]"
        />

        <p className="absolute bottom-2 left-2 bg-neutral-200 px-2 rounded-md border border-neutral-400 text-[13px] sm:text-sm">
          {project.name}
        </p>
      </div>
    </a>
  );
}
