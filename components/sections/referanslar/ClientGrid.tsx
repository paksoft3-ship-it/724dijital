import React from 'react';
import Image from 'next/image';
import { Client } from '@/lib/schemas/referanslar';

interface ClientGridProps {
    clients: Client[];
}

const ClientGrid: React.FC<ClientGridProps> = ({ clients }) => {
    return (
        <section className="px-6 py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">Güvenilir Ortaklar</span>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white">Birlikte Güçlüyüz</h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 max-w-md text-sm leading-relaxed">
                        Farklı sektörlerden 200&apos;den fazla markaya dijital dönüşüm yolculuklarında eşlik ettik.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {clients.map((client) => (
                        <div
                            key={client.id}
                            className="aspect-[3/2] relative grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-transparent hover:border-primary/10"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientGrid;
