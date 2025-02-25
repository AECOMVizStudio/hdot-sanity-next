import { PortableText } from "next-sanity";
import Image from "next/image";
import { ProjectInfo } from "@/types/ProjectInfoPage";

interface ProjectInfoProps {
  props: ProjectInfo;
}

const ProjectInfoSwitcher: React.FC<ProjectInfoProps> = ({ props }) => {
  return (
    <section className="mb-8 bg-hdotBgAqua rounded-lg py-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4 ml-2 text-hdotTeal text-left">
        Quick Card Title
      </h2>
      <div className="w-full mb-4">
        <Image
          src={props.projectBackgroundImage.asset.url}
          alt="Card Image"
          width={600}
          height={800}
          className="w-full"
        />
      </div>
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
};

export default ProjectInfoSwitcher;
