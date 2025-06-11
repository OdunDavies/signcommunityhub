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

    // Create and append the CoinGecko widget script
    const coingeckoScript = document.createElement('script');
    coingeckoScript.src = "https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js";
    coingeckoScript.async = true;
    document.head.appendChild(coingeckoScript);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      const existingJuicerScript = document.querySelector('script[src="https://www.juicer.io/embed/sign/embed-code.js"]');
      const existingCoingeckoScript = document.querySelector('script[src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"]');
      
      if (existingJuicerScript) {
        document.head.removeChild(existingJuicerScript);
      }
      if (existingCoingeckoScript) {
        document.head.removeChild(existingCoingeckoScript);
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
        <div className="w-full overflow-hidden rounded-lg">
          <div dangerouslySetInnerHTML={{
            __html: `
              <coingecko-coin-price-marquee-widget 
                coin-ids="bitcoin,ethereum,solana,sign" 
                currency="usd" 
                background-color="#1a1b1f" 
                locale="en" 
                font-color="#ffffff">
              </coingecko-coin-price-marquee-widget>
            `
          }} />
        </div>
        <div className="mt-4">
          <div dangerouslySetInnerHTML={{
            __html: `
              <coingecko-coin-compare-chart-widget 
                coin-ids="bitcoin,ethereum,solana,sign" 
                currency="usd" 
                locale="en"
                background-color="#1a1b1f"
                font-color="#ffffff">
              </coingecko-coin-compare-chart-widget>
            `
          }} />
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
