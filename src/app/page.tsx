import { supabase } from "../lib/supabase";
import HeroTile from "../components/HeroTile";
import CourseCard from "../components/CourseCard";
import ActivityTile from "../components/ActivityTile";
import AnimatedGrid from "../components/AnimatedGrid";

type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
};

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="min-h-screen bg-black text-red-500 p-8">
        Error: {error.message}
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="grid lg:grid-cols-[250px_1fr] gap-6">

        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <h2 className="text-xl font-bold mb-8">
            Dashboard
          </h2>

          <nav className="space-y-4 text-zinc-400">
            <p>Home</p>
            <p>Courses</p>
            <p>Analytics</p>
            <p>Settings</p>
          </nav>
        </aside>

        {/* Main Content */}
        <section className="grid md:grid-cols-2 gap-6 auto-rows-[180px]">

          <HeroTile />

          <ActivityTile />
        <AnimatedGrid>
          {courses?.map((course: Course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
            />
          ))}
        </AnimatedGrid>

        </section>
      </div>
    </main>
  );
}