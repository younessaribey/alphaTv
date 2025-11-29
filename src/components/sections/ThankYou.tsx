import React from 'react';
import { CheckCircle, MessageCircle, Home } from 'lucide-react';
import { Button } from '../ui/Button';

interface ThankYouProps {
    lang: 'en' | 'fr';
    onGoHome?: () => void;
}

export const ThankYou: React.FC<ThankYouProps> = ({ lang, onGoHome }) => {
    const content = {
        en: {
            title: 'Thank You!',
            message: 'Your request is being processed. We will contact you soon.',
            whatsapp: 'Contact us on WhatsApp',
            goHome: 'Return to Home',
            subtitle: 'Order Submitted Successfully',
        },
        fr: {
            title: 'Merci!',
            message: 'Votre demande est en cours. Nous allons vous contacter bientôt.',
            whatsapp: 'Contactez-nous sur WhatsApp',
            goHome: 'Retour à l\'Accueil',
            subtitle: 'Commande Soumise avec Succès',
        },
    };

    const t = content[lang];
    const whatsappNumber = '+33758928901';
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

    const handleGoHome = () => {
        if (onGoHome) {
            onGoHome();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-2xl mx-auto">
                    <div className="glass-effect rounded-2xl p-8 md:p-12 text-center space-y-8">
                        {/* Success Icon */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
                                <div className="relative bg-gradient-to-r from-green-400 to-green-600 w-24 h-24 rounded-full flex items-center justify-center">
                                    <CheckCircle size={48} className="text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Thank You Message */}
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">
                                {t.title}
                            </h2>
                            <p className="text-lg text-green-400 font-semibold">
                                {t.subtitle}
                            </p>
                            <p className="text-xl text-white/90 leading-relaxed">
                                {t.message}
                            </p>
                        </div>

                        {/* WhatsApp Contact */}
                        <div className="pt-6 space-y-4">
                            <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
                                <p className="text-white/70 text-sm mb-3">
                                    {lang === 'en' ? 'Contact Number' : 'Numéro de Contact'}
                                </p>
                                <p className="text-2xl font-bold text-green-400 mb-4">
                                    {whatsappNumber}
                                </p>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full bg-green-600 hover:bg-green-700"
                                    onClick={() => window.open(whatsappUrl, '_blank')}
                                >
                                    <MessageCircle size={20} className="mr-2" />
                                    {t.whatsapp}
                                </Button>
                            </div>

                            {/* Return Home Button */}
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full"
                                onClick={handleGoHome}
                            >
                                <Home size={20} className="mr-2" />
                                {t.goHome}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
