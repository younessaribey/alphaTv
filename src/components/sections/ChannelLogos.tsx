import React from 'react';
import './ChannelLogos.css';

export const ChannelLogos: React.FC = () => {
    // Channel logos - using the ones we generated plus placeholders for others
    const channels = [
        { name: 'Canal+', src: '/channels/canal-plus.png' },
        { name: 'beIN Sports', src: '/channels/bein-sport.png' },
        { name: 'Netflix', src: '/channels/netflix.png' },
        { name: 'Apple TV+', src: '/channels/apple-tv.png' },
        { name: 'HBO', src: '/channels/hbo.png' },
        { name: 'Disney+', src: '/channels/disney-plus.png' },
        { name: 'TF1', src: '/channels/tf1.png' },
        // Placeholders for channels we couldn't generate (will show channel name)
        { name: 'France 2', src: null },
        { name: 'M6', src: null },
        { name: 'ARTE', src: null },
        { name: 'RMC Sport', src: null },
    ];

    // Duplicate the array for seamless infinite scroll
    const duplicatedChannels = [...channels, ...channels, ...channels];

    return (
        <section className="py-12 relative overflow-hidden bg-gradient-to-b from-dark to-dark-lighter">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                {/* Section Title */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white/90 mb-2">
                        Available Channels
                    </h3>
                    <p className="text-white/60">
                        Stream from the world's leading networks
                    </p>
                </div>

                {/* Scrolling Logos Container */}
                <div className="channel-logos-container">
                    <div className="channel-logos-track">
                        {duplicatedChannels.map((channel, index) => (
                            <div
                                key={index}
                                className="channel-logo-item"
                            >
                                {channel.src ? (
                                    <img
                                        src={channel.src}
                                        alt={channel.name}
                                        className="channel-logo-image"
                                    />
                                ) : (
                                    <div className="channel-logo-placeholder">
                                        <span className="text-white/80 font-semibold text-sm sm:text-base">
                                            {channel.name}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
