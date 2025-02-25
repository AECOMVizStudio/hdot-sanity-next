import { getProjectInfo } from "@/sanity/sanity-utils";
import ProjectInfoCard from "@/components/ProjectInfoCard/ProjectInfoCard";
import { ProjectInfo } from "@/types/ProjectInfoPage";

async function Process() {
  const projectInfo: ProjectInfo = await getProjectInfo();

  return (
    <div className="container mx-auto pt-8">
      <h1 className="text-4xl font-bold text-center text-hdotTeal pb-8">
        {projectInfo.pageTitle}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projectInfo.cards.map((card) => {
          return <ProjectInfoCard {...card} key={card._key} />;
        })}
      </div>
    </div>
  );
}

export default Process;
