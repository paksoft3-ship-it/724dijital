import React from 'react';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '@/lib/schemas/referanslar';

interface TestimonialCardProps {
    data: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                        src={data.image}
                        alt={data.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white leading-tight">{data.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{data.role}, {data.company}</p>
                </div>
                <div className="ml-auto flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < (data.rating || 5) ? 'fill-current' : 'text-slate-200'}`} />
                    ))}
                </div>
            </div>

            <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-2 w-10 h-10 text-primary/10 -z-0" />
                <p className="text-slate-600 dark:text-slate-400 text-sm italic leading-relaxed relative z-10">
                    &quot;{data.quote}&quot;
                </p>
            </div>

            {data.results && data.results.length > 0 && (
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap gap-2">
                        {data.results.map((result, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider rounded-lg border border-primary/10"
                            >
                                {result}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestimonialCard;
