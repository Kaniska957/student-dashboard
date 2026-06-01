export default function ActivityTile() {
  return (
    <section
      className="
      rounded-3xl
      bg-zinc-900
      border
      border-zinc-800
      p-6
      "
    >
      <h2 className="font-semibold mb-4">
        Activity
      </h2>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="
            h-4
            rounded
            bg-zinc-700
            "
          />
        ))}
      </div>
    </section>
  );
}