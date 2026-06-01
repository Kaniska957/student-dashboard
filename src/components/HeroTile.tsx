export default function HeroTile() {
  return (
    <section
      className="
      md:col-span-2
      rounded-3xl
      bg-zinc-900
      border
      border-zinc-800
      p-8
      "
    >
      <h1 className="text-4xl font-bold">
        Welcome back, Student
      </h1>

      <p className="text-zinc-400 mt-2">
        🔥 12 Day Learning Streak
      </p>
    </section>
  );
}