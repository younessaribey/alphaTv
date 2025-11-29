import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
    lang: 'en' | 'fr';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
    const content = {
        en: {
            tagline: 'Premium IPTV Experience',
            quickLinks: 'Quick Links',
            support: 'Support',
            legal: 'Legal',
            home: 'Home',
            shop: 'Shop',
            install: 'How to Install',
            contact: 'Contact',
            faq: 'FAQ',
            terms: 'Terms of Service',
            privacy: 'Privacy Policy',
            rights: 'All rights reserved.',
        },
        fr: {
            tagline: 'Expérience IPTV Premium',
            quickLinks: 'Liens Rapides',
            support: 'Assistance',
            legal: 'Légal',
            home: 'Accueil',
            shop: 'Boutique',
            install: 'Comment Installer',
            contact: 'Contact',
            faq: 'FAQ',
            terms: 'Conditions d\'Utilisation',
            privacy: 'Politique de Confidentialité',
            rights: 'Tous droits réservés.',
        },
    };

    const t = content[lang];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Youtube, href: '#', label: 'YouTube' },
    ];

    return (
        <footer className="bg-dark-lighter border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold gradient-text">AlphaTv</h3>
                        <p className="text-white/60 text-sm">{t.tagline}</p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 flex items-center justify-center group"
                                    >
                                        <Icon size={18} className="text-white/70 group-hover:text-white" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">{t.quickLinks}</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-white/60 hover:text-primary transition-colors">{t.home}</a></li>
                            <li><a href="#shop" className="text-white/60 hover:text-primary transition-colors">{t.shop}</a></li>
                            <li><a href="#how-to-install" className="text-white/60 hover:text-primary transition-colors">{t.install}</a></li>
                            <li><a href="#contact" className="text-white/60 hover:text-primary transition-colors">{t.contact}</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">{t.support}</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white/60 hover:text-primary transition-colors">{t.faq}</a></li>
                            <li><a href="#contact" className="text-white/60 hover:text-primary transition-colors">{t.contact}</a></li>
                            <li><a href="https://capplayer.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">Cap Player</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">{t.legal}</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white/60 hover:text-primary transition-colors">{t.terms}</a></li>
                            <li><a href="#" className="text-white/60 hover:text-primary transition-colors">{t.privacy}</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
                    <p>&copy; {new Date().getFullYear()} AlphaTv. {t.rights}</p>
                </div>
            </div>
        </footer>
    );
};
