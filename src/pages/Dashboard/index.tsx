import { useState } from 'react';
import DonationStats from './components/DonationStats';
import RecentDonations from './components/RecentDonations';
import { DonationStats as DonationStatsType, Donation } from '../../types';

// Temporary mock data - will be replaced with actual API calls
const mockStats: DonationStatsType = {
  totalAmount: 15750,
  donationsCount: 45,
  causesSupported: 12,
  lastDonationDate: '2023-10-25'
};

const mockDonations: Donation[] = [
  { id: 1, amount: 100, date: '2023-10-25', cause: 'Education' },
  { id: 2, amount: 250, date: '2023-10-24', cause: 'Healthcare' },
  { id: 3, amount: 500, date: '2023-10-23', cause: 'Environment' },
];

export default function Dashboard() {
  const [stats] = useState<DonationStatsType>(mockStats);
  const [donations] = useState<Donation[]>(mockDonations);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
        Donation Dashboard
      </h1>
      <DonationStats stats={stats} />
      <RecentDonations donations={donations} />
    </div>
  );
}