"use client";

import type { LinkItem } from "@/lib/site-config";

export default function LinkCard({ link }: { link: LinkItem }) {
  function handleClick() {
    const url = `/api/links/${encodeURIComponent(link.id)}/click`;

    // 페이지 이동을 막지 않도록 beacon을 먼저 쓰고, 실패하면 keepalive fetch로 보냅니다.
    if (navigator.sendBeacon(url)) return;
    fetch(url, { method: "POST", keepalive: true }).catch(() => {
      // 기록 실패는 사용자 경험에 영향을 주지 않도록 무시합니다.
    });
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md active:scale-[0.99] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-sky-600"
    >
      <span className="font-medium">{link.title}</span>
      <span
        aria-hidden
        className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-sky-500"
      >
        →
      </span>
    </a>
  );
}
