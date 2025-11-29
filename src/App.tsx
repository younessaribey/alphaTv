import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { ChannelLogos } from './components/sections/ChannelLogos';
import { HowToInstall } from './components/sections/HowToInstall';
import { Order } from './components/sections/Order';
import { ThankYou } from './components/sections/ThankYou';
import { Footer } from './components/Footer';
import './index.css';
import './performance.css';

type Step = 'pricing' | 'form' | 'thankyou';

function App() {
    const [lang, setLang] = useState<'en' | 'fr'>('fr');
    const [selectedPlan, setSelectedPlan] = useState<string>('');
    const [currentStep, setCurrentStep] = useState<Step>('pricing');

    const handlePlanSelect = (planId: string) => {
        setSelectedPlan(planId);
        setCurrentStep('form');
        // Smooth scroll to top
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    const handleOrderComplete = () => {
        setCurrentStep('thankyou');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleGoHome = () => {
        setCurrentStep('pricing');
        setSelectedPlan('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-dark">
            <Navbar lang={lang} onLangChange={setLang} />

            {currentStep === 'thankyou' ? (
                /* Step 3: Thank You Page */
                <ThankYou lang={lang} onGoHome={handleGoHome} />
            ) : currentStep === 'form' ? (
                /* Step 2: Order Form */
                <main className="min-h-screen pt-20">
                    <Order
                        lang={lang}
                        selectedPlan={selectedPlan}
                        onOrderComplete={handleOrderComplete}
                        onBack={() => setCurrentStep('pricing')}
                    />
                </main>
            ) : (
                /* Step 1: Main Content with Pricing */
                <main>
                    <Hero lang={lang} onPlanSelect={handlePlanSelect} />
                    <ChannelLogos />
                    <HowToInstall lang={lang} />
                </main>
            )}

            <Footer lang={lang} />
        </div>
    );
}

export default App;
