import kv from "../../../lib/kv";

export async function POST(req) {
  const text = await req.text();
  const id = Date.now().toString();

  await kv.hset("notes", { [id]: text });

  return new Response("OK");
}
