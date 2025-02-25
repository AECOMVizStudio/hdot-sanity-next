import { PortableText } from "next-sanity";
import Image from "next/image";

import { Card } from "@/types/ProjectInfoPage";

function ProjectInfoCard(props: Card) {
  console.log(props);
  return (
    <section
      className="mb-8 bg-hdotBgAqua rounded-lg py-6 shadow-md"
      key={props._key}
    >
      <h2 className="text-2xl font-bold mb-4 ml-2 text-hdotTeal text-left">
        {props.title}
      </h2>
      <div className="w-full mb-4"></div>
      <ul className="list-disc list-inside mb-4">
        <li>Bullet point 1</li>
        <li>Bullet point 2</li>
        <li>Bullet point 3</li>
      </ul>
      <div className="text-center">
        <button className="text-hdotTeal font-bold">Expand</button>
      </div>
    </section>
  );
}

export default ProjectInfoCard;
