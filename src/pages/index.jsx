import Aboutme from "@/components/main/aboutme";
import Experience from "@/components/main/experience";
import Introduction from "@/components/main/introduction";
import Pfp from "@/components/main/pfp";
import Skills from "@/components/main/skills";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <div className="flex justify-center items-center gap-20 ">
        <Introduction />
        <Pfp />
      </div>

      <Aboutme />
      <Skills />
      <Experience />
    </main>
  );
}
