import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { MiniCase } from '@/lib/schemas/service-detail';

interface ServiceMiniCasesProps {
    data: MiniCase[];
}

export default function ServiceMiniCases({ data }: ServiceMiniCasesProps) {
    if (!data || data.length === 0) return null;

    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                Örnek Çalışmalar
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                {data.map((caseItem, index) => (
                    <Link
                        key={index}
                        href={caseItem.link}
                        className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg border border-neutral-border"
                    >
                        <Image
                            src={caseItem.image}
                            alt={caseItem.alt}
                            fill
                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                            <span className="text-white font-bold border-2 border-white/30 backdrop-blur-md px-6 py-2.5 rounded-xl uppercase tracking-widest text-xs">
                                Detayı Gör
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
