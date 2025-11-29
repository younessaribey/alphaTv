import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';

interface NavbarProps {
    lang: 'en' | 'fr';
    onLangChange: (lang: 'en' | 'fr') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onLangChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const translations = {
        en: {
            home: 'Home',
            shop: 'Plans',
            howToInstall: 'Installation',
            order: 'Order Now',
        },
        fr: {
            home: 'Accueil',
            shop: 'Forfaits',
            howToInstall: 'Installation',
            order: 'Commander',
        },
    };

    const t = translations[lang];

    const navLinks = [
        { name: t.home, href: '#home' },
        { name: t.shop, href: '#shop' },
        { name: t.howToInstall, href: '#how-to-install' },
        { name: t.order, href: '#order' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center space-x-2 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <h1 className="relative text-2xl sm:text-3xl font-bold gradient-text">
                                AlphaTv
                            </h1>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group"
                            >
                                <span className="relative z-10">{link.name}</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}

                        {/* Language Switcher */}
                        <div className="flex items-center space-x-2 ml-4">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => onLangChange(lang === 'en' ? 'fr' : 'en')}
                                className="gap-2"
                            >
                                <Globe size={18} />
                                <span className="uppercase">{lang}</span>
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'md:hidden glass-effect border-t border-white/10 transition-all duration-300 overflow-hidden',
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}
            >
                <div className="container mx-auto px-4 py-4 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block text-white/90 hover:text-white transition-all duration-300 py-3 font-medium border-b border-white/5 last:border-b-0"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                            onLangChange(lang === 'en' ? 'fr' : 'en');
                            setIsMenuOpen(false);
                        }}
                        className="gap-2 w-full justify-center"
                    >
                        <Globe size={18} />
                        <span className="uppercase">{lang === 'en' ? 'Français' : 'English'}</span>
                    </Button>
                </div>
            </div>
        </nav>
    );
};
