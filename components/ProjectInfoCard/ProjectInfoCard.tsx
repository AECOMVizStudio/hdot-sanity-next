"use client";
import { PortableText } from "@portabletext/react";
import { useState } from "react";
import Image from "next/image";

import { Card } from "@/types/ProjectInfoPage";

function ProjectInfoCard(props: Card) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className="mb-8 bg-hdotBgAqua rounded-lg py-6 shadow-md max-h-fit"
      key={props._key}
    >
      <h2 className="text-2xl font-bold mb-4 ml-2 text-hdotTeal text-left min-h-20">
        {props.title}
      </h2>
      <div className="w-full h-[250px] mb-4 relative">
        <Image
          src={props.image.asset.url}
          alt={props.alt}
          layout="fill"
          objectFit="cover"
          className="w-full"
        />
      </div>
      <div className="p-2">
        <h3 className="text-xl font-bold text-orange-500">
          {props.subheading}
        </h3>
        <hr className="border-t-2 border-hdotTeal w-full md:w-1/2" />
      </div>
      <ul className="list-disc list-inside mb-4 px-2 space-y-2">
        {props.bulletPoints.map((bulletPoint, index) => {
          return (
            <li key={index} className="text-hdotTeal text-lg">
              {bulletPoint}
            </li>
          );
        })}
      </ul>

      {isExpanded && <PortableText value={props.detailedDescription} />}

      <div className="text-center">
        <button
          className="text-hdotTeal font-bold"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Collapse" : "Expand"}
        </button>
      </div>
    </section>
  );
}

export default ProjectInfoCard;
