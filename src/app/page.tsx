import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links } from "@/lib/site-config";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-16 sm:py-24">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <main className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <ProfileHeader />

        <nav aria-label="내 링크" className="mt-8 flex flex-col gap-3">
          {links.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </nav>
      </main>
    </div>
  );
}
