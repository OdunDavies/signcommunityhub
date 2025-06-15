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
    coingeckoScript.src = "https://widgets.coingecko.com/gecko-coin-list-widget.js";
    coingeckoScript.async = true;
    coingeckoScript.onload = () => setIsWidgetLoaded(true);
    document.head.appendChild(coingeckoScript);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      const existingJuicerScript = document.querySelector('script[src="https://www.juicer.io/embed/sign/embed-code.js"]');
      const existingCoingeckoScript = document.querySelector('script[src="https://widgets.coingecko.com/gecko-coin-list-widget.js"]');
      
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

      {/* Crypto Price Widget */}
      <div className="crypto-card">
        <h3 className="text-lg font-semibold mb-4 crypto-gradient bg-clip-text text-transparent">
          Live Crypto Prices
        </h3>
        {!isWidgetLoaded && (
          <div className="text-center py-4 text-muted-foreground">
            Loading crypto prices...
          </div>
        )}
        <div dangerouslySetInnerHTML={{
          __html: `
            <gecko-coin-list-widget 
              coin-ids="bitcoin,ethereum,bnb,the-open-network,sign-global"
              currency="usd"
              locale="en"
              background-color="transparent"
              text-color="#FFFFFF"
              border-color="#6B46C1"
              border-radius="8"
              padding="16"
              font-family="Inter"
              font-size="14"
              font-weight="500"
              height="400"
              width="100%"
            ></gecko-coin-list-widget>
          `
        }} />
      </div>
    </div>
  );
};

export default LatestUpdates;
