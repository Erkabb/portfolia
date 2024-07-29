import Aboutme from "@/components/main/aboutme";
import Experience from "@/components/main/experiences";
import HeadofExp from "@/components/main/experiences/headofExp";
import Introduction from "@/components/main/introduction";
import Pfp from "@/components/main/pfp";
import Skills from "@/components/main/skills";
import SmallIntroduction from "@/components/main/smdisplayIntro";
import Work from "@/components/main/work";
import HeadofWork from "@/components/main/work/headofWork";

const experiences = [
  {
    title: "Sr. Frontend Developer",
    logo: "/images/logo-upwork.png",
    jobroles: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Team Lead",
    logo: "/images/logo-upwork.png",
    jobroles: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Full Stack Developer",
    logo: "/images/logo-upwork.png",
    jobroles: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

const worksection = [
  {
    project: "/images/picture.png",
    projectName: "UBCab",
    types: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwind.css",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    project: "/images/pic2.png",
    types: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwind.css",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    projectName: "Mentorhub",
  },
  {
    project: "/images/pic3.png",
    types: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwind.css",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    projectName: "iToim",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <div className="flex justify-center items-center gap-20 max-sm:flex-col max-sm:mx-auto">
        <Introduction />
        <Pfp />
        <SmallIntroduction/>
      </div>

      <Aboutme />
      <Skills />
      <HeadofExp />
      {experiences.map(({ title, logo, jobroles }) => (
        <Experience title={title} logo={logo} jobroles={jobroles} />
      ))}
      <HeadofWork />
      {worksection.map(({ project, projectName, types }) => (
        <Work project={project} projectName={projectName} desc={types} />
      ))}
    </main>
  );
}
