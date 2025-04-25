import { HiCurrencyDollar, HiHeart, HiCollection, HiCalendar } from 'react-icons/hi';
import StatCard from '../../../components/ui/StatCard';
import { DonationStats as DonationStatsType } from '../../../types';

interface Props {
  stats: DonationStatsType;
}

export default function DonationStats({ stats }: Props) {
  const statItems = [
    {
      title: 'Total Donations',
      value: `$${stats.totalAmount.toLocaleString()}`,
      icon: HiCurrencyDollar,
      iconColor: 'text-green-500',
      iconBgColor: 'bg-green-100',
      delay: 0.1
    },
    {
      title: 'Number of Donations',
      value: stats.donationsCount,
      icon: HiHeart,
      iconColor: 'text-red-500',
      iconBgColor: 'bg-red-100',
      delay: 0.2
    },
    {
      title: 'Causes Supported',
      value: stats.causesSupported,
      icon: HiCollection,
      iconColor: 'text-blue-500',
      iconBgColor: 'bg-blue-100',
      delay: 0.3
    },
    {
      title: 'Last Donation',
      value: new Date(stats.lastDonationDate).toLocaleDateString(),
      icon: HiCalendar,
      iconColor: 'text-purple-500',
      iconBgColor: 'bg-purple-100',
      delay: 0.4
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statItems.map((item) => (
        <StatCard
          key={item.title}
          {...item}
        />
      ))}
    </div>
  );
}