import React from 'react';
import { Twitter, Globe, MessageCircle } from 'lucide-react';
import ClickableImage from './ClickableImage';

const Header = () => {
  return (
    <header className="relative overflow-hidden py-12 px-6">
      <div className="absolute inset-0 sign-gradient opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full sign-gradient p-1 float-animation">
              <ClickableImage
                src="/lovable-uploads/bd2d3ae0-b6fa-4273-9de6-cdbf4aa554af.png"
                alt="Sign Logo"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold sign-gradient bg-clip-text text-transparent mb-4">
              SignCommunityHub
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
              Building the future of decentralized communities. Empowering creators, traders, and innovators in the crypto space through collaboration and cutting-edge technology.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://x.com/sign"
                target="_blank"
                rel="noopener noreferrer"
                className="sign-button flex items-center gap-2"
              >
                <Twitter size={20} />
                @sign
              </a>
              <a
                href="https://sign.global"
                target="_blank"
                rel="noopener noreferrer"
                className="sign-button flex items-center gap-2"
              >
                <Globe size={20} />
                Official Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
