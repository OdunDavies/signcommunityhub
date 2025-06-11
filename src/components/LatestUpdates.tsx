import React, { useEffect, useState } from 'react';

const LatestUpdates = () => {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

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
    coingeckoScript.src = "https://widgets.coingecko.com/coingecko-coin-ticker-widget.js";
    coingeckoScript.async = true;
    coingeckoScript.onload = () => setIsWidgetLoaded(true);
    document.head.appendChild(coingeckoScript);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      const existingJuicerScript = document.querySelector('script[src="https://www.juicer.io/embed/sign/embed-code.js"]');
      const existingCoingeckoScript = document.querySelector('script[src="https://widgets.coingecko.com/coingecko-coin-ticker-widget.js"]');
      
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {!isWidgetLoaded && (
            <div className="col-span-full text-center py-4 text-muted-foreground">
              Loading crypto prices...
            </div>
          )}
          <div dangerouslySetInnerHTML={{
            __html: `
              <coingecko-coin-ticker-widget 
                coin-id="bitcoin" 
                currency="usd" 
                locale="en"
                background-color="#1a1b1f"
                font-color="#ffffff">
              </coingecko-coin-ticker-widget>
            `
          }} />
          <div dangerouslySetInnerHTML={{
            __html: `
              <coingecko-coin-ticker-widget 
                coin-id="ethereum" 
                currency="usd" 
                locale="en"
                background-color="#1a1b1f"
                font-color="#ffffff">
              </coingecko-coin-ticker-widget>
            `
          }} />
          <div dangerouslySetInnerHTML={{
            __html: `
              <coingecko-coin-ticker-widget 
                coin-id="solana" 
                currency="usd" 
                locale="en"
                background-color="#1a1b1f"
                font-color="#ffffff">
              </coingecko-coin-ticker-widget>
            `
          }} />
          <div dangerouslySetInnerHTML={{
            __html: `
              <coingecko-coin-ticker-widget 
                coin-id="sign" 
                currency="usd" 
                locale="en"
                background-color="#1a1b1f"
                font-color="#ffffff">
              </coingecko-coin-ticker-widget>
            `
          }} />
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
