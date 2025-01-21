import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();
  console.log("Fetched projects:", projects); // Debugging statement

  return (
    <div>
      {projects.length === 0 ? (
        <div>No projects found</div>
      ) : (
        projects.map((project) => <div key={project._id}>{project.name}</div>)
      )}
    </div>
  );
}
