import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

interface ContactProps {
    lang: 'en' | 'fr';
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const content = {
        en: {
            title: 'Contact Us',
            subtitle: 'We\'re here to help 24/7',
            namePlaceholder: 'Your Name',
            emailPlaceholder: 'Your Email',
            subjectPlaceholder: 'Subject',
            messagePlaceholder: 'Your Message',
            send: 'Send Message',
            whatsapp: 'Chat on WhatsApp',
            email: 'Email Support',
            phone: 'Call Us',
            successMessage: 'Message sent successfully!',
        },
        fr: {
            title: 'Contactez-nous',
            subtitle: 'Nous sommes là pour vous aider 24/7',
            namePlaceholder: 'Votre Nom',
            emailPlaceholder: 'Votre Email',
            subjectPlaceholder: 'Sujet',
            messagePlaceholder: 'Votre Message',
            send: 'Envoyer le Message',
            whatsapp: 'Discuter sur WhatsApp',
            email: 'Support par Email',
            phone: 'Appelez-nous',
            successMessage: 'Message envoyé avec succès !',
        },
    };

    const t = content[lang];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would integrate with your backend
        alert(t.successMessage);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactMethods = [
        {
            icon: MessageCircle,
            title: t.whatsapp,
            description: '+33 6 XX XX XX XX',
            action: () => window.open('https://wa.me/33XXXXXXXXX', '_blank'),
            color: 'from-green-400 to-green-600',
        },
        {
            icon: Mail,
            title: t.email,
            description: 'support@alphatv.com',
            action: () => window.location.href = 'mailto:support@alphatv.com',
            color: 'from-blue-400 to-blue-600',
        },
        {
            icon: Phone,
            title: t.phone,
            description: '+33 6 XX XX XX XX',
            action: () => window.location.href = 'tel:+33XXXXXXXXX',
            color: 'from-purple-400 to-purple-600',
        },
    ];

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
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

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        return (
                            <button
                                key={index}
                                onClick={method.action}
                                className="glass-effect rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 border border-white/10 hover:border-primary/50"
                            >
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center`}>
                                    <Icon size={28} className="text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                                <p className="text-white/60 text-sm">{method.description}</p>
                            </button>
                        );
                    })}
                </div>

                {/* Contact Form */}
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 md:p-12 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder={t.namePlaceholder}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-dark-card border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder={t.emailPlaceholder}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-dark-card border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder={t.subjectPlaceholder}
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-dark-card border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            />
                        </div>

                        <div>
                            <textarea
                                placeholder={t.messagePlaceholder}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                rows={6}
                                className="w-full px-4 py-3 rounded-lg bg-dark-card border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                            <Send size={20} className="mr-2" />
                            {t.send}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};
