import { getProjectInfo } from "@/sanity/sanity-utils";

import ProjectInfoSwitcher from "@/components/ProjectInfoSwitcher/ProjectInfoSwitcher";

import { ProjectInfo } from "@/types/ProjectInfoPage";

async function Process() {
  const projectInfo: ProjectInfo = await getProjectInfo();

  return (
    <div className="container mx-auto pt-8">
      <h1 className="text-4xl font-bold text-center text-hdotTeal pb-8">
        {projectInfo.pageTitle}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <ProjectInfoSwitcher props={projectInfo} />
        <ProjectInfoSwitcher props={projectInfo} />
        <ProjectInfoSwitcher props={projectInfo} />
        <ProjectInfoSwitcher props={projectInfo} />
      </div>
      {projectInfo.buttonText && projectInfo.buttonLink && (
        <div className="text-center mt-8">
          <a href={projectInfo.buttonLink} className="inline-block btn">
            {projectInfo.buttonText}
          </a>
        </div>
      )}
    </div>
  );
}

export default Process;
