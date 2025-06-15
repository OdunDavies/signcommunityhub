import React, { useState, useEffect } from 'react';
import { ExternalLink, Play, X } from 'lucide-react';
import ClickableImage from './ClickableImage';

interface MediaOverlayProps {
  src: string;
  isVideo?: boolean;
  onClose: () => void;
}

const MediaOverlay: React.FC<MediaOverlayProps> = ({ src, isVideo, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X size={24} />
      </button>
      <div className="max-w-4xl w-full max-h-[90vh]">
        {isVideo ? (
          <video controls className="w-full h-full">
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img src={src} alt="Enlarged view" className="w-full h-full object-contain" />
        )}
      </div>
    </div>
  );
};

const CreatorsSection = () => {
  const [selectedMedia, setSelectedMedia] = useState<{ src: string; isVideo?: boolean } | null>(null);
  const [isTwitterScriptLoaded, setIsTwitterScriptLoaded] = useState(false);

  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.onload = () => setIsTwitterScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const creators = [
    {
      username: 'ashu__arts',
      displayName: '🧡 ASHU 🧡',
      bio: 'Starting a new life with my artwork with @sign . Contributor to @sign , @ethsign and to Orange Dynasty 🧡',
      avatar: 'https://unavatar.io/twitter/ashu__arts',
      url: 'https://x.com/ashu__arts?s=21',
      artworks: [
        '/lovable-uploads/d62f1627-ba0b-42f1-a36d-53d82aaa6e65.png',
        '/lovable-uploads/57765f81-92b0-47eb-897c-556c40cd27a7.png',
        '/lovable-uploads/60ccb0ff-8270-480f-8366-8647f507be1d.png'
      ]
    },
    {
      username: 'robertlazy23',
      displayName: 'RobertLeyZ.Signcares',
      bio: 'SIGN 🧡 Sign Cares 🧡 Sign Cares Exodus Cabanatuan 🧡 HELP 🤝 ART 🎨 GAMES 🎮 REPEAT🔁 ~Xoxo RobertDaVinci',
      avatar: 'https://unavatar.io/twitter/robertlazy23',
      url: 'https://x.com/robertlazy23?s=21',
      artworks: [
        '/lovable-uploads/cc176306-f6a4-47ad-9b13-3e06cc9b51eb.png',
        '/lovable-uploads/robert3.jpg'
      ]
    },
    {
      username: 'defikelv',
      displayName: 'Defi kelv | 𓊈𒆜🐙𒆜𓊉',
      bio: '𝗪𝗘𝗕𝟯 𝗘𝗡𝗧𝗛𝗨𝗦𝗜𝗔𝗦𝗧 ¤ 𝗚𝗥𝗔𝗣𝗛𝗜𝗖𝗦 𝗗𝗘𝗦𝗜𝗚𝗡𝗘𝗥 ¤ 𝗖𝗢𝗠𝗠𝗨𝗡𝗜𝗧𝗬 𝗠𝗢𝗗𝗘𝗥𝗔𝗧𝗢𝗥 ¤ 𝗕𝗨𝗜𝗟𝗗𝗜𝗡𝗚 𝗪𝗜𝗧𝗛 @sign @otomato_xyz',
      avatar: 'https://unavatar.io/twitter/defikelv',
      url: 'https://x.com/defikelv?s=21',
      artworks: [
        '/lovable-uploads/5676b947-5bca-423d-bb30-4761827d91fd.png',
        '/lovable-uploads/478af62f-e60a-46b7-86ea-4c6760b8d1a9.png',
        '/lovable-uploads/kelvin2.mp4'
      ],
      hasVideo: true
    },
    {
      username: '_biggids',
      displayName: 'Big Gids👨‍🍳',
      bio: 'Community Ecosystem Lead @sign | Founder @SignAcademyHQ | Founder/Host of #OnchainOrigins podcast.',
      avatar: 'https://unavatar.io/twitter/_biggids',
      url: 'https://x.com/_biggids/',
      artworks: [
        '/lovable-uploads/392c2708-17e5-4a5e-8d7d-b3040c339e37.png'
      ]
    },
    {
      username: 'lucky_of_web3',
      displayName: 'Lucky | Web3',
      bio: 'Web3 enthusiast. Sharing insights and updates. Connect with me on X!',
      avatar: 'https://unavatar.io/twitter/lucky_of_web3',
      url: 'https://x.com/lucky_of_web3?s=21',
      artworks: [],
      tweets: [
        'https://x.com/lucky_of_web3/status/1919384486115975373?s=46',
        'https://x.com/lucky_of_web3/status/1922245416722055623?s=46',
        'https://x.com/lucky_of_web3/status/1922757287334064140?s=46',
      ]
    },
    {
      username: 'tajudeen_10',
      displayName: 'Tajudeen 🔶',
      bio: 'KING of @sign | Building the @ethsign Dynasty 🧡👀',
      avatar: 'https://unavatar.io/twitter/tajudeen_10',
      url: 'https://x.com/tajudeen_10?s=21',
      artworks: [
        '/lovable-uploads/taj1.mp4',
        '/lovable-uploads/taj2.mp4'
      ],
      hasVideo: true,
      tweets: [
        'https://x.com/tajudeen_10/status/1929589023464378665?s=46'
      ]
    },
    {
      username: 'wavee_ton',
      displayName: 'Wavee.ton💎🧡🦺',
      bio: '$TON Ecosystem Researcher | Contributor @sign & @ethsign lover🧡🦺 | @SoarFunToken affiliate | DM for collabs & thread writing opportunities',
      avatar: 'https://unavatar.io/twitter/wavee_ton',
      url: 'https://x.com/wavee_ton?s=21',
      artworks: [
        '/lovable-uploads/wave1.mp4',
        '/lovable-uploads/wave2.mp4'
      ],
      hasVideo: true
    }
  ];

  return (
    <div className="space-y-8">
      {selectedMedia && (
        <MediaOverlay 
          src={selectedMedia.src}
          isVideo={selectedMedia.isVideo}
          onClose={() => setSelectedMedia(null)}
        />
      )}
      
      <h2 className="text-3xl font-bold crypto-gradient bg-clip-text text-transparent text-center">
        Featured Creators
      </h2>
      
      <div className="grid grid-cols-1 gap-8">
        {creators.map((creator, index) => (
          <div 
            key={creator.username} 
            className="creator-card animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Creator Profile */}
            <div 
              className="flex items-start gap-4 mb-6 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.open(creator.url, '_blank')}
            >
              <ClickableImage
                src={creator.avatar}
                alt={creator.displayName}
                className="w-16 h-16 rounded-full object-cover border-2 border-crypto-purple/30"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg">{creator.displayName}</h3>
                  <ExternalLink size={16} className="text-crypto-purple cursor-pointer" onClick={(e) => {
                    e.stopPropagation();
                    window.open(creator.url, '_blank');
                  }} />
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(creator.url, '_blank');
                  }}
                  className="px-4 py-1.5 bg-crypto-purple text-white rounded-full text-sm font-medium hover:bg-crypto-purple/80 transition-colors mb-2"
                >
                  Follow
                </button>
                <p className="text-crypto-purple text-sm mb-2">@{creator.username}</p>
                <p className="text-muted-foreground text-sm">{creator.bio}</p>
              </div>
            </div>

            {/* Artworks */}
            {creator.artworks.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-semibold text-crypto-purple">Recent Works</h4>
                <div className="grid grid-cols-2 gap-3">
                  {creator.artworks.map((artwork, artIndex) => {
                    const isVideo = artwork.endsWith('.mp4');
                    return (
                      <div 
                        key={artIndex} 
                        className="relative group overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => setSelectedMedia({ src: artwork, isVideo })}
                      >
                        {isVideo ? (
                          <div className="w-full h-32 flex items-center justify-center bg-gradient-to-br from-crypto-purple to-crypto-blue">
                            <Play size={32} className="text-white" />
                          </div>
                        ) : (
                          <img
                            src={artwork}
                            alt={`Artwork by ${creator.displayName}`}
                            className="w-full h-32 object-cover transition-transform group-hover:scale-110"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tweets Section */}
            {creator.tweets && creator.tweets.length > 0 && (
              <div className="space-y-4 mt-4">
                <h4 className="font-semibold text-crypto-purple">Featured Tweets</h4>
                <div className="flex flex-col gap-4">
                  {creator.tweets.map((tweetUrl, tweetIdx) => (
                    <div key={tweetIdx} className="rounded-lg overflow-hidden border border-crypto-purple/20 bg-white dark:bg-black/30 shadow">
                      <div className="p-4">
                        <a 
                          href={tweetUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block hover:opacity-80 transition-opacity"
                        >
                          <div dangerouslySetInnerHTML={{
                            __html: `
                              <blockquote class="twitter-tweet" data-lang="en">
                                <a href="${tweetUrl}"></a>
                              </blockquote>
                            `
                          }} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Special badges */}
            {creator.username === 'mubi_crypt' && (
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-crypto-pink/20 text-crypto-pink text-xs rounded-full">
                  TikTok Star
                </span>
                <span className="px-3 py-1 bg-crypto-blue/20 text-crypto-blue text-xs rounded-full">
                  Community Educator
                </span>
              </div>
            )}

            {creator.username === '_biggids' && (
              <div className="mt-4">
                <span className="px-3 py-1 bg-crypto-green/20 text-crypto-green text-xs rounded-full">
                  Official Education Partner
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatorsSection;
