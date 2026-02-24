import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

interface OfficesSectionProps {
    data: {
        title: string;
        locations: Array<{
            name: string;
            address: string;
            mapImage: string;
        }>;
    };
}

const OfficesSection: React.FC<OfficesSectionProps> = ({ data }) => {
    return (
        <section className="px-6 py-20 max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-10 text-slate-900 dark:text-white">{data.title}</h3>

            <div className="grid lg:grid-cols-1 gap-10">
                {data.locations.map((loc, idx) => (
                    <div key={idx} className="space-y-6">
                        <div className="aspect-[21/9] w-full relative rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 ring-4 ring-slate-50 dark:ring-slate-900/50">
                            <Image
                                src={loc.mapImage}
                                alt={`${loc.name} map`}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-slate-900 dark:text-white">{loc.name}</h4>
                                <p className="text-slate-600 dark:text-slate-400">{loc.address}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OfficesSection;
