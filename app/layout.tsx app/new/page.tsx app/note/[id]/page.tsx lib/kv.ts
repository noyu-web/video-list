import kv from "../lib/kv";
import Link from "next/link";

export default async function Home() {
  const notes = await kv.hgetall("notes") || {};

  return (
    <div>
      <h1 className="text-4xl mb-4">♡</h1>

      <Link
        href="/new"
        className="block mb-4 text-pink-600 underline"
      >
        新しいノートを書く
      </Link>

      <div className="space-y-3">
        {Object.entries(notes).map(([id, note]) => (
          <Link
            key={id}
            href={`/note/${id}`}
            className="block p-3 border border-pink-300 rounded"
          >
            {note.slice(0, 20)}…
          </Link>
        ))}
      </div>
    </div>
  );
}
