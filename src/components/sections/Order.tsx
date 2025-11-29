import React, { useState } from 'react';
import { Send, Phone, User, Key, Wifi, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { submitOrder, OrderData } from '../../lib/googleSheets';

interface OrderProps {
    lang: 'en' | 'fr';
    selectedPlan?: string;
    onOrderComplete?: () => void;
    onBack?: () => void;
}

export const Order: React.FC<OrderProps> = ({ lang, selectedPlan, onOrderComplete, onBack }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        deviceKey: '',
        macAddress: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const content = {
        en: {
            title: 'Complete Your Order',
            subtitle: 'Fill in your details to get started',
            namePlaceholder: 'Full Name',
            phonePlaceholder: 'Phone Number',
            deviceKeyPlaceholder: 'Device Key (Optional)',
            macAddressPlaceholder: 'MAC Address (Optional)',
            submit: 'Place Order',
            submitting: 'Processing...',
            required: 'Required',
            optional: 'Optional',
            selectedPlan: 'Selected Plan',
        },
        fr: {
            title: 'Complétez Votre Commande',
            subtitle: 'Remplissez vos détails pour commencer',
            namePlaceholder: 'Nom Complet',
            phonePlaceholder: 'Numéro de Téléphone',
            deviceKeyPlaceholder: 'Clé de l\'Appareil (Optionnel)',
            macAddressPlaceholder: 'Adresse MAC (Optionnel)',
            submit: 'Commander',
            submitting: 'En cours...',
            required: 'Requis',
            optional: 'Optionnel',
            selectedPlan: 'Forfait Sélectionné',
        },
    };

    const t = content[lang];

    const planNames: Record<string, { en: string; fr: string }> = {
        'trial': { en: 'Free Trial (24-48h)', fr: 'Essai Gratuit (24-48h)' },
        '6months-1device': { en: '6 Months - 1 Device (€39.99)', fr: '6 Mois - 1 Appareil (€39.99)' },
        '12months-1device': { en: '12 Months - 1 Device (€59.99)', fr: '12 Mois - 1 Appareil (€59.99)' },
        '12months-2devices': { en: '12 Months - 2 Devices (€99)', fr: '12 Mois - 2 Appareils (€99)' },
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        const orderData: OrderData = {
            name: formData.name,
            phone: formData.phone,
            deviceKey: formData.deviceKey || undefined,
            macAddress: formData.macAddress || undefined,
            plan: selectedPlan || 'trial',
        };

        const result = await submitOrder(orderData);

        setIsSubmitting(false);

        if (result.success) {
            if (onOrderComplete) {
                onOrderComplete();
            }
        } else {
            setError(result.error || 'An error occurred. Please try again.');
        }
    };

    return (
        <section id="order" className="py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header with Back Button */}
                <div className="text-center mb-12 space-y-4">
                    {onBack && (
                        <div className="mb-6">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={onBack}
                                className="text-white/70 hover:text-white"
                            >
                                <ArrowLeft size={20} className="mr-2" />
                                {lang === 'en' ? 'Back to Plans' : 'Retour aux Forfaits'}
                            </Button>
                        </div>
                    )}
                    <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full border border-primary/30 mb-4">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                        <span className="text-white font-semibold">{lang === 'en' ? 'Step 2: Your Information' : 'Étape 2: Vos Informations'}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">
                        {t.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>

                {/* Order Form */}
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 md:p-12 space-y-6">
                        {/* Selected Plan Display */}
                        {selectedPlan && (
                            <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                                <p className="text-white/70 text-sm mb-1">{t.selectedPlan}:</p>
                                <p className="text-white font-semibold text-lg">
                                    {planNames[selectedPlan]?.[lang] || selectedPlan}
                                </p>
                            </div>
                        )}

                        {/* Name Field */}
                        <div>
                            <label className="block text-white/80 text-sm font-medium mb-2">
                                <User size={16} className="inline mr-2" />
                                {t.namePlaceholder} <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder={t.namePlaceholder}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-dark-card border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            />
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label className="block text-white/80 text-sm font-medium mb-2">
                                <Phone size={16} className="inline mr-2" />
                                {t.phonePlaceholder} <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="tel"
                                placeholder={t.phonePlaceholder}
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-dark-card border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            />
                        </div>

                        {/* Device Key Field */}
                        <div>
                            <label className="block text-white/80 text-sm font-medium mb-2">
                                <Key size={16} className="inline mr-2" />
                                {t.deviceKeyPlaceholder} <span className="text-white/40 text-xs">({t.optional})</span>
                            </label>
                            <input
                                type="text"
                                placeholder={t.deviceKeyPlaceholder}
                                value={formData.deviceKey}
                                onChange={(e) => setFormData({ ...formData, deviceKey: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg bg-dark-card border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            />
                        </div>

                        {/* MAC Address Field */}
                        <div>
                            <label className="block text-white/80 text-sm font-medium mb-2">
                                <Wifi size={16} className="inline mr-2" />
                                {t.macAddressPlaceholder} <span className="text-white/40 text-xs">({t.optional})</span>
                            </label>
                            <input
                                type="text"
                                placeholder={t.macAddressPlaceholder}
                                value={formData.macAddress}
                                onChange={(e) => setFormData({ ...formData, macAddress: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg bg-dark-card border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                                <p className="text-red-400 text-sm">{error}</p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    {t.submitting}
                                </>
                            ) : (
                                <>
                                    <Send size={20} className="mr-2" />
                                    {t.submit}
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};
