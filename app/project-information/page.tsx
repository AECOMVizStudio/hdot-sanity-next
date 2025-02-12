import { getProjectInfo } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "next-sanity";

const ProjectInformation = async () => {
  const projectInfo = await getProjectInfo();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        {projectInfo.pageTitle}
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Background</h2>
        <PortableText value={projectInfo.projectBackgroundText} />
        {projectInfo.projectBackgroundImage && (
          <Image
            src={projectInfo.projectBackgroundImage.asset.url}
            alt={projectInfo.projectBackgroundImage.altText}
            width={800}
            height={600}
            className="rounded-lg mt-4"
          />
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Purpose/Need</h2>
        <PortableText value={projectInfo.projectPurposeNeedText} />
        {projectInfo.projectPurposeNeedImage && (
          <Image
            src={projectInfo.projectPurposeNeedImage.asset.url}
            alt={projectInfo.projectPurposeNeedImage.altText}
            width={800}
            height={600}
            className="rounded-lg mt-4"
          />
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Timeline</h2>
        <PortableText value={projectInfo.projectTimelineText} />
        {projectInfo.projectTimelineImage && (
          <Image
            src={projectInfo.projectTimelineImage.asset.url}
            alt={projectInfo.projectTimelineImage.altText}
            width={800}
            height={600}
            className="rounded-lg mt-4"
          />
        )}
      </section>

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
};

export default ProjectInformation;
