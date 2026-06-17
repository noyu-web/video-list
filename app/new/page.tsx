"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewNote() {
  const [text, setText] = useState("");
  const router = useRouter();

  async function save() {
    await fetch("/api/new", {
      method: "POST",
      body: text,
    });
    router.push("/");
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">新しいノート</h1>
      <textarea
        className="w-full h-40 p-2 border"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={save}
        className="mt-4 px-4 py-2 bg-pink-500 text-white rounded"
      >
        保存
      </button>
    </div>
  );
}
