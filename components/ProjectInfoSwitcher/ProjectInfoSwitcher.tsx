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
    <div className="flex justify-center flex-col">
      <div className="flex justify-center items-center space-x-4 py-4">
        <button
          className={`px-4 py-2 rounded ${currentSection === "background" ? "btn" : "bg-gray-200"}`}
          onClick={() => setCurrentSection("background")}
        >
          Background
        </button>
        <button
          className={`px-4 py-2 rounded ${currentSection === "purpose" ? "btn" : "bg-gray-200"}`}
          onClick={() => setCurrentSection("purpose")}
        >
          Purpose
        </button>
        <button
          className={`px-4 py-2 rounded ${currentSection === "timeline" ? "btn" : "bg-gray-200"}`}
          onClick={() => setCurrentSection("timeline")}
        >
          Timeline
        </button>
      </div>

      <section className="mb-8 bg-hdotBgAqua rounded-lg p-6 min-h-[400px] flex flex-col items-center">
        {/* Dynamic Section Title */}
        <h2 className="text-hdotTeal text-2xl font-bold mb-4 text-center">
          {currentSection === "background"
            ? "Project Background"
            : currentSection === "purpose"
              ? "Project Purpose/Need"
              : currentSection === "timeline"
                ? "Project Timeline"
                : ""}
        </h2>

        {/* Dynamic Content */}
        {currentSection === "background" && (
          <PortableText value={projectInfo.projectBackgroundText} />
        )}
        {currentSection === "purpose" && (
          <PortableText value={projectInfo.projectPurposeNeedText} />
        )}
        {currentSection === "timeline" && (
          <PortableText value={projectInfo.projectTimelineText} />
        )}

        {/* Dynamic Image */}
        {currentSection === "background" &&
          projectInfo.projectBackgroundImage && (
            <div className="mt-6">
              <Image
                src={projectInfo.projectBackgroundImage.asset.url}
                alt={projectInfo.projectBackgroundImage.altText}
                width={600}
                height={350}
                className="rounded-lg"
              />
            </div>
          )}
        {currentSection === "purpose" &&
          projectInfo.projectPurposeNeedImage && (
            <div className="mt-6">
              <Image
                src={projectInfo.projectPurposeNeedImage.asset.url}
                alt={projectInfo.projectPurposeNeedImage.altText}
                width={600}
                height={350}
                className="rounded-lg"
              />
            </div>
          )}
        {currentSection === "timeline" && projectInfo.projectTimelineImage && (
          <div className="mt-6">
            <Image
              src={projectInfo.projectTimelineImage.asset.url}
              alt={projectInfo.projectTimelineImage.altText}
              width={600}
              height={350}
              className="rounded-lg"
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default ProjectInfoSwitcher;
