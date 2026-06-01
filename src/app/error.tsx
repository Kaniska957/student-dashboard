"use client";

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <main className="min-h-screen bg-black text-red-500 p-8">
      <h1 className="text-2xl font-bold mb-4">
        Something went wrong
      </h1>
      <p>{error.message}</p>
    </main>
  );
}