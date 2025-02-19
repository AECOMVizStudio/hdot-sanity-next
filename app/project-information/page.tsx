import { getProjectInfo } from "@/sanity/sanity-utils";

import ProjectInfoSwitcher from "@/components/ProjectInfoSwitcher/ProjectInfoSwitcher";

import { ProjectInfo } from "@/types/ProjectInfoPage";

async function ProjectInformation() {
  const projectInfo: ProjectInfo = await getProjectInfo();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        {projectInfo.pageTitle}
      </h1>

      <ProjectInfoSwitcher projectInfo={projectInfo} />

      {projectInfo.buttonText && projectInfo.buttonLink && (
        <div className="text-center mt-8">
          <a
            href={projectInfo.buttonLink}
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {projectInfo.buttonText}
          </a>
        </div>
      )}
    </div>
  );
}

export default ProjectInformation;
