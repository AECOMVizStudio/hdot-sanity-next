import Image from "next/image";

import { Card } from "@/types/ProjectInfoPage";

function ProjectInfoCard(props: Card) {
  return (
    <section
      className="mb-8 bg-hdotBgAqua rounded-lg py-6 shadow-md max-h-fit"
      key={props._key}
    >
      <div className="w-full flex-col items-center mb-4 justify-center text-2xl font-bold text-hdotTeal text-center h-[120px] ">
        <h1 className="">
          {props.title}
        </h1>
        <h2 className="">
          {props.subtitle}
        </h2>
      </div>
      <div className="w-full h-[150px] flex items-center mb-4 justify-center relative">
        <Image
          src={props.image.asset.url}
          alt={props.alt}
          width={150}
          height={150}
          className="h-[150px] w-auto"
        />
      </div>
      <div className="p-2">
        <h3 className="text-xl font-bold text-orange-500">
          {props.subheading}
        </h3>
        <hr className="border-t-2 border-hdotTeal w-full" />
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
