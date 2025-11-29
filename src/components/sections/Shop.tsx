
import { Check, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

interface ShopProps {
    lang: 'en' | 'fr';
    onPlanSelect?: (plan: string) => void;
}

export const Shop: React.FC<ShopProps> = ({ lang, onPlanSelect }) => {
    const content = {
        en: {
            title: 'Choose Your Plan',
            subtitle: 'All plans include 24h free trial',
            blackFriday: '🔥 BLACK FRIDAY SALE 🔥',
            monthly: 'Monthly',
            device: 'Device',
            cta: 'Subscribe Now',
            popular: 'Most Popular',
            bestDeal: 'Best Deal',
            features: {
                channels: '10,000+ Channels',
                quality: '4K Quality',
                vod: 'VOD Library',
                support: '24/7 Support',
                devices: 'Multi-Device',
                updates: 'Regular Updates',
                trial: '24h Free Trial',
            },
        },
        fr: {
            title: 'Choisissez Votre Forfait',
            subtitle: 'Tous les forfaits incluent un essai gratuit de 24h',
            blackFriday: '🔥 VENTE BLACK FRIDAY 🔥',
            monthly: 'Par Mois',
            device: 'Appareil',
            cta: 'S\'abonner Maintenant',
            popular: 'Le Plus Populaire',
            bestDeal: 'Meilleur Deal',
            features: {
                channels: '10 000+ Chaînes',
                quality: 'Qualité 4K',
                vod: 'Bibliothèque VOD',
                support: 'Assistance 24/7',
                devices: 'Multi-Appareils',
                updates: 'Mises à Jour Régulières',
                trial: 'Essai Gratuit 24h',
            },
        },
    };

    const t = content[lang];

    const plans = [
        {
            name: '6 ' + (lang === 'en' ? 'Months' : 'Mois'),
            price: '€39.99',
            oldPrice: '€49.99',
            duration: t.monthly,
            devices: '1 ' + t.device,
            features: [
                t.features.trial,
                t.features.channels,
                t.features.quality,
                t.features.vod,
                t.features.support,
                t.features.devices,
            ],
            popular: false,
            savings: lang === 'en' ? 'Save €10' : 'Économisez €10',
            planId: '6months-1device',
        },
        {
            name: '12 ' + (lang === 'en' ? 'Months' : 'Mois'),
            price: '€59.99',
            oldPrice: '€89.99',
            duration: t.monthly,
            devices: '1 ' + t.device,
            features: [
                t.features.trial,
                t.features.channels,
                t.features.quality,
                t.features.vod,
                t.features.support,
                t.features.devices,
                t.features.updates,
            ],
            popular: true,
            savings: lang === 'en' ? 'Save €30' : 'Économisez €30',
            bestDeal: t.bestDeal,
            planId: '12months-1device',
        },
        {
            name: '12 ' + (lang === 'en' ? 'Months' : 'Mois'),
            price: '€99',
            oldPrice: '€159.99',
            duration: t.monthly,
            devices: '2 ' + (lang === 'en' ? 'Devices' : 'Appareils'),
            features: [
                t.features.trial,
                t.features.channels,
                t.features.quality,
                t.features.vod,
                t.features.support,
                t.features.devices,
                t.features.updates,
            ],
            popular: false,
            savings: lang === 'en' ? 'Save €60' : 'Économisez €60',
            planId: '12months-2devices',
        },
    ];

    const handlePlanClick = (planId: string) => {
        if (onPlanSelect) {
            onPlanSelect(planId);
        }
        document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="shop" className="py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Black Friday Banner */}
                <div className="text-center mb-8">
                    <div className="inline-block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-6 py-3 rounded-full animate-pulse">
                        <span className="text-white font-bold text-lg sm:text-xl">
                            {t.blackFriday}
                        </span>
                    </div>
                </div>

                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">
                        {t.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={cn(
                                'relative glass-effect rounded-2xl p-6 md:p-8 transition-all duration-300',
                                plan.popular
                                    ? 'border-2 border-primary shadow-2xl shadow-primary/20 scale-100 md:scale-105'
                                    : 'border border-white/10 hover:border-primary/50',
                                'card-hover'
                            )}
                        >
                            {/* Popular/Best Deal Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="bg-gradient-to-r from-primary to-purple-500 px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
                                        <Sparkles size={20} fill="white" className="text-white" />
                                        <span className="text-white font-bold text-base">{plan.bestDeal}</span>
                                    </div>
                                </div>
                            )}

                            {/* Savings Badge */}
                            {plan.savings && (
                                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-400 to-red-600 px-3 py-1 rounded-full z-10">
                                    <span className="text-white font-bold text-xs">{plan.savings}</span>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className={cn('text-center mb-8', plan.popular ? 'pt-8' : 'pt-4')}>
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline justify-center gap-2 mb-1">
                                    {plan.oldPrice && (
                                        <span className="text-2xl text-white/40 line-through font-semibold">
                                            {plan.oldPrice}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-4xl lg:text-5xl font-bold gradient-text">
                                        {plan.price}
                                    </span>
                                </div>
                                <p className="text-white/60 mt-2 text-sm">{plan.devices}</p>
                            </div>

                            {/* Features */}
                            <div className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                            <Check size={12} className="text-primary" />
                                        </div>
                                        <span className="text-white/90 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <Button
                                variant={plan.popular ? 'primary' : 'outline'}
                                className="w-full"
                                size="lg"
                                onClick={() => handlePlanClick(plan.planId)}
                            >
                                {t.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
