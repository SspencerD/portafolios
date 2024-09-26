import React from "react";

const searchNameTech = (name: string) => {
  const techName = new Map([
    ["react", "React"],
    ["react-Native", "React Native"],
    ["github", "GitHub"],
    ["javascript", "JavaScript"],
    ["typescript", "TypeScript"],
    ["nodejs", "Node.js"],
    ["express", "Express"],
    ["mongodb", "MongoDB"],
    ["graphql", "GraphQL"],
    ["kotlin", "Kotlin"],
    ["azureDevops", "Azure DevOps"],
    ["firebase", "Firebase"],
    ["flutter", "Flutter"],
    ["gradle", "Gradle"],
    ["tailwind", "Tailwind CSS"],
    ["gcp", "Google Cloud Platform"],
    ["redux", "Redux"],
    ["css", "CSS"],
    ["html", "HTML"],
    ["express", "Express"],
    ["jest", "Jest"],
    ["playwright", "Playwright"],
    ["angular", "Angular"],
    ["vue", "Vue"],
    ["nestjs", "Nest.js"],
    ["laravel", "Laravel"],
    ["astro", "Astro"],
  ]);
  return techName.get(name) || name;
};
export default searchNameTech;
