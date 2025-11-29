import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Shop } from './Shop';

interface HeroProps {
    lang: 'en' | 'fr';
    onPlanSelect?: (plan: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onPlanSelect }) => {
    const [showPricing, setShowPricing] = useState(false);

    const content = {
        en: {
            title: 'Premium IPTV',
            subtitle: 'Black Friday Special',
            description: 'Access 10,000+ channels in 4K. Free trial available!',
            cta: 'View Pricing',
            skipToPricing: 'See Our Plans',
        },
        fr: {
            title: 'IPTV Premium',
            subtitle: 'Spécial Black Friday',
            description: 'Accédez à plus de 10 000 chaînes en 4K. Essai gratuit disponible!',
            cta: 'Voir les Tarifs',
            skipToPricing: 'Voir Nos Forfaits',
        },
    };

    const t = content[lang];

    const handleViewPricing = () => {
        setShowPricing(true);
        // Small delay to allow animation to start before scroll
        setTimeout(() => {
            document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
                {!showPricing ? (
                    /* Initial Hero Content */
                    <div
                        className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in"
                        style={{
                            animation: 'fadeIn 0.6s ease-out'
                        }}
                    >
                        {/* Black Friday Badge */}
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-6 py-2 rounded-full animate-pulse">
                            <Sparkles size={20} className="text-white" />
                            <span className="text-white font-bold text-sm sm:text-base">
                                {t.subtitle}
                            </span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="gradient-text block">{t.title}</span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto">
                            {t.description}
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <Button
                                size="lg"
                                className="text-lg px-8 py-6 w-full sm:w-auto group"
                                onClick={handleViewPricing}
                            >
                                <Sparkles size={24} className="mr-2" />
                                {t.cta}
                                <ArrowRight
                                    size={24}
                                    className="ml-2 group-hover:translate-x-1 transition-transform"
                                />
                            </Button>
                        </div>

                        {/* Quick Skip Link */}
                        <div className="pt-8">
                            <button
                                onClick={handleViewPricing}
                                className="text-white/60 hover:text-white transition-colors text-sm underline"
                            >
                                {t.skipToPricing} →
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Pricing Section with Animation */
                    <div
                        className="animate-slide-up"
                        style={{
                            animation: 'slideUp 0.8s ease-out'
                        }}
                    >
                        <Shop lang={lang} onPlanSelect={onPlanSelect} />
                    </div>
                )}
            </div>

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </section>
    );
};
