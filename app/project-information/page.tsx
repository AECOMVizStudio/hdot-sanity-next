"use client";

import { useState, useEffect } from "react";
import { getProjectInfo } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { ProjectInfo } from "@/types/ProjectInfoPage";

const ProjectInformation = () => {
  const [projectInfo, setProjectInfo] = useState<ProjectInfo | null>(null);
  const [currentSection, setCurrentSection] = useState("background");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjectInfo();
      setProjectInfo(data);
    };

    fetchData();
  }, []);

  if (!projectInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        {projectInfo.pageTitle}
      </h1>

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
      </div>

      {currentSection === "background" && (
        <section className="mb-8 bg-hdotSand rounded-lg p-6">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4 text-center">
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
            <h2 className="text-2xl font-semibold mb-4 text-center">
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
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Project Timeline
            </h2>
            <PortableText value={projectInfo.projectTimelineText} />
            {projectInfo.projectTimelineImage && (
              <div className="mt-6">
                <Image
                  src={projectInfo.projectTimelineImage.asset.url}
                  alt={projectInfo.projectTimelineImage.altText}
                  width={400}
                  height={250}
                  className="rounded-lg"
                />
              </div>
            )}
          </div>
        </section>
      )}

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
