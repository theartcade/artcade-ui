function TicketIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-zinc-100"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M15 4v16" />
      <path d="M15 8h5" />
      <path d="M15 12h5" />
      <path d="M15 16h5" />
      <path d="M7 8h.01" />
      <path d="M7 12h.01" />
      <path d="M7 16h.01" />
    </svg>
  );
}

export function TicketStatus() {
  return (
    <div className="inline-flex items-center h-10 bg-zinc-900/80 rounded-lg border border-zinc-800 hover:bg-zinc-900 transition-colors">
      <div className="pl-2.5">
        <TicketIcon />
      </div>
      <div className="px-2">
        <span className="text-sm font-medium text-zinc-400">×</span>
      </div>
    </div>
  );
}
