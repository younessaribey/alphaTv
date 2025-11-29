import React, { useState } from 'react';
import { Smartphone, Monitor, Tv, Download, Key, Play, Image as ImageIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

interface HowToInstallProps {
    lang: 'en' | 'fr';
}

export const HowToInstall: React.FC<HowToInstallProps> = ({ lang }) => {
    const [selectedPlatform, setSelectedPlatform] = useState('android');

    const content = {
        en: {
            title: 'How to Install',
            subtitle: 'Get started in 3 easy steps',
            platforms: 'Select Your Platform',
            step1: 'Download Cap Player',
            step2: 'Get Your Credentials',
            step3: 'Start Watching',
            installInstructions: 'Installation Instructions',
            getMac: 'Find Your MAC Address',
            getCredentials: 'Get Credentials',
            videoTutorial: 'Video Tutorial',
            tutorialComing: 'Tutorial video coming soon',
            screenshot: 'Installation Screenshot',
            screenshotComing: 'Screenshot coming soon',
        },
        fr: {
            title: 'Comment Installer',
            subtitle: 'Commencez en 3 étapes faciles',
            platforms: 'Sélectionnez Votre Plateforme',
            step1: 'Téléchargez Cap Player',
            step2: 'Obtenez Vos Identifiants',
            step3: 'Commencez à Regarder',
            installInstructions: 'Instructions d\'Installation',
            getMac: 'Trouvez Votre Adresse MAC',
            getCredentials: 'Obtenir les Identifiants',
            videoTutorial: 'Tutoriel Vidéo',
            tutorialComing: 'Vidéo tutoriel bientôt disponible',
            screenshot: 'Capture d\'écran d\'installation',
            screenshotComing: 'Capture d\'écran bientôt disponible',
        },
    };

    const t = content[lang];

    const platforms = [
        {
            id: 'ios',
            name: 'iOS & tvOS',
            icon: Smartphone,
            details: 'iPhone, iPad, Apple TV'
        },
        {
            id: 'android',
            name: 'Android & Android TV',
            icon: Tv,
            details: 'Phones, Tablets, Android TV Boxes'
        },
        {
            id: 'streaming',
            name: 'Roku & Fire TV',
            icon: Tv,
            details: 'Amazon Fire TV, Roku Stick/Box'
        },
        {
            id: 'smarttv',
            name: 'Smart TV',
            icon: Monitor,
            details: 'Samsung (Tizen), LG (WebOS), Hisense (Vidaa), Philips/TCL (Zeasn)'
        },
        {
            id: 'windows',
            name: 'Windows',
            icon: Monitor,
            details: 'Windows 10/11 PC & Laptop'
        },
    ];

    const instructions = {
        ios: {
            en: [
                'Open the App Store on your device',
                'Search for "Cap Player"',
                'Download and install the app',
                'Open the app and select "Login with Mac & Password"',
                'Enter your MAC address and password provided by us',
                'Start watching!'
            ],
            fr: [
                'Ouvrez l\'App Store sur votre appareil',
                'Recherchez "Cap Player"',
                'Téléchargez et installez l\'application',
                'Ouvrez l\'app et sélectionnez "Connexion avec MAC & Mot de passe"',
                'Entrez votre adresse MAC et le mot de passe fourni par nous',
                'Commencez à regarder !'
            ],
        },
        android: {
            en: [
                'Open Google Play Store',
                'Search for "Cap Player"',
                'Install the application',
                'Launch Cap Player',
                'Select "Login with Mac & Password"',
                'Enter your credentials',
                'Enjoy your content!'
            ],
            fr: [
                'Ouvrez Google Play Store',
                'Recherchez "Cap Player"',
                'Installez l\'application',
                'Lancez Cap Player',
                'Sélectionnez "Connexion avec MAC & Mot de passe"',
                'Entrez vos identifiants',
                'Profitez de votre contenu !'
            ],
        },
        streaming: {
            en: [
                'Fire TV: Use Downloader app code "628699"',
                'Roku: Add channel with code "CAPPLAYER" or visit my.roku.com/account/add/CAPPLAYER',
                'Install Cap Player',
                'Open app and choose "Login with Mac & Password"',
                'Enter your credentials',
                'Start streaming!'
            ],
            fr: [
                'Fire TV: Utilisez le code Downloader "628699"',
                'Roku: Ajoutez la chaîne avec le code "CAPPLAYER" ou visitez my.roku.com/account/add/CAPPLAYER',
                'Installez Cap Player',
                'Ouvrez l\'app et choisissez "Connexion avec MAC & Mot de passe"',
                'Entrez vos identifiants',
                'Commencez le streaming !'
            ],
        },
        smarttv: {
            en: [
                'Go to your TV\'s App Store (Samsung Apps, LG Content Store, etc.)',
                'Search for "Cap Player"',
                'Install the application',
                'Launch Cap Player',
                'Select "Login with Mac & Password"',
                'Enter your credentials',
                'Enjoy on the big screen!'
            ],
            fr: [
                'Allez sur l\'App Store de votre TV (Samsung Apps, LG Content Store, etc.)',
                'Recherchez "Cap Player"',
                'Installez l\'application',
                'Lancez Cap Player',
                'Sélectionnez "Connexion avec MAC & Mot de passe"',
                'Entrez vos identifiants',
                'Profitez sur grand écran !'
            ],
        },
        windows: {
            en: [
                'Visit capplayer.com/windows or Microsoft Store',
                'Download Cap Player',
                'Install and launch the application',
                'Select "Login with Mac & Password"',
                'Enter your credentials',
                'Watch on your PC!'
            ],
            fr: [
                'Visitez capplayer.com/windows ou Microsoft Store',
                'Téléchargez Cap Player',
                'Installez et lancez l\'application',
                'Sélectionnez "Connexion avec MAC & Mot de passe"',
                'Entrez vos identifiants',
                'Regardez sur votre PC !'
            ],
        },
    };

    return (
        <section id="how-to-install" className="py-20 relative overflow-hidden bg-dark-lighter/50">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">
                        {t.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>

                {/* Platform Selector */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-white mb-6 text-center">{t.platforms}</h3>
                    <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4">
                        {platforms.map((platform) => {
                            const Icon = platform.icon;
                            return (
                                <button
                                    key={platform.id}
                                    onClick={() => setSelectedPlatform(platform.id)}
                                    className={cn(
                                        'glass-effect rounded-xl px-4 py-4 md:px-6 flex flex-col items-center gap-2 transition-all duration-300 md:min-w-[160px]',
                                        selectedPlatform === platform.id
                                            ? 'border-2 border-primary bg-primary/10 scale-105'
                                            : 'border border-white/10 hover:border-primary/50 hover:scale-102'
                                    )}
                                >
                                    <Icon size={28} className={cn('md:w-8 md:h-8', selectedPlatform === platform.id ? 'text-primary' : 'text-white/70')} />
                                    <span className={cn(
                                        'font-medium text-sm text-center',
                                        selectedPlatform === platform.id ? 'text-primary' : 'text-white/70'
                                    )}>
                                        {platform.name}
                                    </span>
                                    <span className="text-[10px] md:text-xs text-white/40 max-w-[140px] text-center block leading-tight">
                                        {platform.details}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Content Grid: Video + Instructions */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Video Tutorial Placeholder */}
                    <div className="glass-effect rounded-2xl p-6 md:p-8">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <Play className="text-primary" size={24} />
                            {t.videoTutorial}
                        </h3>
                        <div className="aspect-video bg-dark-card rounded-lg flex items-center justify-center border border-white/10">
                            <div className="text-center space-y-3">
                                <Play size={48} className="text-white/30 mx-auto" />
                                <p className="text-white/50 text-sm px-4">
                                    {t.tutorialComing}
                                </p>
                                <p className="text-white/30 text-xs">
                                    {/* Placeholder for video file: /public/guides/videos/{selectedPlatform}-tutorial.mp4 */}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Screenshot Placeholder */}
                    <div className="glass-effect rounded-2xl p-6 md:p-8">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <ImageIcon className="text-primary" size={24} />
                            {t.screenshot}
                        </h3>
                        <div className="aspect-video bg-dark-card rounded-lg flex items-center justify-center border border-white/10">
                            <div className="text-center space-y-3">
                                <ImageIcon size={48} className="text-white/30 mx-auto" />
                                <p className="text-white/50 text-sm px-4">
                                    {t.screenshotComing}
                                </p>
                                <p className="text-white/30 text-xs">
                                    {/* Placeholder for image file: /public/guides/screenshots/{selectedPlatform}-install.png */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Installation Steps */}
                <div className="max-w-4xl mx-auto">
                    <div className="glass-effect rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <Download className="text-primary" size={28} />
                            {t.installInstructions}
                        </h3>

                        <div className="space-y-6">
                            {instructions[selectedPlatform as keyof typeof instructions][lang].map((step, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center font-bold text-white">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/90 text-lg leading-relaxed">{step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="flex-1"
                                onClick={() => window.open('https://capplayer.com/', '_blank')}
                            >
                                <Download size={20} className="mr-2" />
                                {t.step1}
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="flex-1"
                                onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                <Key size={20} className="mr-2" />
                                {t.getCredentials}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
