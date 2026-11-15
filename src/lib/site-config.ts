export type LinkItem = {
  /** URL 경로와 DB 키에 쓰이는 고유 ID (영문 소문자, 숫자, 하이픈) */
  id: string;
  title: string;
  url: string;
};

// 더미 값입니다. 실제 내용은 나중에 채우세요.
export const profile = {
  name: "우서준",
  bio: "멋쟁이 우서준 입니다.",
  photo: "/profile-placeholder.svg",
  photoAlt: "프로필 사진",
};

// 더미 링크입니다. 여기에 없는 id의 클릭은 기록되지 않습니다.
export const links: LinkItem[] = [
  { id: "link-1", title: "인스타그램", url: "https://example.com" },
  { id: "link-2", title: "깃 허브", url: "https://example.com" },
  { id: "link-3", title: "링크드 인", url: "https://example.com" },
];
