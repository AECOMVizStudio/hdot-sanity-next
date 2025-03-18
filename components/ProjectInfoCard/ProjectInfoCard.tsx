import Image from "next/image";

import { Card } from "@/types/ProjectInfoPage";

function ProjectInfoCard(props: Card) {
  return (
    <section
      className="mb-8 bg-hdotBgAqua rounded-lg py-6 shadow-md max-h-fit"
      key={props._key}
    >
      <h2 className="text-2xl font-bold mb-4 ml-2 text-hdotTeal text-left min-h-20">
        {props.title}
      </h2>
      <div className="w-full h-[250px] flex items-center justify-center mb-4 relative">
        <Image
          src={props.image.asset.url}
          alt={props.alt}
          width={150}
          height={150}
          objectFit="cover"
          className="w-90 h-auto"
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

      {props.buttonLink && (
        <div className="text-center">
          <button className="text-hdotTeal font-bold btn">
            <a href={props.buttonLink} target="_blank" rel="noreferrer">
              {props.buttonText}
            </a>
          </button>
        </div>
      )}
    </section>
  );
}

export default ProjectInfoCard;
