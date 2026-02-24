import React from 'react';
import Image from 'next/image';
import { LucideIcon, ShoppingCart as CartIcon, Landmark, Activity, CheckCircle2 } from 'lucide-react';
import { Sector } from '@/lib/schemas/sectors';

const iconMap: Record<string, LucideIcon> = {
    shopping_cart: CartIcon,
    account_balance: Landmark,
    medical_services: Activity,
};

interface SectorCardProps {
    sector: Sector;
}

const SectorCard: React.FC<SectorCardProps> = ({ sector }) => {
    const Icon = iconMap[sector.icon] || CartIcon;

    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-start h-full">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Icon className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{sector.title}</h3>

            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                {sector.description}
            </p>

            <ul className="space-y-3 mb-8 w-full">
                {sector.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                    </li>
                ))}
            </ul>

            {sector.image && (
                <div className="mt-auto w-full relative aspect-video rounded-2xl overflow-hidden ring-1 ring-slate-100 dark:ring-slate-800">
                    <Image
                        src={sector.image}
                        alt={sector.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
        </div>
    );
};

export default SectorCard;
