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

    // Create and append the TradingView widget script
    const tradingViewScript = document.createElement('script');
    tradingViewScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    tradingViewScript.type = "text/javascript";
    tradingViewScript.async = true;
    tradingViewScript.onload = () => setIsWidgetLoaded(true);
    document.head.appendChild(tradingViewScript);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      const existingJuicerScript = document.querySelector('script[src="https://www.juicer.io/embed/sign/embed-code.js"]');
      const existingTradingViewScript = document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"]');
      
      if (existingJuicerScript) {
        document.head.removeChild(existingJuicerScript);
      }
      if (existingTradingViewScript) {
        document.head.removeChild(existingTradingViewScript);
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
        {!isWidgetLoaded && (
          <div className="text-center py-4 text-muted-foreground">
            Loading crypto prices...
          </div>
        )}
        <div dangerouslySetInnerHTML={{
          __html: `
            <script src="https://widgets.coingecko.com/gecko-coin-list-widget.js"></script>
            <gecko-coin-list-widget locale="en" dark-mode="true" outlined="true" coin-ids="sign-global,the-open-network,bitcoin,ethereum,tether,solana" initial-currency="usd"></gecko-coin-list-widget>
          `
        }} />
      </div>
    </div>
  );
};

export default LatestUpdates;
