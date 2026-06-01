export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-8">
      <div className="animate-pulse grid gap-4">
        <div className="h-40 bg-zinc-900 rounded-3xl" />
        <div className="h-40 bg-zinc-900 rounded-3xl" />
        <div className="h-40 bg-zinc-900 rounded-3xl" />
      </div>
    </main>
  );
}