'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function LeaderboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const tabs = [
    { name: 'Global', href: '/leaderboard' },
    { name: 'Game', href: '/leaderboard/game-01', active: pathname.includes('/leaderboard/game') },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-center gap-4 p-4 border-b border-zinc-800">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`px-4 py-2 rounded-lg transition-colors ${
              (tab.active && pathname !== '/leaderboard') || pathname === tab.href
                ? 'bg-zinc-800 text-white'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <div className="flex-1 container mx-auto">
        {children}
      </div>
    </div>
  );
} 