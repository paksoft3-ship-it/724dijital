import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Code, LifeBuoy, Instagram, Linkedin, Twitter } from 'lucide-react';
import NewsletterForm from './NewsletterForm';
import type { SiteData, FooterColumn, SocialLink, NavItem } from '@/lib/schemas/site';

interface FooterProps {
    data: SiteData;
}

export default function Footer({ data }: FooterProps) {
    return (
        <footer className="bg-neutral-surface dark:bg-[#0b1615] border-t border-neutral-border pt-12 pb-8">
            {/* Trust Badges */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-border">
                    <div className="flex items-center gap-4 group">
                        <div className="p-2.5 bg-secondary/10 rounded-xl transition-transform group-hover:scale-110">
                            <ShieldCheck className="w-7 h-7 text-secondary" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-primary dark:text-slate-200">SLA Garantisi</h4>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">%99.9 Uptime</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                        <div className="p-2.5 bg-secondary/10 rounded-xl transition-transform group-hover:scale-110">
                            <Lock className="w-7 h-7 text-secondary" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-primary dark:text-slate-200">Güvenli Altyapı</h4>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">%100 KVKK Uyumlu</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                        <div className="p-2.5 bg-secondary/10 rounded-xl transition-transform group-hover:scale-110">
                            <Code className="w-7 h-7 text-secondary" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-primary dark:text-slate-200">Yerli Yazılım</h4>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">Teknopark Onaylı</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                        <div className="p-2.5 bg-secondary/10 rounded-xl transition-transform group-hover:scale-110">
                            <LifeBuoy className="w-7 h-7 text-secondary" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-primary dark:text-slate-200">Uzman Destek</h4>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400">Hızlı Müdahale</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <img
                                src="/logo2.png"
                                alt={data.brandName}
                                className="h-14 w-auto"
                            />
                        </Link>

                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                            Dijital dönüşüm yolculuğunuzda güvenilir teknoloji ortağınız. İşinizi modern çözümlerle geleceğe taşıyoruz.
                        </p>

                        <div className="flex gap-4">
                            {data.socialLinks.map((social: SocialLink) => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 border border-neutral-border flex items-center justify-center text-slate-500 hover:bg-secondary hover:text-white hover:border-secondary transition-all"
                                    aria-label={social.platform}
                                >
                                    {social.platform === 'Instagram' && <Instagram size={20} />}
                                    {social.platform === 'LinkedIn' && <Linkedin size={20} />}
                                    {social.platform === 'Twitter' && <Twitter size={20} />}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav Columns */}
                    {data.footerColumns.map((col: FooterColumn) => (
                        <div key={col.title}>
                            <h3 className="text-lg font-bold text-primary dark:text-white mb-6 uppercase tracking-wider text-sm">
                                {col.title}
                            </h3>
                            <ul className="space-y-4">
                                {col.links.map((link: NavItem) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-600 dark:text-slate-400 hover:text-secondary transition-colors text-sm font-medium"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold text-primary dark:text-white mb-6 uppercase tracking-wider text-sm">
                            Bülten Aboneliği
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                            Dijital trendler ve sektörel gelişmelerden haberdar olun.
                        </p>
                        <NewsletterForm />
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-neutral-border">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-500">
                            © {new Date().getFullYear()} {data.brandName}. Tüm hakları saklıdır.
                        </p>

                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                            <span className="text-xs font-semibold text-slate-500">Tüm sistemler aktif</span>
                        </div>
                    </div>

                    {/* Developed by PakSoft (Turkish + brand-consistent colors) */}
                    <div className="mt-4 flex justify-center items-center gap-2 text-center">
                        <a
                            href="https://paksoft.com.tr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 group"
                            aria-label="PakSoft tarafından geliştirildi"
                        >
                            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 group-hover:text-secondary transition-colors">
                                PakSoft tarafından geliştirildi
                            </span>

                            <span className="inline-flex items-center gap-1.5 text-secondary group-hover:opacity-90 transition-opacity">
                                {/* Custom Crescent Icon */}
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -rotate-12">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.08-1.38-.7.13-1.42.21-2.16.21-5.52 0-10-4.48-10-10S9.42 2.83 14.92 2.83c.74 0 1.46.08 2.16.21C15.58 2.5 13.85 2 12 2z" />
                                </svg>
                                <span className="font-extrabold tracking-wide">PakSoft</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}