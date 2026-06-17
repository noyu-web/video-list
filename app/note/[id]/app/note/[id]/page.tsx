import kv from "../../../../lib/kv";

export default async function NotePage({ params }) {
  const note = await kv.hget("notes", params.id);

  return (
    <div>
      <h1 className="text-2xl mb-4">ノート</h1>
      <p className="whitespace-pre-wrap">{note}</p>
    </div>
  );
}
