import { PortableText } from "next-sanity";
import Image from "next/image";
import { ProjectInfo } from "@/types/ProjectInfoPage";

interface ProjectInfoProps {
  projectInfo: ProjectInfo;
}

const ProjectInfoSwitcher: React.FC<ProjectInfoProps> = ({ projectInfo }) => {
  return (
    <div className="flex justify-center flex-col">
      <div className="space-y-16">
        {/* Background Section */}
        <section className="mb-8 bg-hdotBgAqua rounded-lg p-6 min-h-[400px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <h2 className="text-hdotTeal text-2xl font-bold mb-4 text-center">
              Project Background
            </h2>
            <PortableText value={projectInfo.projectBackgroundText} />
          </div>

          {projectInfo.projectBackgroundImage && (
            <div className="flex justify-center items-center mt-6">
              <Image
                src={projectInfo.projectBackgroundImage.asset.url}
                alt={projectInfo.projectBackgroundImage.altText}
                width={600}
                height={350}
                className="rounded-lg max-h-96 w-auto"
              />
            </div>
          )}
        </section>

        {/* Purpose/Need Section */}
        <section className="mb-8 bg-hdotBgAqua rounded-lg p-6 min-h-[400px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <h2 className="text-hdotTeal text-2xl font-bold mb-4 text-center">
              Project Purpose/Need
            </h2>
            <PortableText value={projectInfo.projectPurposeNeedText} />
          </div>

          {projectInfo.projectPurposeNeedImage && (
            <div className="flex justify-center items-center mt-6">
              <Image
                src={projectInfo.projectPurposeNeedImage.asset.url}
                alt={projectInfo.projectPurposeNeedImage.altText}
                width={600}
                height={350}
                className="rounded-lg max-h-96 w-auto"
              />
            </div>
          )}
        </section>

        {/* Timeline Section */}
        <section className="mb-8 bg-hdotBgAqua rounded-lg p-6 min-h-[400px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <h2 className="text-hdotTeal text-2xl font-bold mb-4 text-center">
              Project Timeline
            </h2>
            <PortableText value={projectInfo.projectTimelineText} />
          </div>

          {projectInfo.projectTimelineImage && (
            <div className="flex justify-center items-center mt-6">
              <Image
                src={projectInfo.projectTimelineImage.asset.url}
                alt={projectInfo.projectTimelineImage.altText}
                width={600}
                height={350}
                className="rounded-lg max-h-96 w-auto"
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProjectInfoSwitcher;
