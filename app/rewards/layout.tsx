'use client';

import { useAuth } from '@/lib/auth-context';
import { ConnectWalletPrompt } from '@/components/ui/connect-wallet';
import { SubNav } from '@/components/ui/sub-nav';

export default function RewardsLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  const tabs = [
    { name: 'Scores', href: '/rewards/scores' },
    { name: 'Tickets', href: '/rewards/tickets' },
    { name: 'Crates', href: '/rewards/crates' },
    { name: 'Vault', href: '/rewards/vault' },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <SubNav tabs={tabs} />
      <div className="flex-1 relative">
        <div className="absolute inset-0 overflow-auto">
          {isAuthenticated ? (
            children
          ) : (
            <ConnectWalletPrompt />
          )}
        </div>
      </div>
    </div>
  );
} 