"use client";

import { useState } from "react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { ProjectInfo } from "@/types/ProjectInfoPage";

interface ProjectInfoProps {
  projectInfo: ProjectInfo;
}

const ProjectInfoSwitcher: React.FC<ProjectInfoProps> = ({ projectInfo }) => {
  const [currentSection, setCurrentSection] = useState("background");

  return (
    <div className="flex justify-center mb-8">
      <button
        className={`px-4 py-2 mx-2 rounded ${currentSection === "background" ? "btn" : "bg-gray-200"}`}
        onClick={() => setCurrentSection("background")}
      >
        Background
      </button>
      <button
        className={`px-4 py-2 mx-2 rounded ${currentSection === "purpose" ? "btn" : "bg-gray-200"}`}
        onClick={() => setCurrentSection("purpose")}
      >
        Purpose
      </button>
      <button
        className={`px-4 py-2 mx-2 rounded ${currentSection === "timeline" ? "btn" : "bg-gray-200"}`}
        onClick={() => setCurrentSection("timeline")}
      >
        Timeline
      </button>

      {currentSection === "background" && (
        <section className="mb-8 bg-hdotSand rounded-lg p-6">
          <div className="flex flex-col items-center">
            <h2 className="text-hdotTeal text-2xl font-bold mb-4 text-center">
              Project Background
            </h2>
            <PortableText value={projectInfo.projectBackgroundText} />
            {projectInfo.projectBackgroundImage && (
              <div className="mt-6">
                <Image
                  src={projectInfo.projectBackgroundImage.asset.url}
                  alt={projectInfo.projectBackgroundImage.altText}
                  width={800}
                  height={350}
                  className="rounded-lg"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {currentSection === "purpose" && (
        <section className="mb-8 bg-hdotSand rounded-lg p-6">
          <div className="flex flex-col items-center">
            <h2 className="text-hdotTeal text-2xl font-bold mb-4 text-center">
              Project Purpose/Need
            </h2>
            <PortableText value={projectInfo.projectPurposeNeedText} />
            {projectInfo.projectPurposeNeedImage && (
              <div className="mt-6">
                <Image
                  src={projectInfo.projectPurposeNeedImage.asset.url}
                  alt={projectInfo.projectPurposeNeedImage.altText}
                  width={400}
                  height={250}
                  className="rounded-lg"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {currentSection === "timeline" && (
        <section className="mb-8 bg-hdotSand rounded-lg p-6">
          <div className="flex flex-col items-center">
            <h2 className="text-hdotTeal text-2xl font-bold mb-4 text-center">
              Project Timeline
            </h2>
            <PortableText value={projectInfo.projectTimelineText} />
            <div className="mt-6">
              <Image
                src={projectInfo.projectTimelineImage.asset.url}
                alt={projectInfo.projectTimelineImage.altText}
                width={400}
                height={250}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectInfoSwitcher;
