import Aboutme from "@/components/main/aboutme";
import Introduction from "@/components/main/introduction";
import Pfp from "@/components/main/pfp";
import Skills from "@/components/main/skills";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col gap-20">
        <div className="flex justify-center items-center gap-20 ">
          <Introduction />
          <Pfp />
        </div>

        <Aboutme />
        <Skills />
      </section>
    </main>
  );
}
