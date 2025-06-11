
import React, { useEffect } from 'react';

const LatestUpdates = () => {
  useEffect(() => {
    // Create and append the Juicer script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.juicer.io/embed/sign/embed-code.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://www.juicer.io/embed/sign/embed-code.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold crypto-gradient bg-clip-text text-transparent">
        Latest Updates
      </h2>
      
      {/* Juicer Embed */}
      <div className="crypto-card">
        <h3 className="text-lg font-semibold mb-4 crypto-gradient bg-clip-text text-transparent">
          Live Social Feed
        </h3>
        <div id="juicer-embed" className="juicer-feed" data-feed-id="sign"></div>
      </div>
      
      {/* Crypto Widget */}
      <div className="crypto-card mt-8">
        <h3 className="text-lg font-semibold mb-4 crypto-gradient bg-clip-text text-transparent">
          Live Crypto Prices
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-between items-center py-2">
            <span className="font-medium">BTC</span>
            <span className="text-crypto-green">$43,250</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="font-medium">ETH</span>
            <span className="text-crypto-green">$2,650</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="font-medium">SOL</span>
            <span className="text-crypto-green">$238</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="font-medium">SIGN</span>
            <span className="text-crypto-green">$0.045</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
