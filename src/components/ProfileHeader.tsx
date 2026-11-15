import Image from "next/image";
import { profile } from "@/lib/site-config";

export default function ProfileHeader() {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full shadow-md ring-4 ring-sky-100 dark:ring-slate-800">
        <Image
          src={profile.photo}
          alt={profile.photoAlt}
          fill
          sizes="112px"
          priority
          unoptimized
          className="object-cover"
        />
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
        {profile.name}
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {profile.bio}
      </p>
    </header>
  );
}
