import Link from "next/link";
import { Home, User, Clipboard, Trophy, ShoppingCart } from "lucide-react";

export function NavBar() {
  return (
    <aside className="w-full md:w-64 bg-primary text-white p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6">
      <nav className="flex justify-center flex-row md:flex-col gap-5 sm:gap-3 md:gap-4 overflow-x-auto md:overflow-visible">
        {/* Quests */}
        <Link
          href="/quests"
          className="btn btn-ghost btn-sm sm:btn-md md:btn-lg w-auto flex items-center justify-center md:justify-start gap-2"
        >
          <Clipboard className="w-5 h-5 md:hidden" />
          <span className="hidden md:inline text-sm sm:text-base md:text-lg">Quests</span>
        </Link>

        {/* Leaderboard */}
        <Link
          href="/leaderboard"
          className="btn btn-ghost btn-sm sm:btn-md md:btn-lg w-auto flex items-center justify-center md:justify-start gap-2"
        >
          <Trophy className="w-5 h-5 md:hidden" />
          <span className="hidden md:inline text-sm sm:text-base md:text-lg">Leaderboard</span>
        </Link>

        {/* Marketplace */}
        <Link
          href="/marketplace"
          className="btn btn-ghost btn-sm sm:btn-md md:btn-lg w-auto flex items-center justify-center md:justify-start gap-2"
        >
          <ShoppingCart className="w-5 h-5 md:hidden" />
          <span className="hidden md:inline text-sm sm:text-base md:text-lg">Marketplace</span>
        </Link>
      </nav>
    </aside>
  );
}
