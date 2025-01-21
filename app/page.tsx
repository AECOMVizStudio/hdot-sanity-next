import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects(); // projects fetched as Promise, type checked in sanity-utils.ts
  console.log("Fetched projects:", projects); // Debugging statement

  return (
    <div>
      {projects.length === 0 ? (
        <div>No projects found</div>
      ) : (
        projects.map((project) => (
          <div key={project._id}>
            <h1>{project.name}</h1>
          </div>
        ))
      )}
    </div>
  );
}
